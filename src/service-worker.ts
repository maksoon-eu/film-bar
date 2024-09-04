/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const cacheUrls = [
    'https://image.openmoviedb.com',
    'https://imagetmdb.com',
    'https://avatars.mds.yandex.net',
];

registerRoute(
    ({ url }) => cacheUrls.some((cache) => cache === url.origin),
    new CacheFirst({
        cacheName: 'image-cache',
        plugins: [new ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 12 * 60 * 60 })],
    })
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
