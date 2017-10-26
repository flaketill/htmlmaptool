# Changelog

### 0.0.1 - _2017, October 26rd
Includes base projetc files with support AMD (requirejs )

#### Features
- **[#0](https://github.com/flaketill/htmlmaptool/issues/0) New Callbacks:** `test()`

_Example:_

```js
// Let’s see how to:
//Before include the library such as:  
//<script type="text/javascript" src="dist/htmlmaptool.js"></script>
//Then on script tag:

console.log("[info] - index.html -+ Initialize Javascirpt Library");
console.log("[info] - index.html -+ htmlmaptool: " + typeof htmlmaptool);
console.log("[info] - index.html -+ The version are: " + htmlmaptool.version);

var app = htmlmaptool;
app.test();
app.test2();
```

#### Fixes

- *Functionality*: Test a simple function to print on console a message (Fixes [#0](https://github.com/flaketill/htmlmaptool/issues/0))
- *Compatibility*: Adding support for AMD (Fixes [#0](https://github.com/flaketill/htmlmaptool/issues/0))