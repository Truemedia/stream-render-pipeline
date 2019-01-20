# Stream render pipeline
File generation strategy for working with creating/modifying files using gulp

## Installation
```bash
  npm i stream-render-pipeline
```

## Usage
### Creating a render pipeline (./pipes/text.js)
```js
  const lazypipe = require('lazypipe');
  const gulpPlugins = require('auto-plug')('gulp');
  const File = require('stream-render-pipeline');
  module.exports = class TextFile extends File
  {
    construct(opts)
    {
      super(opts)
    }

    get render()
    {
      let {foo} = this.data;

      return lazypipe()
        .pipe(gulpPlugins.addSrc, this.tplPath(__dirname, '*.txt')) // Template file
        .pipe(gulpPlugins.template, {foo}); // Templating
    }
  }
```

### Creating a generator function
```js
  const {dest} = require('gulp');
  const inquirer = require('inquirer');
  const TextFile = require('./pipes/text');

  /**
    * Generate text file
    */
  module.exports = function text()
  {
    let defaults = {
      foo: 'bar'
    };
    return inquirer.prompt([
        // Questions
      ]).then(answers => {
        let build = {...defaults, ...answers};
        new TextFile(build).render().pipe( dest('./src') )
      });
  }
```

### Running render pipeline
```bash
  gulp text
```

## Structure
- */pipes*
- */presets*
- */questions*
- */templates*
