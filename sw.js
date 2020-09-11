const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/script/dex.js',
  '/script/app.js',
  '/style/main.css',
  '/img/favicon-16x16.png'
];

// cache size limit function

// install serviceworker
self.addEventListener('install', evt => {
  // console.log('service worer has been installed');
  evt.waitUntil(
  caches.open(staticCacheName).then(cache => {
    console.log('caching shell assets');
     cache.addAll(assets);
   })
  );

});

// activate service worker
self.addEventListener('activate', evt => {
  console.log('service worer has been activated');
});

// fetch event
self.addEventListener('fetch', evt => {
 // console.log('fetch event', evt);
 evt.respondWith(
   caches.match(evt.request).then(cacheRes => {
     return cacheRes || fetch(evt.request);
   })
 );
});
