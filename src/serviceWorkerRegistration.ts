type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register(swUrl)
                .then((registration) => {
                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;
                        if (installingWorker == null) {
                            return;
                        }
                        installingWorker.onstatechange = () => {
                            if (installingWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    if (config && config.onUpdate) {
                                        config.onUpdate(registration);
                                    }
                                } else {
                                    if (config && config.onSuccess) {
                                        config.onSuccess(registration);
                                    }
                                }
                            }
                        };
                    };
                })
                .catch((error) => {
                    console.error('Error during service worker registration:', error);
                });
        });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}
