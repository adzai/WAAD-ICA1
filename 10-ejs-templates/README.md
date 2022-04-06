# EJS Templates
Serves `index.ejs` in the `views/pages` directory at `http://localhost:3000`.
The template renders the name provided in the url query parameter.
If the the url query param `name=Adam` is provided, the template renders
additional text.

## Install
`npm i`

## Run
`node app.js`

## Test
`curl "http://localhost:3000?name=Tom"`

`curl "http://localhost:3000?name=Adam"`
