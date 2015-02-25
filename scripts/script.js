'use strict';
var worker = new Worker('scripts/sw.js');
worker.postMessage();
importScripts('scripts/serviceworker-cache-polyfill.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('scripts/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ',    registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}