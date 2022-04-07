# JSON data
Example server accepting a JSON and logging it on `http://localhost:3000`.

## Install
`npm i`

## Run
`node app.js`

## Test
`curl -X POST http://localhost:3000 -d '{"test":1}' -H 'Content-Type: application/json'`
