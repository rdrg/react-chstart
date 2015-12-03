# Easy insights!

runs on es6/7 with babel, reactjs, hot reload, webpack, scss

###Quick Start
## Development

1. Go to root folder of easy-insights and:

        $ npm install

3. Start the development server:

        $ npm run dev

4. Open the application in your browser:

        http://localhost:8000

Start making changes to the JS and SCSS files and see them magically update in your browser (on file save)

## Production
1. Check webpack.production.config.js and change your target files.

2. Build the application:

        $ npm run build
  
3. Copy the dist folder to your PROD server


## Connection to API / Proxy to outside server

This project has been configured to proxy some API urls during development to a remote or local server in order to avoid cross site problems. You can/must change that configuration on webpack.config.js
