require("ignore-styles");
const fetch = require("node-fetch");


require("@babel/register") ({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
});

console.error = () => {};

require("./server/index");
global.fetch = fetch;
