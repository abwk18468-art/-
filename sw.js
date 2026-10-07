// خدمة بسيطة تجعل المتصفح يعرض خيار "تثبيت التطبيق" (لا تخزّن شيئاً فلا تؤثر على التحديثات)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
