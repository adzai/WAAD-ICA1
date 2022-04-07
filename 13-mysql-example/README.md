# MySQL example
Example using a MySQL database.
The following environment variables have to be set:
- dbhost
- dbuser
- dbpass
- db

## Install
`npm i`

## Run
`node app.js`

## Test
`curl -X POST http://localhost:3000/users -d '{"id":0, "name": "adam", "value": 7}' -H 'Content-Type: application/json'`
`curl http://localhost:3000/users/0`
`curl -X PUT http://localhost:3000/users/0 -d '{"id":1, "name": "bob", "value": 1}' -H 'Content-Type: application/json'`
`curl -X PATCH http://localhost:3000/users/0 -d '{"name": "adam"}' -H 'Content-Type: application/json'`
`curl -X DELETE http://localhost:3000/users/0`
