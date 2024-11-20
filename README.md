
## Development server 

In order to run this application you will need both [Node.js](https://nodejs.org/en/) and [Angular CLI](https://angular.io/cli) installed locally.

Run `npm install` prior to running application for the first time.

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Proxy
To bypass the CORS error when accessing https://api.commbank.au from http://localhost, a proxy configuration is added. This allows the Angular application to route requests through the local proxy during development. In production, the proxy will be ignored, and CORS will be handled according to the server's configuration as specified in its documentation
