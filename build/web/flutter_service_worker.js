'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d2cee30012ec8f743a92e6a2f7d0b2d7",
".git/config": "4336da39663a8b5d19d49a20b460d04c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eab8349e97030aef7fe6bf6066ff1c22",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "419fcb5f4255d20ffe2d5a924b47aa1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "866369fd0e2ee9c9736277c0f70c664f",
".git/logs/refs/heads/gh-pages": "866369fd0e2ee9c9736277c0f70c664f",
".git/logs/refs/remotes/origin/gh-pages": "0673bc918cb338aecfd33f9be3fe1baf",
".git/logs/refs/remotes/origin/HEAD": "cb786a4fbedd61cf5f95279e5a1dff70",
".git/objects/09/561a134239d32087a39d12f9bb1a21f3b229a0": "92151453668f13245b52b88d2b524888",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/10/75203cb80fd51c53a25b2fc82466b46e5c8152": "f4c6446c08bb14189dbe494f768ec47a",
".git/objects/10/fa32bdcc8fdf503c3feeb26293d02720dd9dc2": "70ba923a6fc01cfbfe43c36d0aec0e7c",
".git/objects/15/91e953a857fc385693a8e502e00a22f3e20c99": "4136521723a847043d18b06e29ccf7d8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4e7533957f0e9bb9d38601ac8bd10c5e456920": "6dcc2bd87ec6368faaedf886e7ed73b9",
".git/objects/2b/6776e50b221e33211b4c3dd740b3769a81bfdd": "cc248bae9e3aa7a0be0c1fd41a408863",
".git/objects/37/370153511b1d8e00b9aed9ec9edd2b50d2a99e": "c031b206e3aaeec93c7093e5b5f530b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/f6acff2fb9e16534c6bbee411363832313dfba": "365fb22fdaaf7b994849eae9fd141a44",
".git/objects/57/58ce5076e7df86bfb924e617ced3932f94608a": "c79deb151c51508db65dd3ebd2d089dc",
".git/objects/6c/713a2ad89bef1dd8f14591a029e9e6e8edc45a": "97d21c80bfb300e31ab64f3a2aa83df2",
".git/objects/73/6cb37efafab30b796278f01c56fad8c2672f9e": "59ae8d0cdb055ae0c7e84742d38e6d48",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8f4345d8aae3dd83f4fe536e9a88f97942c239": "a1fee87e74d3f1b82b4cca5c400f5396",
".git/objects/7f/632708dceaab0c5d5657155fc773e26244a207": "f862f45ba7c476bfd3c2db5ef5f66be0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/a13680c676c1dae16c9b1b38489b59af3f83e1": "f07f495cba4e456f3d0916c950edaadd",
".git/objects/98/e72ac96ac7ddcddcacad16799f00da0efead64": "84c355e3ffa7533022d0e84ad01b3aa0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/3a844ed0cd689fa2c36ede4de34bbd608c5bab": "328ada8a89bf1610282faff033d6fd14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/1e9d1cb556e7138b8790780ec77297697b138b": "5d2583562cc9702e2186f76022bea0a8",
".git/objects/b1/3c71370547a2b99bffa4bdc3f51a5efd514d14": "47dcde00e76dd93ab65b8822432c242f",
".git/objects/b3/454d50ae8f718800f231b185f88092ec248141": "b723d6cb73800c25d1141c890a0d6884",
".git/objects/b3/4b68b12e1fe14d01518fa3f524be9712c35b6a": "85093bf64605f23e05a3f3d36b2007e4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/60ba266f49664ea67a35ee54d21d8cde825db4": "9c7a0bc4f925b6d19d00bb0ed1a7409c",
".git/objects/c9/527331bdb8f0e6af298c59f62a4cd7a5297e84": "4600dedc0e236c140093da75f1a6103e",
".git/objects/ca/d195c340d42fb3201c8d847f822828b9bec33f": "6923d3217aa7fe0e48b29c9c2107f576",
".git/objects/d6/b7bd63ffff74a1fec6220f9f622e7a4917f421": "5a660f528594ff5017d73196a6e653b7",
".git/objects/d8/80650e64f63fe4ba51513d935ee41adda943ed": "2003d70a72cc253f536155fc343aea5d",
".git/objects/dd/071a0c6bea582622f2e1926cf12d00a3d3d2cc": "475f5c4f251a1ed5f59c6bc7856d8a18",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5bf6f5a4d5ba3692b8cfc4980275894f9cb2ac": "0265127279b831ab5c37243e4671da83",
".git/objects/f0/891921e7a1daf246abe05a9ad9381a1191bf61": "462df1ed2dff339cd7c547c52e5fa4cc",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/bcb52d258fa3f4caa7ed4c5ad582b8e3693b90": "b516a33286e15137f236b6c5443d40cc",
".git/objects/f6/e88c70d77f4f68493b7cb856d77ecbabae6480": "74fbfd18702aa31d932fd3a83cda37fe",
".git/refs/heads/gh-pages": "e641307af58e51570da46a17bf95fc6a",
".git/refs/remotes/origin/gh-pages": "e641307af58e51570da46a17bf95fc6a",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"assets/AssetManifest.json": "f4b8038ada009df7a13696c394b5f0e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/il_340x270.526781863_4j86.jpg": "237cda944f00d4d9403c7f0c113d4771",
"assets/NOTICES": "eecd82bbfdc80330930d5d30bebd1d6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"icons/Icon-192.png": "5a750dd8b91c22d1ecd094d77c20b714",
"icons/icon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"index.html": "d2a65ca867bb43c29a788ef1bb5d8417",
"/": "d2a65ca867bb43c29a788ef1bb5d8417",
"main.dart.js": "300cbb6d0f3ebab437d5ef8e4b4b2509",
"manifest.json": "7b87acc53311280e6558a777b2ce7f1d",
"version.json": "50a026aa58c2c63e579d97a2e24dc47b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
