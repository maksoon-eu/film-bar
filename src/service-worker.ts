/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

registerRoute(
    ({ url }) => url.origin === self.location.origin && url.pathname.startsWith('/static/media/'),
    new StaleWhileRevalidate({
        cacheName: 'media-files',
        plugins: [
            new ExpirationPlugin({ maxEntries: 50 }),
        ],
    })
);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
