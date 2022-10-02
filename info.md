- `npm init -y`
- `npm i react`
- `npm i react-dom`
- `npm i webpack --save-dev` 
    - **Webpack** is a **module bundler**, takes files of different types and bundles them into a smaller group of files. help manage dependencies as it loads them in the correct order
- `npm i webpack-cli --save-dev` 
    - commands for webpack
- `npm i webpack-dev-server --save-dev` 
    - allows us to start a server with live reload
- `npm i @babel/core --save-dev`
    - **Babel** is a **Code Transpiler**. We use a **Code Transpiler** when we want to use the most up to date version of js with new syntax, but most browsers dont understand the newest syntax so we need a transpiler to convert it
- `npm i babel-loader --save-dev`
    - A **Loader** is what webpack uses to process different file types, handles how certain file types should be preprocessed, there are many loaders. `babel-loader` is for **js**, `sass-loader` is for **sass** to **css**, `style-loader` is for adding **css** to the **dom** using style tags
- `npm i @babel/preset-react --save-dev`
    - contains presets for all **react plugins**, and in babel a preset is set of plugins that support language features - needed for **jsx**
- `npm i @babel/preset-env --save-dev`
    - makes js bundles smaller
- `npm i html-webpack-plugin --save-dev`
    - adds bundled files to our index.html file