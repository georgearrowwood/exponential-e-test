# Test task for Exponential-e by Juri Kalinin

## Live demo 

* Live demo of this test app can be found by this url: http://ert.fivetags.co.uk/ .
* App is built as docker image, pushed to aws docker images repository and then deployed in to aws cluster.

## Features 

I have done this test task with React, based on my own built boilerplate, here is some features of it:

* Uses given template as basic for ui and functionaity idea.
* It's bundled with webpack.
* Has hotloading feature enabled for development environment, so you dont need to refresh the page after you do change in code.
* It is isomorphic, will partially work with no javascript enabled in browser.
* Has backend preload initial state functionality.
* Uses react-bootstrap module to build all the bootsrap ui blocks
* Uses Redux for state management.
* Uses Jest and Enzyme for testing.
* Uses React Route v4.
* Dokerized.
* Has basic auth setup with jwt on backend and frontend.
* Backend data api services are mocked at the moment so it just returns simple data from express
* Used airbnb preset for linting

## How app works

* First you see home page with some guidance to go to login page in top menu.
* Login credentials are login: 'login' password: 'password'.
* After successful authentication you will be redirected to products page.
* Try different combinations with search filter select boxes.
* Search will be performed on select boxes value change.
* Logout.

## How to run

To run it in dev mode
* for server and client in watch dev mode
```
  docker-compose up
```
Then open in the browser:
```
  http://localhost:8080/
```


## Tasks descripton
* Watch dev mode for server
```
  npm run server-watch
```
* Hotload dev mode for frontend
```
  npm run client-watch
```
it will run it in hot load mode

To build and run server and client for production just run
```
npm run all-run
```

To build server and client for production run
```
npm run all-build
```

To build server for production run
```
npm run server-build
```

To build client for production run
```
npm run client-build
```

To build image:
```
docker build -t appname .
```
To run image:
```
docker run -p 8081:8081 appname
```
