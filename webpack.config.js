var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
var tsconfig = require('./tsconfig.json');

let aliases = {};

// let pathKeyArray = Object.keys(tsconfig.compilerOptions.paths);
// pathKeyArray.forEach(currentPath => {
//     let correctPath = currentPath.replace("/*","");
//     let currentPathValue = tsconfig.compilerOptions.paths[currentPath][0].replace('*','');
//     aliases[correctPath] = path.resolve(tsconfig.compilerOptions.baseUrl+'/'+currentPathValue);
// })

useDefaultConfig.dev.resolve = useDefaultConfig.prod.resolve = {
    extensions: ['.ts', '.js', '.json'],
    modules: [
        path.resolve('node_modules'),
        path.resolve(tsconfig.compilerOptions.baseUrl)
    ]
    // alias:aliases
}

module.exports = function () {
  return useDefaultConfig;
};
