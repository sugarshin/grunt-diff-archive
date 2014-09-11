# grunt-diff-archive

> Git diff archiving grunt plugin.

> Git の差分ファイルを抽出してアーカイブします

v0.0.6

[www.npmjs.org/package/grunt-diff-archive](//www.npmjs.org/package/grunt-diff-archive)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-diff-archive --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-diff-archive');
```

## The "diff" task

### Overview
In your project's Gruntfile, add a section named `diff` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  diff: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

#### options.pathName

指定の名前のディレクトリ名でアーカイブされます

Type: `String`
Default: `'root'`

#### options.fileName

アーカイブファイル名

Type: `String`
Default value: `'archive'`

#### options.format

アーカイブフォーマット

Type: `String` `'zip'` or `'tar'`
Default value: `'zip'`

#### originCommit

基点となるコミットID

Type: `String`
Default value: `'HEAD'`

#### options.targetCommit

対象のコミットID

数値の場合は `options.originCommit` 遡る数のほか

任意のコミットID (文字列)も渡せます

Type: `Number` or `String`
Default value: `1`


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  diff: {
    options: {
      pathName: 'root',
      fileName: 'archive',
      format: 'zip',
      originCommit: 'HEAD',
      targetCommit: 1
    },

    target: {}
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  diff: {
    options: {
      pathName: 'archive',
      fileName: 'diff-archive',
      targetCommit: '414fb27g' // commitID
    },

    target: {}
  }
});
```

## License

The MIT License (MIT)

Copyright (c) github.com/sugarshin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Release History
* 2014-09-11 v0.0.6
* 2014-09-10 v0.0.5-b
* 2014-07-09 v0.0.4-b
