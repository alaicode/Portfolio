
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20932, hash: '161e67fefbc04eb899c1581766b1668c89e8813e41c9932ccadd433c1196b6f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20998, hash: '28de433e2a498c3781f9125fcc31faf9e4beea80845bc8131ee349714071c892', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105626, hash: 'd56a6d03292af5a63daacff85743027111f88da6de4608c9653f032b79a2eeba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7PSMPRQ3.css': {size: 616, hash: 'IDyFscTrqVc', text: () => import('./assets-chunks/styles-7PSMPRQ3_css.mjs').then(m => m.default)}
  },
};
