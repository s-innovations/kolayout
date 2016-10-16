
# KoLayout
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Visual Studio Team services](https://img.shields.io/vso/build/sinnovations/40c16cc5-bf99-47d4-a814-56c38cc0ea24/22.svg?style=flat-square&label=build:%20KoLayout)]()
[![Coveralls](https://img.shields.io/coveralls/s-innovations/kolayout.svg?style=flat-square)]()
[![GitHub](https://img.shields.io/github/release/s-innovations/kolayout.svg?style=flat-square)](https://github.com/s-innovations/kolayout/releases)
[![David](https://img.shields.io/david/s-innovations/kolayout.svg?style=flat-square)](https://david-dm.org/s-innovations/kolayout)
[![David](https://img.shields.io/david/dev/s-innovations/kolayout.svg?style=flat-square)](https://david-dm.org/s-innovations/kolayout?type=dev)


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




[npm-image]: https://img.shields.io/npm/v/kolayout.svg?style=flat-square
[npm-url]: https://npmjs.org/package/kolayout
[downloads-image]: http://img.shields.io/npm/dm/kolayout.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/kolayout