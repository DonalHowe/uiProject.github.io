var cacheName ='DonalHowe-Pwa'
var filesToCache=[
    './',
    './index.html',
    './newLoader.html',
    './css/push.css',
    './jsScripts/game.js',
    './jsScripts/loaderScript.js'
];

self.addEventListener('install',function(e)
{
    e.waitUntil(caches.open(cacheName).then(function(cache)
        {
        return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch',function(e){
    e.respondwith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});