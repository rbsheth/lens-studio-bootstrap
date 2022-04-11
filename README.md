# Lens Studio Bootstrap
**A structured, versioned way to create lens scripts**

This repository contains sample sources for a lens script as well as a template Lens Studio project. You can easily install packages from `npm`, use some simple polyfills, lint code, and even minify your code to save a little bit of space in your Lens.

**Setup Instructions**

To keep the Node/NPM version consistent for this repo, we pin the Node version in `.nvmrc`. This may not be needed for your project.

- Install the Node Version Manager `nvm`.
  - Linux/Mac: `https://github.com/nvm-sh/nvm#installing-and-updating`
  - Windows: Install `nvm-windows` from here `https://github.com/coreybutler/nvm-windows` or through Chocolatey - `choco install nvm` (NOTE: the latest nvm is not available on Chocolatey as of this writing)

- Install the correct version of `node`.
  - Linux/Mac: `nvm install && nvm use` (picks up the version from `.nvmrc`)
  - Windows: `.nvmrc` doesn't work so you have to do `nvm install <version>` and `nvm use <version>`. Find the version in `.nvmrc`.

- Run `npm install` in this directory.

**Usage**

Open the Lens Studio project at `SampleLens/SampleLens.lsproj` with Lens Studio v4.10+. You can use an older version of Lens Studio but will have to create a new Lens yourself. Check the scripting setup in the sample lens if you want to port it over to a new lens. You'll have to create a ScriptHolder scene object that can "hold" the BaseScript so it can be referenced by other scripts in the Lens.

If you're editing the code, edit the files in `src/`. You can add dependencies to `package.json` in this directory using `npm install` and import/require them in `src/` files. The default source file is `src/BaseScript.js` and this will be compiled to `SampleLens/Public/Scripts/BaseScript.js`. Edit `package.json` to change these paths.

Building the final script can be done in two ways:

1. For development, run `npm run dev`. This sets up a watcher and updates the script in the Lens Studio project with the debug, non-minified version on any edit. This is useful because you can debug in the Lens Studio interface, even though the script is large.
1. For formatting/linting, run `npm run format`. This will run eslint on the codebase.
1. For release, run `npm run build`. This will build a minified version of the script and update the version in the Lens Studio project. Great for final processing before uploading your Lens!
