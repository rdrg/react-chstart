Features: es6 with babel, reactjs, hot reload, webpack, scss

# Quick Start
## Development

1. Download this repository and unzip it.
2. Go to the folder you unzipped the project to and get all the npm dependencies:

        $ npm install

3. Start the development server:

        $ npm run dev

4. Open the application in your browser:

        http://localhost:8000

Start making changes to the JS and SCSS files and see them magically update in your browser (on file save)


## Production

1. Build the application:

        $ npm run build
2. Copy the dist folder to your PROD server


## Connection to API / Proxy to outside server

This project has been configured to proxy some API urls during development to a remote or local server in order to avoid cross site problems. You can/must change that configuration on webpack.config.js
