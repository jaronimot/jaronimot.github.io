'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "725ba2d1163f0b54c6517f50aef55205",
".git/config": "246864f06c655e8b2cf07633e7125743",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a4e16a09aaad6f682b308c09c7370373",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "c27ae8f66bbf42bd505a84c20903ccef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c8d030f18b98b0ba47962b053cf06d7",
".git/logs/refs/heads/main": "b696bae38fac937b2b12197360998d98",
".git/logs/refs/heads/notmain": "b7cda7a31fe540c17a11a0902e4b2a1a",
".git/logs/refs/remotes/origin/HEAD": "23ab1a4e1b40470ab26ec7e8ddf9b3ef",
".git/logs/refs/remotes/origin/main": "4d1917e20c68103a15377fbcde90a183",
".git/objects/03/516d51a20cadcee3a05b88c02a69e20d6ec96d": "baf0e11bc48e6ab4123dc7f2b7abfaf0",
".git/objects/09/561a134239d32087a39d12f9bb1a21f3b229a0": "92151453668f13245b52b88d2b524888",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/10/75203cb80fd51c53a25b2fc82466b46e5c8152": "f4c6446c08bb14189dbe494f768ec47a",
".git/objects/10/fa32bdcc8fdf503c3feeb26293d02720dd9dc2": "70ba923a6fc01cfbfe43c36d0aec0e7c",
".git/objects/15/91e953a857fc385693a8e502e00a22f3e20c99": "4136521723a847043d18b06e29ccf7d8",
".git/objects/16/0e9ec11f62028ea882221f231b1d6e9a96535e": "ff22dda3380a75a782731eb170bee095",
".git/objects/16/a08699f4f794e82e1a9e9583d72daf1311e32e": "ff3229041893c55129a67187bc08b425",
".git/objects/19/7d33ce0b15e1abe2d5a62444de32d74ffed3be": "38f9b587420e424459775327cfcb83dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4e7533957f0e9bb9d38601ac8bd10c5e456920": "6dcc2bd87ec6368faaedf886e7ed73b9",
".git/objects/2b/6776e50b221e33211b4c3dd740b3769a81bfdd": "cc248bae9e3aa7a0be0c1fd41a408863",
".git/objects/30/11e136fbf3370af98c32b0275110bccf1818a6": "c4a3912c428a887983914b15ddafc448",
".git/objects/32/a50c8248a33c9d61544c3bb7d97fd5d2786e20": "9a3e9c2cc64d6185313350eb36e4d256",
".git/objects/37/370153511b1d8e00b9aed9ec9edd2b50d2a99e": "c031b206e3aaeec93c7093e5b5f530b0",
".git/objects/38/3e79db39a328540d2883d3b5c94a76c9e2b16e": "911c8f56882627b65ab1f31d80b8dfda",
".git/objects/3e/a6fc851b6b5f82d0e5f7024f77a15fc1952ee6": "92fae86b251eb549b815bcadce2e86b0",
".git/objects/40/8f84d0eea4ea23faa83f2d6dbe2bd9fe1240ba": "db3925a7642a6870c7a5fea20813eed5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d6468db77ca2a27a6d0c60e94274d8e88db3b3": "bf20373a1658d373376597f84f630b3b",
".git/objects/48/c9b9e0b85f51400db4df501549e416194861d1": "5634789841cdcf1ad9f7dcf8078937b1",
".git/objects/4a/f6acff2fb9e16534c6bbee411363832313dfba": "365fb22fdaaf7b994849eae9fd141a44",
".git/objects/56/4d8baa21f0817971f9a50d265bd499407105c6": "0853fc00b93619e456d851d2067f5a4e",
".git/objects/57/2f48ab57216f934147ba1940860b2db60bbc34": "adcba863f123fb2d43226d8553d7e42f",
".git/objects/57/58ce5076e7df86bfb924e617ced3932f94608a": "c79deb151c51508db65dd3ebd2d089dc",
".git/objects/65/0855da20ec3e886cc3b585989253b67957f567": "1c5e02c14363d3802b5d8639e83e9edb",
".git/objects/6c/713a2ad89bef1dd8f14591a029e9e6e8edc45a": "97d21c80bfb300e31ab64f3a2aa83df2",
".git/objects/6e/a2918fcea1404a8f9f5e6efbe2ca86517ef728": "b0ef560dadd2516a5b66c5ed4c5d52ab",
".git/objects/71/e5c790ab538fc4e7e94f28a4230950ae220a8a": "2acfd314bfc82c55f8504e61e8564216",
".git/objects/73/6cb37efafab30b796278f01c56fad8c2672f9e": "59ae8d0cdb055ae0c7e84742d38e6d48",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8f4345d8aae3dd83f4fe536e9a88f97942c239": "a1fee87e74d3f1b82b4cca5c400f5396",
".git/objects/7b/7cc225c323aa97070b398a46d7da98d0b6e0d7": "0a37ccb2607d0f18abf232ea0a12fc55",
".git/objects/7f/632708dceaab0c5d5657155fc773e26244a207": "f862f45ba7c476bfd3c2db5ef5f66be0",
".git/objects/82/7a4b79b801144e45aadc05f7bb0770378cc4ce": "f8f7b497d1c166c4a1543ef9dbfd02e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/a13680c676c1dae16c9b1b38489b59af3f83e1": "f07f495cba4e456f3d0916c950edaadd",
".git/objects/98/e72ac96ac7ddcddcacad16799f00da0efead64": "84c355e3ffa7533022d0e84ad01b3aa0",
".git/objects/9c/6c5c0a0fbd293a6462341f085620aa9d7f664a": "9c877faedca6795afc4722f285aef34d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/3a844ed0cd689fa2c36ede4de34bbd608c5bab": "328ada8a89bf1610282faff033d6fd14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/1e9d1cb556e7138b8790780ec77297697b138b": "5d2583562cc9702e2186f76022bea0a8",
".git/objects/b1/3c71370547a2b99bffa4bdc3f51a5efd514d14": "47dcde00e76dd93ab65b8822432c242f",
".git/objects/b3/454d50ae8f718800f231b185f88092ec248141": "b723d6cb73800c25d1141c890a0d6884",
".git/objects/b3/4b68b12e1fe14d01518fa3f524be9712c35b6a": "85093bf64605f23e05a3f3d36b2007e4",
".git/objects/b4/1f5715fe6057b8f946413fe72de71e04422e44": "fb155a517ed6e99abd6e2bcf4fc6486d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/54afc59da71dd767afb30cdb980262fd289f9a": "6086ceb75c5f9d532f5cc1839571b93a",
".git/objects/bc/60ba266f49664ea67a35ee54d21d8cde825db4": "9c7a0bc4f925b6d19d00bb0ed1a7409c",
".git/objects/bd/431c7729d5653c775ed80aaf64fd6bb3d58f62": "1d6dc638c44b77cd6e35560b47c65979",
".git/objects/c5/353d967580b882e5f39ade09e540930a3a6ff6": "1c19d469cc42ef1c9054536c329698f8",
".git/objects/c9/527331bdb8f0e6af298c59f62a4cd7a5297e84": "4600dedc0e236c140093da75f1a6103e",
".git/objects/ca/d195c340d42fb3201c8d847f822828b9bec33f": "6923d3217aa7fe0e48b29c9c2107f576",
".git/objects/d6/b7bd63ffff74a1fec6220f9f622e7a4917f421": "5a660f528594ff5017d73196a6e653b7",
".git/objects/d8/80650e64f63fe4ba51513d935ee41adda943ed": "2003d70a72cc253f536155fc343aea5d",
".git/objects/dd/071a0c6bea582622f2e1926cf12d00a3d3d2cc": "475f5c4f251a1ed5f59c6bc7856d8a18",
".git/objects/de/4988487891d32347de09c148dfe88353a3a104": "cfafda888d99bb33f40d51a3b5be2298",
".git/objects/e3/cea63fc1102c768199dfef7ba08238f4e8e239": "51f1ab9643751f2cb67773bcdf384134",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5bf6f5a4d5ba3692b8cfc4980275894f9cb2ac": "0265127279b831ab5c37243e4671da83",
".git/objects/e8/5b7bcabccb06fd6c345c2df1aaf5c44d83ddd7": "03883dc6aa6ed154841b66f2c63b5c5a",
".git/objects/ec/69644dc9fe8454a3d451e8dbf2aa1eba614854": "1125265d60a2ab95ba335ee06617599b",
".git/objects/f0/891921e7a1daf246abe05a9ad9381a1191bf61": "462df1ed2dff339cd7c547c52e5fa4cc",
".git/objects/f1/0ea0ab712ac78ba4dba81c7268c1c2bb85404d": "0db61c92bf97778014a2abcfb6e9b9b3",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/db2c872b690520e0960c8b6b290000ff8cb13c": "dc7330c2f77ff6d5a6431898eebd247e",
".git/objects/f6/bcb52d258fa3f4caa7ed4c5ad582b8e3693b90": "b516a33286e15137f236b6c5443d40cc",
".git/objects/f6/e88c70d77f4f68493b7cb856d77ecbabae6480": "74fbfd18702aa31d932fd3a83cda37fe",
".git/objects/f9/ca3fe6ee066c969e71421728c7d48312dbd8a8": "a33d5efcccd64d3d949a616bbe52a526",
".git/ORIG_HEAD": "56882521aae58bcc1d51aaf62a86171a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "d4390ddc906beec1670028868f3bb361",
".git/refs/heads/notmain": "d4390ddc906beec1670028868f3bb361",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d4390ddc906beec1670028868f3bb361",
".git/refs/tags/v0.0.1": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".git/refs/tags/v0.0.1-gh-pages.0": "a3b01effeb10263e50433d1b188766f0",
".git/refs/tags/v0.0.1-gh-pages.1": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".git/refs/tags/v0.0.2": "d4390ddc906beec1670028868f3bb361",
".git/refs/tags/v0.0.2-gh-pages.0": "d4390ddc906beec1670028868f3bb361",
".git/refs/tags/v0.0.2-refs-tags-v0-0-1.0": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".github/workflows/tag_release.yml": "793adf15f7c9ee59490cbf23da91491e",
"assets/AssetManifest.json": "f4b8038ada009df7a13696c394b5f0e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/il_340x270.526781863_4j86.jpg": "237cda944f00d4d9403c7f0c113d4771",
"assets/NOTICES": "eecd82bbfdc80330930d5d30bebd1d6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"icons/Icon-192.png": "5a750dd8b91c22d1ecd094d77c20b714",
"icons/icon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"index.html": "3b95a04a7629b46c0615a028ed0591e0",
"/": "3b95a04a7629b46c0615a028ed0591e0",
"main.dart.js": "47bfd66d36bdb74da0228b76b65e5f5b",
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
