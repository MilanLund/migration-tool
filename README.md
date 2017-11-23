# Migration tool for Kentico Cloud

Purpose of this tool is to migrate data from various sources to Kentico Cloud. More specifically, the goal is to make bulk import of data possible with Kentico Cloud. At this stage the tool is capable to:

- Accept POST requests via endpoint.
- Accept migration data in the JSON format in the body of the request.
- Validate structure and data types of the migration data.
- Import migration data in a Kentico Cloud project.
- Delete migrated data from a Kentico Cloud project in case the import process failed.

Planned features are:

- GUI

## Usage

### Setup

There are 2 ways on how to run the tool.

1. Use an endpoint on a testing Heroku instance:
```sh
https://migration-tool-kentico-cloud.herokuapp.com/<YOUR_PROJECT_ID>
```
2. Obtain the code and run the tool locally on your machine. It is a Node.js app. Make sure you have Node.js installed and run the following command in the tool directory.
```sh
npm install
```
Then the endpoint is available on the following address:
```sh
http://localhost:5000/<YOUR_PROJECT_ID>
```

### Making requests

The best way how to access the endpoint is using [Postman](https://www.getpostman.com/apps). The endpoint accepts requests with the following attributes: 

- The request URL must contain your Project ID.
```sh
http://localhost:5000/<YOUR_PROJECT_ID>
```
- The request must be POST.
- The request must contain the Authorization header with the Content Management API key:
```sh
Authorization: Bearer <YOUR_API_KEY>
```
- The request body must be a JSON object with a predefined structure and the relevant Content type header:
```sh
Content-type: application/json
```

### Structure of the request body 

To be able to import data sucessfully to Kentico Cloud you need to follow the predefined structure of the JSON object and fit your data in the structure. Example: 
```json
{
    "items": [{
        "item": {
            "name": "Management API test post 1",
            "type": {
                "codename": "simple_type"
            },
            "sitemap_locations": [{
                "codename": "sample_sitemap_grand_child"
            }]
        },
        "variants": [{
                "language": {
                    "codename": "czech"
                },
                "elements": {
                    "simple_text": "Management API testovací článek 1",
                    "simple_number": 20
                }
            },
            {
                "language": {
                    "codename": "default"
                },
                "elements": {
                    "simple_text": "Management API test post 1",
                    "simple_number": 10
                }
            }
        ]
    }]
}
```

- The top-level property `items` encapsulates all data. Is type of array and each item of the array represents a Kentico Cloud content item and it's language variants. Is required.
- Each content item consists of the `item` and `variants` properies.
    - The `item` property stores general data about the content item. Object and is required.
        - The `name` property represents name of the content item. String and is required.
        - The `type.codename` property represents codename of a content model and must fit one of the content models specified in your Kentico Cloud project. String and is required.
        - The `sitemap_locations` property represents codenames of sitemap locations to which the content item should be assigned. The codenames must fit the ones that are specified in your Kentico Cloud project. Array and is optional.
    - The `variants` property stores specific data for each language variant in the project. Each language variant is represented by an array item. Array and is required.
        - The `language.codename` property represents codename of a language variant to which the data should be assigned. The codename must fit one language variant in your Kentico Cloud project. String and is required.
        - The `elements` property represents data that should get imported in the Kentico Cloud project. Object and is required.
            - Child properties of the `elements` object represent content elements of the content model specified in the `item.type.codename` property. Key of each property represents codename of a content element in the content model. Value of the property is your data you attempt to import. Make sure the values are of a correct data type relevant to mapped content element type. 
            
#### Content element types

The `elements` property maps your data to content elements of the chosen content model in the `item.type.codename` property. Each content element accepts a different data type:

- Data type **String** is accepted by the **Text, Rich text, Url slug** content elements.
- Data type **Number** is accepted by the **Number content** element.
- Data type **Array** is accepted by the **Multiple choice, Modular content, Taxonomy** content elements.
- Data type **String in the datetime format** ("2017-11-16T11:19:57.3768443Z") is accepted by the **Date & time** content element.

To fully understand the sturucture of properies in the `elements` property (especially when it comes content elements that accept Array values) I recommend you to check the [Kentico Cloud documentation](https://developer.kenticocloud.com/reference#list-content-items) Try to make several list requests with use of the Delivery and Content Management APIs and see their responses.

**Please note**, uploading **Binary files** and the **Assest** element are not supported.

## Under the hood

Below you can find a brief description of what the tool does under the hood:

1. Checks whether the request body is not empty.
2. Makes a request with use of the Content Management API to get project items. By this request the tool checks whether the provided Project ID and Content Management API key are valid.
3. Makes a request with use of the Delivery API to get content models and their content elements.
4. Validates whether the JSON object obtatined in the request body fits the required structure.
5. Validates whether the JSON object obtatined in the request body fits the content models and their elements. 
    - Validates existence of referenced content models.
    - Validates existence and data types of properties in the `elements` property.
6. If the previous steps are sucessfull the tool is ready to import the data. Please note that before the import process the tool checks existence only of content types and their content elements. It does not check existence of other referenced information i.e. language variants, taxonomy groups, sitemap locations. This will be probably checked during the import process.
7. Imports data in the Kentico Cloud project. In case language variants, taxonomy groups, sitemap locations or other imported information do not exist in the Kentico Cloud project, the import process will fail and content items imported during the process get deleted. 
8. The whole process finishes in one of the following states:
	- Data are sucessfully imported. Array of objects with id and codename of imported content items is sent in the response in the JSON format.
	- The process fails. Response with a relevant message is sent in the response.

## Please note

When the phase of importing data starts, the tool makes requests to Kentico Cloud. One request for each content items plus one request for each language variant of a content item. Examples:
- If you import 1 content item with 1 language variant, 2 requests are made. 
- If you import 1 content item with 2 language variants, 3 requests are made.
- If you import 2 content item with 2 language variants, 6 requests are made. 
- If you import 100 content item with 3 language variants, 400c requests are made. 

If the process fails the tool sends more requests to delete already imported content items. One request for each content item. There is no need to send additional delete requests for language variants. This is done to preserve state of the Kentico Cloud project before the import process has had started. This is important to know because this could make you exceed the amount of Content API calls in your Kentico Cloud pricing variant. I recommend you to test the import process on a small amount of content items.
