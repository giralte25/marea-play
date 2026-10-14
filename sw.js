// Marea: caché sencilla. La página va por red primero (para ver versiones nuevas); los assets con hash, por caché.
const CACHE = 'marea-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;
  const isAsset = /\/assets\/|\.png$|\.svg$|\.webmanifest$/.test(req.url);
  if (isAsset) {
    e.respondWith(caches.open(CACHE).then(async c => { const hit = await c.match(req); if (hit) return hit; const res = await fetch(req); if (res.ok) c.put(req, res.clone()); return res; }));
  } else {
    e.respondWith(fetch(req).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(req, res.clone())); return res; }).catch(() => caches.match(req).then(h => h || caches.match('./'))));
  }
});
