# Cookies
Serves an html form with a button at `http://localhost:3000`.
If the correct cookie is set in the browser and the button is pressed, the
user sees the secret response from `/secret`.
Otherwise, the `Wrong cookie!` message is received.

## Install
`npm i`

## Run
`node app.js`

## Test
`curl -X POST http://localhost:3000/secret --cookie "cookie=secret-cookie"`
`curl -X POST http://localhost:3000/secret --cookie "cookie=bad-cookie"`

