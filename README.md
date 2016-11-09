# grunt-csproj-integrity

> Grunt plugin of csproj-integrity

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-csproj-integrity --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-csproj-integrity');
```

## The "csproj_integrity" task


### Options

#### options.checkFiles
Type: `Boolean`
Default value: `false`

With this option you can turn on the checkFiles task of csproj-integrity

#### options.checkIntegrity
Type: `Boolean`
Default value: `false`

With this option you can turn on the checkIntegrity task of csproj-integrity

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  csproj_integrity: {
    cwd: '',
    src:  ['test/**/*.cs', 'test/**/*.cshtml'],
    options: {
      checkFiles: true,
      checkIntegrity: true
    }
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
