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

### Request body structure

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
    - The `item` property stores general data about the content item. Is required.
        - The `name` property represents name on the content item. Is required.
    - The `variants` property stores specific data for each lanfuage variant in the project. Is required.

