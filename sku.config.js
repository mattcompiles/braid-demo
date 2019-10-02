module.exports = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  sites: [{ name: 'wireframe', host: 'dev.wireframe.com' }],
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
};
