# Migration tool for Kentico Cloud

Purpose of this tool is to migrate data from various sources to Kentico Cloud. More specifically, the goal is to make bulk import of data possible with Kentico Cloud. At this stage the tool is capable to:

- Accept POST requests via endpoint.
- Accept migration data in the JSON format in the body of the request.
- Validate structure and data types of the migration data.

Planned features are:

- Import migration data in a Kentico Cloud project.
- Delete migrated data from a Kentico Cloud project.

## Usage
There are 2 ways on how to run the tool.

1. Use an endpoint on a testing Heroku instance:
  ```sh
  https://migration-tool-kentico-cloud.herokuapp.com/[projectId]
  ```
2. Obtain the code and rund the tool locally on your machine. It is a Node.js app. Make sure you have Node.js installed and run the following command in the tool directory.
  ```sh
  npm install
  ```
  Then the endpoit is available on th following address:
  ```sh
  http://localhost:5000/[projectId]
  ```
