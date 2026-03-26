
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Hardware-store/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Hardware-store"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 451, hash: '3d46ad14e88a812c0273f11c06b637b631122c3fe54d745ddae6555c57066371', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '4752a393b489d076f88f15fe2e39ba578d2dbec8c3c27d2780b2583a9d2c286c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2569, hash: '21a90f50c1636b15bab74833641bc8ee2935bd496f1b3a33a63ca2c772171e19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
