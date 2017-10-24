# htmlmaptool

A fork from Summer html image map creator an Html image map editor based on javascript, this fork
support AMD

# RequireJS + htmlmaptool

This project shows how [htmlmaptool](https://github.com/flaketill/htmlmaptool) can be used with
[RequireJS](http://requirejs.org). 

It includes a sample project that you can use as a template to get started.

## Better integrations

With RequireJS, scripts can load in a different order than the order they are specified.

Ideally, all the scripts you use would wrap themselves in a define() call so
that RequireJS can understand what dependencies need to be loaded before defining
the script's functionality.

```javascript
    define(['app'], function (webapp) {
        //Script contents go here.
    });
```

For more information on using define() to declare the codes as Asynchronous
Module Definition (AMD) modules, see the netx link:
[RequireJS API page](http://requirejs.org/docs/api.html).

The [umdjs project](https://github.com/umdjs/umd) has some resources and examples
to help code authors update their code to this pattern.

### Using the `htmlmaptool` config with `RequireJS`

To use this javascript lib:

```js
 define(['htmlmaptool'], function (htmlmaptool) {
        //Script contents go here.

        htmlmaptool
        
    });
```


## License

MIT License