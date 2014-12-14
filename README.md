# Sailing with Angular

a [Sails](http://sailsjs.org) application with AngularJS.

# Installation
Run this following code:
```
$ npm install
```
This will automatically run npm install, followed by bower install

# Adding new bower components
To add new bower components, just run this following command:
```
$ ./node_modules/.bin/bower install <component> --saves
```
Then do not forget to add it to `tasks/config/copy.js`. This file will copy all
files that will be the project's UI dependencies, as well as running the load
order.
[Source](http://ghost-parnurzeal.rhcloud.com/sails-js-angularjs-bower-mocha/)

# Adding new npm modules
To add new npm modules, just do a simple
```
$ npm install <module> --save
```

