const lazypipe = require('lazypipe');
const gulpPlugins = require('auto-plug')('gulp');

class Srp
{
  constructor(opts)
  {
    this.opts = opts;
  }

  /**
    * Files
    */
  src(glob)
  {
    return lazypipe().pipe(gulpPlugins.addSrc, this.tplPath(__dirname, glob))
  }

  /**
    * Templating
    */
  tpl(data)
  {
    return lazypipe().pipe(gulpPlugins.template, data);
  }

  /**
    * Rename files and folders
    */
  get rename()
  {
    return gulpPlugins.rename;
  }

  tplPath(cwd, relativePath)
  {
    return `${cwd}/../templates/${relativePath}`;
  }
}

module.exports = Srp;
