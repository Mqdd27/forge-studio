// Motion publishes relative source-map directives that can survive Next's dev
// bundling. Webpack supplies the bundle's maps; these package-relative URLs
// otherwise make browser developer tools request files the server cannot serve.
module.exports = function stripMotionSourceMap(source, map) {
  this.callback(null, source.replace(/\/\/[#@]\s*sourceMappingURL=[^\r\n]*/g, ""), map);
};
