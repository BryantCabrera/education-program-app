# Education Program App

by Bryant Cabrera

# Table of Contents

[TOC]

---

# Overview

## Brief Overview

This is an API created for a fictitious Education Program.

Link to Front-End Repo: [https://github.com/BryantCabrera/education-program-app](https://github.com/BryantCabrera/education-program-app)

Link to Back-End Repo: [https://github.com/BryantCabrera/education-program-api](https://github.com/BryantCabrera/education-program-api)

Link to Deployed Project: [https://education-program-app.herokuapp.com/](https://education-program-app.herokuapp.com/)

## Goals

1. Aggregates all data for every program into a convenient, easily accessible API.
1. Converts data from .csv to data stored on MongoDB (mlab).
1. Allows for CRUD operations on data.

## Non-Goals

1. Not meant to manipulate data.
1. Not meant to make calls to other APIs.

---

# Design

## Brief Overview

This project was built using 2 repos: 1 for the back-end and 1 for the front-end.
Both projects incorporate similar eslint, prettier, and typescript scaffolding.
The back-end implements RESTful routing, CRUD operations, and connects to a MongoDB (mlab).
The front-end implements hot reloading, live typescript reloading, and server rendering out of the box.

## High Level Design

NextJS -> React Front-End -> Node/Express server -> mongoDB ->

![App Flow Chart Placeholder]()

## Detailed Design

### Front-End

#### Built With

- [React](https://reactjs.org/docs/hello-world.html) - Javascript Framework
- [Styled Components](https://www.styled-components.com/docs) - Styling
- [NextJS](https://nextjs.org/) - Server Side Rendering
- [Node/Express](https://expressjs.com/) - API
- [Typescript](http://www.typescriptlang.org/) - Type enforcement
- [Prettier](https://prettier.io/) - Code formatting
- [Jest](https://jestjs.io/) Delightful JavaScript Testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) Testing APIs for working with React components

#### Typescript config

- `tsconfig.json` provides higher level typescript configuration
- `tslint.json` specifies linting rules
- interfaces that may be used in multiple places are kept in the `/common/interfaces.ts` directory.
- interfaces used in only one place can be defined where they are used (for example, React component props)

#### Code Formatting

- run `npm run format` to format code.
- code formatting is run automatically on `git commit`. Errors must be fixed before the commit can go through.
- linting is managed with a combination of prettier and tslint
- prettier settings can be updated in the script in package.json

#### Note on Server Rendering

If you turn off JavaScript in your browser, then start the app in production mode and direct your browser to `localhost:3000`, you'll see that the app renders with all its styles. That's because of the server render functionality. Server rendering can shorten the time to load, and also improve SEO.

If you want to add data fetched from an API to the server render, one way to do that is to use fetch from isomorphic unfetch and `await` the result. This is because in NextJS, the react components don't have access to the server's fetch capabilities.

#### Style Guide

![Bryant Cabrera's Style Guide for Education Program App Placeholder]()

### Back-End

Server Documentation: [View Documentation on swagger.io Placeholder]()

### Testing

#### Configure your package.json

1. `$npm install --save-dev nyc`
1. Make sure you have these scripts:
   1. `"test": "jest --coverage"`
   1. `"coverage": "nyc report --reporter=html"`

#### Configure your jest.config.js

1. In your jest.config.json file, make sure you have the following properties:

```
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/dist/**',
    '!**/*.d.ts',
  ],
```

---

# Use Cases

## Install

Run: `npm install`

## Test

Run: `npm test`

## Run

We have the option of running in either development mode or production mode.

### Development Mode

Run: `npm run dev` (build happens automatically)

- Frontend has hot reloading, backend rebuilds and restarts automatically when .ts files are updated.

### Production Mode

To start, run: `npm run start`.
To build and start run: `npm run build:start`

## Use

- Development mode: direct your browser to `localhost:3000`. The API runs on `localhost:4000`.
- To view live production app browse to [https://education-program-app.herokuapp.com/](https://education-program-app.herokuapp.com/)

---

# Deploy

## Deploy to Heroku</span>

<details>
<summary>Alternate Method: Use Heroku CLI</summary>

1.  Make sure your code is set up

    1.  Back-End
        1.  Make sure your CORS settings in server.js whitelists the appropriate URLs that will be hitting the server
        1.  Create a copy of your branch before you beging deploying master in case of any breaking changes `$git checkout -b master-copy-before-deployment`
    1.  Front-End

        1. Create a copy of your branch before you beging deploying master in case of any breaking changes `$git checkout -b master-copy-before-deployment`
        1. In package.json, make sure you have the following scripts
           "start": "node server.js",
           "build": "tsc -p .",
           "postinstall": "tsc -p .",
           "compile": "tsc && node server.js",
           "dev:server": "nodemon -e ts --exec \"npm run compile\""

           ```

           ```

        1. `$npm run build`

1.  `$git add -A` `$git commit -m "Prepares codebase for deployment."` `$git push`
1.  `$heroku create app-name`
1.  `$git push heroku master`

</details>

<details open>
<summary>
Current Method: CI (Continuous Integration) by linking Heroku to GitHub repo & branch
</summary>

1.  Make sure your code is set up
    1.  Back-End
        1.  Make sure your CORS settings in server.js whitelists the appropriate URLs that will be hitting the server
        1.  Create a copy of your branch before you beging deploying master in case of any breaking changes `$git checkout -b master-copy-before-deployment`
    1.  Front-End
        1. Create a copy of your branch before you beging deploying master in case of any breaking changes `$git checkout -b master-copy-before-deployment`
        1. In package.json, make sure you have the following scripts
           "start": "node server.js",
           "build": "tsc -p .",
           "postinstall": "tsc -p .",
           "compile": "tsc && node server.js",
           "dev:server": "nodemon -e ts --exec \"npm run compile\""
        1. `$npm run build`
1.  `$git add -A` `$git commit -m "Prepares codebase for deployment."` `$git push`
1.  `$heroku create app-name`
1.  Navigate to your heroku account > project name > deploy
1.  Connect your GitHub Account, enable auto-deployments, then select the branch to deploy from and trigger the 1st build

</details>

## OPTIONAL: Create Your Docker Image for Local Testing (Docker not used for this project)

This service can deployed using docker. A Dockerfile is included which can be used to build it into a production grade docker image.

1. If you don't already have it installed, `$brew install docker`
1. Build: from the root directory of this repo, run `docker build -t <registry>/<repo_name>:<tag> .`

<details>
<summary>Push Docker Image To Registry (ONLY IF YOUR BUILD PIPELINE IS BROKEN)</summary>

1. If the Docker image was built succesfully, log in to your registry in terminal.
   1. Example: `$az acr login --name bryant` and wait for it to print "Login Succeeded"
1. Push to registry: `docker push <registry>/<repo_name>:<tag>`. Example: `$docker push example.io/educationprogram:latest`

</details>

## OPTIONAL: Running Your Docker Image Locally (Docker not used for this project)

1. `$docker run -p 8080:8080 <registry>/<repo_name>:<tag>`.
1. `$docker ps` shows what's running
1. `$docker kill xxxx` where xxxx are the 1st 4 characters of the docker image ID, kills the currently running docker image
1. `$docker image ls` shows a list of all Docker images

---

# User Stories

`As a user, I want the app to open on a list of all programs.`

`As a user, I want to be able to sort the data in the table.`

`As a user, I want to be able to filter the data by typing into a search field and have it update as I type.`

---

# Logging And Monitoring

- Front-End
  - React
    - [x] Jest + react-testing-library unit testing
- Intermediary Server
  - [x] Jest + moxios unit tests
- Back-End
  - [x] Jest + supertest unit tests
  - [x] Create healthcheck path

---

# Intellectual Property

- Bryant Cabrera

---

# PII (Personally Identifiable Information)

None present. Have yet to implement auth.

---

# Security

- Application is client-facing and deployed externally. While it does not touch personal information, it could have user information in the future.
  - SOLUTION: The server should only be accessible if connecting with a whitelisted IP.
- There shouldn't be any command injection flaws.

---

# Development Tagging

- mongoDB
- 2 node/express servers
- react with NextJS SSR (server-side rendering)

---

# Infrastructure Cost

- Assumptions
  - There are only 111 documents in the mongoDB collection.
  - We are the only ones currently posting to app. - Costs will be \$0 for the time being.

---

# Data Retention

- mlab for our MongoDB database.
- Versioning on GitHub for both back-end and front-end.

---

# Caveats

- If we choose to store historical data, mongoDB storage will grow exponentially as we progress. Costs might become prohibitive.

---

# Alternatives

1. Use POSTCss or Sass for styling.
1. Utilize a monorepo structure.

---

# Further Reading

---

## Internal Documentation

[API README.md](https://github.com/BryantCabrera/education-program-api/blob/master/README.md)
[APP README.md](https://github.com/BryantCabrera/education-program-app/blob/master/README.md)

## External Documentation

TBD
