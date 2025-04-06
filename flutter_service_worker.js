'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2388da60bbac818e0eb175878546d46f",
".git/config": "947fe7e1902e0320d75fc78a0884e278",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "71b9ee86b1cdb57a2cc858db16d02974",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "619f8d09ba422284f5b0a1042841f985",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7891d7ceda63fc0e3e8a317a9d778ae2",
".git/logs/refs/heads/main": "7891d7ceda63fc0e3e8a317a9d778ae2",
".git/logs/refs/remotes/origin/HEAD": "4f05ef25af874bdacba59ae20ed116a2",
".git/logs/refs/remotes/origin/main": "0f2ca0936dab242936644a7ecb78c107",
".git/objects/01/57074bfb5d862a74ac308814951fd872483cbf": "81106c7fcdda56d280e49fc716f67bf6",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/46e6f8c2d80ad639cc86809a6e4e94cedb5467": "a10c38dea9140158e88dd0c3e30ac984",
".git/objects/16/3c8c1e45c620d627b6ad23793eb6b5d2e91000": "6278dd19ba011ee4bddba8045e803254",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/2f/42e849ad8dbff28067df4199d5a1a1f17ddf12": "a2aa85cc5bcce1270a6b20cda4c1fb74",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/26548851d232863ff858feaf31e661808c6aa9": "ec0e7ebf73e8a19dcc88971f6e24775d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6f/52e8201697a5befff5448dd271d71bca980e63": "0d72bfc8963353f131bd653ab829d254",
".git/objects/81/4ecc042626441bdab7c22c67cf6e0e0a9db0af": "bafa7ad7ea11d39ae77cecb4846620bb",
".git/objects/83/8a0d81570f26ef0acd76a55c53beaa919f9884": "b4460621adce9a71425c1a9f04ae8e9c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/59ad09b062d0d1e0fc415eb4d7fe6b80bebb9c": "d07480b4c4a83fcb3b29263fd938ad73",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/f1b0e751993d9d11881ced1cab0afa7393a072": "f1380d9258149e0718f567e663fb6d28",
".git/objects/94/3ac130d7344f2edb20d5d22e03bc2ba71982a9": "ced60c8997c16f49458c371638f0e89e",
".git/objects/96/6310377909b7d31550da96fd1932634eb225af": "c9be0cb2f40aff940db10fc078ab5e69",
".git/objects/98/f98f383e766f84465342380c311739e9320742": "3b8da0c870ec4564568b7eb9b5911bdd",
".git/objects/9f/088a388ef46c63bcf9d5854a2dadbad6c4786b": "48a0b37b18ee0d386abb09a8a0303c2f",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/0f49d61e60e736efb5ca20e6fefbc12c52b84e": "c1976e52f40899a1403a9e7e9835ccab",
".git/objects/ab/e83a76f6c284742485a29feca2fb85c7d665ee": "6a02e85d0f4135b5600f33c2dc3c992d",
".git/objects/bd/674f7707d831a98540e5a870f00ccc4fee0f8a": "4f0df2e8a4bcfb3bc9ad89373cf8703d",
".git/objects/be/db269d79fc4b55a5cb339dfbe2d29dc7b91696": "cd28ea68bd0e14808fbf0805a0fd1668",
".git/objects/c0/41e62a6a048a621e2c03bbafb586b5da5ecf46": "27150791190d3fb71a16b6be06b2d822",
".git/objects/c2/763a4183586b067dbc9b961f0bc9c986261f42": "f41e6199345e6e47432fac9afe0ce5dd",
".git/objects/c7/2c888dad10790754774231d29aa6e2ec00fc4f": "8f909646fdf30a099b363eee7179b0f5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/5e568c13b548c3c0555052913e82cdc8dc62e9": "7ccfaaa2f5348a091d3fbc8f336e3239",
".git/objects/de/19b30129116d2a94b8cc2ecd0568d36b2718c7": "f04c136a969deffd7d7c21697f23893b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.idx": "34e873bade1ed4fbff61ff3581fe0261",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.pack": "d04fc9a81ff7cd83e71a1f1a8c333afd",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.rev": "584d9eebe586877db43273f16f292d55",
".git/ORIG_HEAD": "fed5af513aa3f6fcc2cd7e0a6b20f4f9",
".git/packed-refs": "7904b5587c9ce11edbab7403bcbe4fdd",
".git/refs/heads/main": "f3ac94e6d3a12319f92400361f5640c7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fed5af513aa3f6fcc2cd7e0a6b20f4f9",
".git/refs/tags/v0.2.0": "5af0521c7f68d25451ba7a45b4587fe4",
".github/release.yml": "5a502db5de8c0900b292dd3e91da3baf",
".github/workflows/tag_release.yml": "c1ec3b0b315d1d396e9954ddbd31105e",
"assets/AssetManifest.bin": "74989fe791c40a517adf03bc54d233cd",
"assets/AssetManifest.bin.json": "3705345aff9e69e195c978ff033887a7",
"assets/AssetManifest.json": "f4b8038ada009df7a13696c394b5f0e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "036de5a7eefb026ce2b400540ba69c14",
"assets/images/il_340x270.526781863_4j86.jpg": "237cda944f00d4d9403c7f0c113d4771",
"assets/images/OIG2.Um4ubwRIbGTTVADZHB.jpg": "377399411c71646b27a60c00043ff57d",
"assets/NOTICES": "6dedc62693f1cfc473650f7e84aff408",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "61353bf1fa9935a0c31f210c64aa6515",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/icon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"index.html": "9c03dedbed799d4cc97893580b6d6df4",
"/": "9c03dedbed799d4cc97893580b6d6df4",
"main.dart.js": "857bdfccdad140e731ae61a572957793",
"manifest.json": "afd9764be85da4567fb1f75f72197b44",
"README.md": "802ecf4825a9acdb74b32b9a902e5712",
"version.json": "fc07a433d60095fdb8b77b2f8594ef17"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
