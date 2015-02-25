'use strict';
importScripts('scripts/serviceworker-cache-polyfill.js');
// The files we want to cache
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/script.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
});