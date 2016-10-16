# KoLayout

## Install
To install using NPM do
```
npm install kolayout --save
```

## Compile Time
and to set up typescript tsconfig.json to allow resolution of submodules within kolayout package add the following:
```
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "kolayout/*": ["node_modules/kolayout/dist/typings/*"]
    }
  }
```

which allows you to do 
```
import {isDefined} from "kolayout/utils/isDefined";
```

if only IKoLayout or KoLayout is required, simply doing 
```
import {IKoLayout,KoLayout} from "kolayout";
```

## Run Time

Here is example setup for runtime using requirejs and using the directly transpiled output located in /dist/src folder within your application

```
  require.config({
    paths:{},
    packages:[
      {
         name: "kolayout",
         main: "index",
         location:"libs/kolayout"
      }
    ]
  });
```

assuming you copyed over npm package to libs in your gruntfile.js

```
  npmcopy: {
    // Anything can be copied 
    libs: {
      options: {
        destPrefix: 'wwwroot/libs'
      },
      files: {
        // Keys are destinations (prefixed with `options.destPrefix`) 
        // Values are sources (prefixed with `options.srcPrefix`); One source per destination 
        // e.g. 'node_modules/chai/lib/chai.js' will be copied to 'test/js/libs/chai.js' 
        "kolayout": ["kolayout/dist/src"],
        "knockout":["knockout/build/output"]
      }
    }
  }
```