"use strict"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

exports.__esModule = true
exports.onCreateBabelConfig = exports.onCreateWebpackConfig = void 0

var _path = _interopRequireDefault(require("path"))

var _webpackPlugin = _interopRequireDefault(require("@loadable/webpack-plugin"))

var _constant = require("./constant")

const isWin = process.platform === "win32"

const onCreateWebpackConfig = ({ actions, stage }) => {
  if (
    stage === "build-javascript" ||
    stage === "develop" ||
    stage === "develop-html"
  ) {
    actions.setWebpackConfig({
      plugins: [
        new _webpackPlugin.default({
          filename: _path.default.join(
            process.cwd(),
            _constant.LOADABLE_STATS_FILE_PATH
          ),
          writeToDisk: true,
          outputAsset: !isWin,
        }),
      ],
    })
  }
}

exports.onCreateWebpackConfig = onCreateWebpackConfig

const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@loadable/babel-plugin",
  })
}

exports.onCreateBabelConfig = onCreateBabelConfig
