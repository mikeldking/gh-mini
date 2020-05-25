# GitHub Mini

This is a small application built on top of GitHub's GraphQL API (version 4)

## Install

Install the dependencies using yarn

```bash
yarn
```

## Configuration

In order to run this project, you must supply a GitHub access token. Please follow the instructions provided [here](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql) to get an access token with all the right permissions.

Create a file named `next.config.js` at the root of this repo. Then, fill it out with your access token so that the requests to the GitHub API is authenticated

```javascript
module.exports = {
  env: {
    ghAccessToken: "<your-token-goes-here>",
  },
};
```

## Development

First, run the development server:

```bash
yarn deve
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Run

Use Next.js to compile the pages and start the server

```bash
yarn build
yarn start
```
