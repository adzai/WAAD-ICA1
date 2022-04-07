# HTTP methods
Demonstrates HTTP methods GET, POST, DELETE, PATCH, PUT, HEAD and OPTIONS.
The endpoints don't do anything, instead the usual functionality is explained in comments.

## Install
`npm i`

## Run
`node app.js`

## Test
GET: `curl -X GET http://localhost:3000/users/1 -i`
POST: `curl -X POST http://localhost:3000/users/1 -i`
DELETE: `curl -X DELETE http://localhost:3000/users/1 -i`
PATCH: `curl -X PATCH http://localhost:3000/users/1 -i`
PUT: `curl -X PUT http://localhost:3000/users/1 -i`
OPTIONS: `curl -X OPTIONS http://localhost:3000/users/1 -i`
HEAD: `curl -I http://localhost:3000/users/1`
