# Sailing with Angular

a [Sails](http://sailsjs.org) application with AngularJS.

# Installation
Run this following code:
```bash
$ npm install
```
This will automatically run npm install, followed by bower install

# Adding new npm modules
To add new npm modules, just do a simple
```bash
$ npm install <module> --save
```

# Adding new bower components for front-end javascript files
To add new bower components, just run this following command:
```bash
$ ./node_modules/.bin/bower install <component> --saves
```
Then do not forget to add it to `tasks/config/copy.js`. This file will copy all
files that will be the project's UI dependencies.
[Source](http://ghost-parnurzeal.rhcloud.com/sails-js-angularjs-bower-mocha/).

Load order is managed inside `tasks/pipeline.js`. Using bower for frontend
modules makes it easier to keep track of our plugins' version, as well as
upgrading.
