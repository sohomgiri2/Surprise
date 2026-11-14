const CACHE='music56-shell-v2';
const CORE=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok&&r.mode==='navigate'){const copy=res.clone();caches.open(CACHE).then(x=>x.put(r,copy))}return res}).catch(()=>caches.match('./index.html'))))});
