"use strict"

exports.__esModule = true
exports.replaceHydrateFunction = void 0

var _reactDom = require("react-dom")

var _component = require("@loadable/component")

const replaceHydrateFunction =
  (_, options) => (element, container, callback) => {
    ;(0, _component.loadableReady)(() => {
      const renderFn =
        typeof options.useHydrate === "undefined" // Using ReactDOM.hydrate on develop will throw an error in console
          ? process.env.BUILD_STAGE.includes("develop")
            ? _reactDom.render
            : _reactDom.hydrate
          : !!options.useHydrate
          ? _reactDom.hydrate
          : _reactDom.render
      renderFn(element, container, callback)
    })
  }

exports.replaceHydrateFunction = replaceHydrateFunction