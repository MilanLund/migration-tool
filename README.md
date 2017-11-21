# Migration tool for Kentico Cloud

Purpose of this tool is to migrate data from various sources to Kentico Cloud. More specifically, the goal is to make bulk import of data possible with Kentico Cloud. At this stage the tool is capable to:

- Accept POST requests via endpoint.
- Accept migration data in the JSON format in the body of the request.
- Validate structure and data types of the migration data.

Planned features are:

- Import migration data in a Kentico Cloud project.
- Delete migrated data from a Kentico Cloud project.
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
Then the endpoit is available on th following address:
```sh
http://localhost:5000/<YOUR_PROJECT_ID>
```

### Making requests

The best way how to access the endpoint is using [Postman](https://www.getpostman.com/apps). The endpoint accepts requests with following attributes: 

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
        - The `name` property represents name on the content item. String and is required.
        - The `type.codename` property represents codename of a content model and must fit one of the content models specified in your Kentico Cloud project. String and is required.
        - The `sitemap_locations` property represents codenames of sitemap locations to which the content item should be assigned. The codenames must fit the ones that are specified in your Kentico Cloud project. Array and is optional.
    - The `variants` property stores specific data for each language variant in the project. Each language variant is represented by an array item. Array and is required.
        - The `language.codename` property represents codename of a language variant to which the data should be assigned. The codename must fit one language variant in your Kentico Cloud project. String and is required.
        - The `elements` property represents data that should get imported in the Kentico Cloud project. Object and is required.
            - Child properties of the `elements` object represent content elements of the content model specified in the `item.type.codename` property. Key of each property represents codename of a content element in the content model. Value of the property is your data you want to import. Make sure the values are of a correct data type relevant to mapped content element type. 
            
#### Content element types

The `elements` property maps your data to content elements of the chosen content model in the `item.type.codename` property. Each content element accepts a different data type:

- Data type **String** is accepted by the **Text, Rich text, Url slug** content elements.
- Data type **Number** is accepted by the **Number content** element.
- Data type **Array** is accepted by the **Multiple choice, Modular content, Taxonomy** content elements.
- Data type **String** in the datetime format ("2017-11-16T11:19:57.3768443Z") is accepted by the **Date & time** content element.

To fully understand the sturucture of properies in the `elements` property (especially when it comes content elements that accept Array values) I recommend you to check the [Kentico Cloud documentation](https://developer.kenticocloud.com/reference#list-content-items) and try to make several list requests with use of the Delivery and Content Management APIs.

## Under the hood

Below you can find a brief description what the tool does under the hood:

1. Checks whether the request body is not empty.
2. Makes a request with use of the Content Management API to get project items. By this request the tool checks whether the provided Project ID and Content Management API key are valid.
3. Makes a request with use of the Delivery API to get content models and their content elements.
4. Validates whether the JSON object obtatined in the request body fits the required structure.
5. Validates whether the JSON object obtatined in the request body fits the content models and their elements. 
    - Validates existence of referenced content models.
    - Validates existence and data types of properties in the `elements` property.
6. If the previous steps are sucessfull the tool is ready to import the data. Please note that before the import process the tool checks existence only of content types and their content elements. It does not check existence of other referenced information i.e. language variants, taxonomy groups, sitemap locations. This will be probably checked during the import process.
