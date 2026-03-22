// Stub for @lobehub/ui — we only use @lobehub/icons for SVG brand icons.
// The icons package internally references @lobehub/ui in its Dashboard/Editor
// components which we never import. This stub prevents the build from pulling
// in antd and dozens of heavy transitive dependencies.
module.exports = new Proxy(
  {},
  { get: () => () => null }
);
