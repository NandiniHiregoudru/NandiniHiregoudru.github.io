'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bfd0b0999a4e163647d0841f50a18a9f",
"index.html": "062f45a350f0c08fb1145bedfbc78fcf",
"/": "062f45a350f0c08fb1145bedfbc78fcf",
"main.dart.js": "ff1020da3873e77ed264a52b8f2f6c8a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c249140f2335903f13efa00136375183",
"assets/AssetManifest.json": "62bc53abab23219827a2698a16af3d94",
"assets/NOTICES": "71a66b8b18a729af7446fc778f2e5cc6",
"assets/FontManifest.json": "3545b360c668cd8ce38beb6a79d37ca1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0fbd0066143e8227abf8dd853a6183a7",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/presale_left_bottom.png": "e23526ebeb1b900ed6d4c1aa0018fae6",
"assets/assets/images/img.svg": "2e3aafe9f3024f40212632e8600b6edd",
"assets/assets/images/footer_gradient.png": "7d908de1e871ebcbfce3d9dad6ed8c68",
"assets/assets/images/three.png": "89370de668d791ee382492a1eeaa0e00",
"assets/assets/images/tokners_logo.svg": "0aa1fbd184e1d8a19f661066e099f928",
"assets/assets/images/desktop_bg.png": "9ae6f817212415abbbeaa65b4751be7e",
"assets/assets/images/tokners_img.png": "550f2f23ab3e15bacfa8a5c3adbf07ec",
"assets/assets/images/ellipse.svg": "bc18cc1bb4e1924cc86ce188debdeacc",
"assets/assets/images/presale_right_vector.png": "6ea89eedfbce43de0c1adec4174fd1df",
"assets/assets/images/weentar.png": "56e74b25fe3022510ed0b7e1e5574e23",
"assets/assets/images/two.png": "df25828fc4325bb76c0386293441f69a",
"assets/assets/images/social_media_logos.png": "64568034603c15425139020be6d70abd",
"assets/assets/images/oleg.png": "1317fb998167918b7e50b01e171c005b",
"assets/assets/images/presale_img.png": "b66e87e38fa1d3f6c900a2519c165d29",
"assets/assets/images/learn_more.svg": "d5c079a7b0306d7b319a4e1615fe8c53",
"assets/assets/images/img_tokner.png": "deb154de54a218f8f55cf37221b4279c",
"assets/assets/images/curved_mob.png": "45e7d2479c93a67fa4ac04f7b5d58c14",
"assets/assets/images/tokner_coming.png": "f8b900a197a701a5807df01d63dc9b89",
"assets/assets/images/crown.svg": "deb9e765aac547d96ca79c76e03f7171",
"assets/assets/images/curve_desk.png": "b4923adbaec2f136ec38dbba8a9bdccd",
"assets/assets/images/one.png": "812b46e3262336c2872810b7982177d0",
"assets/assets/images/star.svg": "4fd9e64608b8b036219605dda03ceaad",
"assets/assets/images/presale_mob.png": "dc87a3c1d233812d8e63b3f8b6ace641",
"assets/assets/images/appbar_bg.png": "0bdfdbf3691d65b5b9780bad88c0836b",
"assets/assets/images/vector_img.png": "04bc27a6d39106a3db6e8020dfb74ed6",
"assets/assets/images/web_tokners_img.png": "ca5c028f0e2d9ddf5672eab4bd0d6585",
"assets/assets/fonts/Jost-Bold.ttf": "67d4fe2602174cb3c97346ce2b391a60",
"assets/assets/fonts/HankenGrotesk-Medium.ttf": "c5b0b9b7011812c69f0e876182536930",
"assets/assets/fonts/HankenGrotesk-Bold.ttf": "61097ecff9db3db742c750486eba0c5d",
"assets/assets/fonts/manrope.regular.otf": "93bcdc811b863241e3c2f2472764c5c5",
"assets/assets/fonts/manrope.semibold.otf": "809e36f11861afe527bda8afa0cce855",
"assets/assets/fonts/Jost-Medium.ttf": "01d92baf00ccba044b49ca4e0db57265",
"assets/assets/fonts/manrope.medium.otf": "313854186f7ab99de7ff2cd3a229435e",
"assets/assets/fonts/HankenGrotesk-SemiBold.ttf": "adf5a260825f6635b750c6ee14eebc4c",
"assets/assets/fonts/HankenGrotesk-Regular.ttf": "e94ea86690059e4c488a9a8cb789ba2f",
"assets/assets/fonts/manrope.bold.otf": "b2d6510428ad33823191bc451621d1a8",
"assets/assets/fonts/Jost-SemiBold.ttf": "05f7115c8a623b537852e7425c3fc019",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
