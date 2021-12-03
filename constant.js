"use strict"

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")

exports.__esModule = true
exports.LOADABLE_STATS_FILE_PATH = exports.LOADABLE_STATS_FILE_NAME = void 0

var _path = _interopRequireDefault(require("path"))

const GATSBY_CACHE_PATH = "./.cache"
const GATSBY_RENDER_VALIDATION_PREFIX_PATH = "page-ssr"
const LOADABLE_STATS_FILE_NAME = "loadable-stats-build-javascript.json"
exports.LOADABLE_STATS_FILE_NAME = LOADABLE_STATS_FILE_NAME

const LOADABLE_STATS_FILE_PATH = _path.default.join(
  GATSBY_CACHE_PATH,
  GATSBY_RENDER_VALIDATION_PREFIX_PATH,
  LOADABLE_STATS_FILE_NAME
)

exports.LOADABLE_STATS_FILE_PATH = LOADABLE_STATS_FILE_PATH
