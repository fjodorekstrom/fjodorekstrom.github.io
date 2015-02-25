'use strict';
importScripts('serviceworker-cache-polyfill.js');
// The files we want to cache
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/scripts/script.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
});