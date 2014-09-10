# grunt-diff-archive

> Git diff archiving grunt plugin.

> Git の差分ファイルを抽出してアーカイブします

v0.0.5b

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
Default value: `'diff'`

#### options.commit

対象 commit 数

Type: `String`
Default value: `'1'`

#### options.fileName

アーカイブファイル名

Type: `String`
Default value: `'archive'`

#### options.format

アーカイブフォーマット

Type: `String` `'zip'` or `'tar'`
Default value: `'zip'`


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  diff: {
    options: {
      pathName: 'diff',
      fileName: 'archive.',
      format: 'zip',
      commit: '1'
    },

    archive: {}
  }
});
```

#### Custom Options

```js
grunt.initConfig({
  diff: {
    options: {
      pathName: 'archive',
      fileName: 'diff-archive.zip',
      commit: '3'
    },

    archive: {}
  }
});
```

## Release History
* 2014-09-10 v0.0.5-b
* 2014-07-09 v0.0.4-b
