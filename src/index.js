class Srp
{
  constructor(opts)
  {
    this.opts = opts;
  }

  tplPath(cwd, relativePath)
  {
    return `${cwd}/../templates/${relativePath}`;
  }
}

module.exports = Srp;
