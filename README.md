Curio tech exercise

### Installation

`yarn install`

### Developing

Boot development server: `yarn dev`

Run tests: `yarn test`

### Config

see `.env`

### API

Api is proxied via the `/api/animals` endpoint for `GET` and `POST` requests.

* Posted data is kept in a memory store that expires every `2` minutes.
* Posted data will throw random error 50% of the time

### Tech stack

* ES6 React
* Next.js
* Material UI
* React hooks
* Jest tests 