# Migration tool for Kentico Cloud

Purpose of this tool is to migrate data from various sources to Kentico Cloud. More specifically, the goal is to make bulk import of data possible with Kentico Cloud. At this stage the tool is capable to:

- Import data with use of GUI or endpoints interface.
- Import data in JSON or CSV formats with a predefined structure.
- Generate blueprints for JSON or CSV formats to make it easier to compose the correct structure of import data.

Planned features are:

- No planned features. Waiting for your feedback.


## Usage

There are 2 ways on how to run the tool:

- [GUI](#gui)
- [Endpoint interface](#endpoint-interface)

Both the GUI and the Endpoint interface require you to acknowledge [structure of the import data](#structure-of-the-request-body).

## GUI

### Setup

There are 2 ways how to access the GUI:

1. Use the GUI on a testing Heroku instance:
```sh
https://migration-tool-kentico-cloud.herokuapp.com/
```
2. Obtain the code and run the tool locally on your machine. It is a Node.js app. Make sure you have Node.js installed and run the following command in the tool directory.
```sh
npm install
```
Run the server
```sh
npm start
```
Then the GUI is available on the following address:
```sh
http://localhost:5000/
```

### Importing data

![Image of the GUI](https://raw.githubusercontent.com/MilanLund/migration-tool/master/ui/assets/img/migrationtool.png)

To import data successfully you need to fill in following fields in the GUI:

- **Project settings** -  Required fields for Project ID and Content Management ID. (Tip: You can obtain these values in the **API keys** page in the Kentico Cloud administration interface of your project).
- **Import data** - Required field which should contain import data of the [following structure](#structure-of-the-request-body). Could be in JSON or CSV format. You can generate a [blueprint](#blueprints-in-gui) to help you structure the import data.

When you hit the **Import data** button you can see information about the ongoing import process. When the import process gets finished the response appears in the **Import data** field.

## Endpoint interface

### Setup

There are 2 ways how to access the endpoint:

1. Use an endpoint on a testing Heroku instance:
```sh
https://migration-tool-kentico-cloud.herokuapp.com/<YOUR_PROJECT_ID>
```
2. Obtain the code and run the tool locally on your machine. It is a Node.js app. Make sure you have Node.js installed and run the following command in the tool directory.
```sh
npm install
```
Run the server
```sh
npm start
```
Then the endpoint is available on the following address:
```sh
http://localhost:5000/<YOUR_PROJECT_ID>
```

### Importing data

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
-  Content type header:
```sh
Content-type: application/json
```
or
```sh
Content-type: text/csv
```
- The request body must be of JSON or CSV format with [predefined structure](#structure-of-the-request-body). You can generate a [blueprint](#blueprints-using-the-endpoint) to help you structure the import data.

## Blueprints

To be able to import data sucessfully to Kentico Cloud you need to provide the data in a [specific format](#structure-of-the-request-body). To help you compose the data structure correctly you can generate a blueprint. The blueprint is a scaffolding for your import data for a selected content model. There are 2 ways how to generate the blueprint:

- [In GUI](#blueprints-in-gui)
- [Using an endpoint](#blueprints-using-endpoint)

### Blueprints in GUI

To generate a blueprint in GUI you need to:

1. Fill in a valid Project ID.
2. Select a content model.
3. Select JSON or CSV format.
4. Hit the "Generate blueprint" button.
5. The blueprint appears in the code editor.

![Generate blueprints in GUI](https://raw.githubusercontent.com/MilanLund/migration-tool/master/ui/assets/img/blueprint.png)

### Blueprints using the endpoint

The best way how to access the endpoint is using [Postman](https://www.getpostman.com/apps). To generate a blueprint the request must have the following attributes: 

- The request URL must contain your Project ID, format and content model codename in the following format:
```sh
http://localhost:5000/<YOUR_PROJECT_ID>/blueprint/<FORMAT>/<CONTENT_MODEL_CODENAME>
```
- Supported formats are **json** and **csv**.
- The request must be GET.

### Working with the blueprint

To import your data sucessfully you need to fill in your data in the blueprint. See the example with a description of how the data should be filled in for supported import data formats:

- [JSON](#json-structure)
- [CSV](#csv-structure)

## Structure of the request body

To be able to import data sucessfully to Kentico Cloud you need to follow the predefined JSON or CSV structure and fit your data in the structure.

### JSON structure

Example: 
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
            },{
                "codename": "sample_sitemap_child"
            }],
            "external_id": "42"
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
        - The `external_id` property represents your custom identifier for the content item. The property is designed to be used when you are migrating data from other systems where the data items already have an indentifier assigned. String and is optional.
    - The `variants` property stores specific data for each language variant in the project. Each language variant is represented by an array item. Array and is required.
        - The `language.codename` property represents codename of a language variant to which the data should be assigned. The codename must fit one language variant in your Kentico Cloud project. String and is required.
        - The `elements` property represents data that should get imported in the Kentico Cloud project. Object and is required.
            - Child properties of the `elements` object represent content elements of the content model specified in the `item.type.codename` property. Key of each property represents codename of a content element in the content model. Value of the property is your data you attempt to import. Make sure the values are of a correct data type relevant to mapped content element type.

**Tip**: Values for `codename` properties could be obtained in the Kentico Cloud administration interface under the **{#}** icon:
- `type` codename in the **Content models** > **Content types** > **specific type** page. 
- `sitemap_locations` codenames in the **Sitemap** page.
- `language` codenames in the **Project** > **Localization** page.

![Codename](https://raw.githubusercontent.com/MilanLund/migration-tool/master/ui/assets/img/codename.png)
            
#### Content element types

The `elements` property maps your data to content elements of the chosen content model in the `item.type.codename` property. Each content element accepts a different data type:

- Data type **String** is accepted by the **Text, Rich text, Url slug** content elements.
- Data type **Number** is accepted by the **Number** content element.
- Data type **Array** is accepted by the **Multiple choice, Modular content, Taxonomy, Asset** content elements.
- Data type **String in the datetime format** ("2017-11-16T11:19:57.3768443Z") is accepted by the **Date & time** content element.

To fully understand the sturucture of properies in the `elements` property (especially when it comes to content elements that accept Array values) I recommend you to check the [Kentico Cloud documentation](https://developer.kenticocloud.com/reference#list-content-items) Try to make several list requests with use of the Delivery and Content Management APIs and see their responses.

**Please note**, uploading **Binary files** and adding **Assests** to the Asset libabry are not supported features in the tool.

### CSV structure

Example: 
```csv
name,type,sitemap_locations/codename,external_id,czech/simple_text,czech/simple_number,default/simple_text,default/simple_number
Management API test post 1,simple_type,sample_sitemap_grand_child|sample_sitemap_grand_child,42,Management API testovací článek 1,20,Management API test post 1,10
```
Columns delimiter could be **,** or **;**.
Column values delimiter is **|**.

When structuring import data in CSV you need to follow these rules:
- First line is header that defines structure of imported items. Other lines are imported items.
- **name** represents name of the content item. Required.
- **type** represents codename of a content model and must fit one of the content models specified in your Kentico Cloud project. Required.
- **sitemap_locations/codename** represents codenames of sitemap locations to which the content item should be assigned. The codenames must fit the ones that are specified in your Kentico Cloud project. Could consist of multiple values separated by the **|** character. Optional.
- **external_id** represents your custom identifier for the content item. The property is designed to be used when you are migrating data from other systems where the data items already have an indentifier assigned. Optional.
- Another columns stand for specific data for each language variant in the project. They could have one of the following formats depending on content element they represent:
    - **Text, Rich text, Url slug, Number, Date & time** content elements should have header in format **<language_codename>/<content_model_codename>**.
    - **Multiple choice, Modular content, Taxonomy** content elements should have header in format **<language_codename>/<content_model_codename>/codename**. Could consist of multiple values separated by the **|** character.
    - **Asset** content element should have header in format **<language_codename>/<content_model_codename>/id**. Could consist of multiple values separated by the **|** character.

## Under the hood

Below you can find a brief description of what the tool does under the hood:

1. Checks content type of the request body. If is CSV it is translated in JSON.
2. Checks whether the request body is not empty.
3. Makes a request with use of the Content Management API to get project items. By this request the tool checks whether the provided Project ID and Content Management API key are valid.
4. Makes a request with use of the Delivery API to get content models and their content elements.
5. Validates whether the JSON object obtatined in the request body fits the required structure.
6. Validates whether the JSON object obtatined in the request body fits the content models and their elements.
    - Validates existence of referenced content models.
    - Validates existence and data types of properties in the `elements` property.
7. If the previous steps are sucessfull the tool is ready to import the data. Please note that before the import process the tool checks existence only of content types and their content elements. It does not check existence of other referenced information i.e. language variants, taxonomy groups, sitemap locations. This will be probably checked during the import process.
8. Imports data in the Kentico Cloud project. In case language variants, taxonomy groups, sitemap locations or other imported information do not exist in the Kentico Cloud project, the import process will fail and content items imported during the process get deleted. 
9. The whole process finishes in one of the following states:
	- Data are sucessfully imported. Array of objects with id and codename of imported content items is sent in the response in the JSON format.
	- The process fails. Response with a relevant message is sent in the response.

## Please note

When the phase of importing data starts, the tool makes requests to Kentico Cloud. One request for each content items plus one request for each language variant of a content item. Examples:
- If you import 1 content item with 1 language variant, 2 requests are made. 
- If you import 1 content item with 2 language variants, 3 requests are made.
- If you import 2 content item with 2 language variants, 6 requests are made. 
- If you import 100 content item with 3 language variants, 400 requests are made. 

If the process fails the tool sends more requests to delete already imported content items. One request for each content item. There is no need to send additional delete requests for language variants. This is done to preserve state of the Kentico Cloud project before the import process has had started. This is important to know because this could make you exceed the amount of Content API calls in your Kentico Cloud pricing variant. I recommend you to test the import process on a small amount of content items.
