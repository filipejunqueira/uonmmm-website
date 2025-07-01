// Service Worker for UONMMM Website
// Provides offline functionality and caching

const CACHE_NAME = 'uonmmm-v1';
const STATIC_ASSETS = [
  '/uonmmm-website/',
  '/uonmmm-website/index.html',
  '/uonmmm-website/manifest.json',
  '/uonmmm-website/favicon.svg',
  '/uonmmm-website/favicon-32x32.png',
  '/uonmmm-website/apple-touch-icon.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker installed successfully');
        self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('Serving from cache:', request.url);
          return cachedResponse;
        }
        
        console.log('Fetching from network:', request.url);
        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response before caching
          const responseToCache = response.clone();
          
          // Cache successful responses
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseToCache);
            });
          
          return response;
        });
      })
      .catch(() => {
        // Offline fallback - serve cached index.html for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/uonmmm-website/index.html');
        }
      })
  );
});

// Background sync for form submissions (optional enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    console.log('Background sync: contact-form');
    // Handle form submissions when back online
  }
});

// Push notifications (optional enhancement)
self.addEventListener('push', () => {
  console.log('Push notification received');
  // Handle push notifications if implemented
});