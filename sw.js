'use strict';
importScripts('scripts/serviceworker-cache-polyfill.js');
// The files we want to cache
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/scripts/script.js',
    '/scripts/serviceworker-cache-polyfill.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(CACHE_NAME)
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response) {
                return response;
            }
            var fetchRequest = event.request.clone();


            return fetch(fetchRequest)
                .then(function(response){
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var clonedResponse = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache){
                            cache.put(event.request, clonedResponse);
                        });
                    return response;
                });
        })
    );
});