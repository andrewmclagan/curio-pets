Curio tech exercise [![Build Status](https://cloud.drone.io/api/badges/andrewmclagan/curio-pets/status.svg)](https://cloud.drone.io/andrewmclagan/curio-pets)

# Usage

To get started simply run `yarn install` than `yarn dev` to start the development server.

Run tests: `yarn test`, start production server: `yarn build && yarn start`.

CI/CD is taken care of via Drone: https://cloud.drone.io/andrewmclagan/curio-pets

Automatically builds a docker image. To run the latest docker image

```bash
docker run -p 3000:3000 andrewmclagan/curio-pets:latest
```

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