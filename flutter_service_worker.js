'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4d637d37b5ef46274393899205774420",
".git/config": "961af360268eb92e622f65f370902c93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1e11b01e2311923eb6eaa05f68081611",
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
".git/index": "8e51cd6303dd3423980be063af8399a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5dc9be6ef5c9e84c2a38775938a878c",
".git/logs/refs/heads/main": "e3d2800259e9d3a94947f1e384b04e6a",
".git/logs/refs/remotes/origin/dev": "3761cb1094daec02a5caef101e07e61f",
".git/logs/refs/remotes/origin/HEAD": "7bc154d10361a76729250c3c4f25fc1e",
".git/logs/refs/remotes/origin/main": "3f23344e86090531a76e8eccd81bbe73",
".git/objects/03/516d51a20cadcee3a05b88c02a69e20d6ec96d": "baf0e11bc48e6ab4123dc7f2b7abfaf0",
".git/objects/05/4107ff08fac1b744fae6260076e8d9ad9461f6": "fae44a191c5a931b16cd7b716455aafc",
".git/objects/05/47b4bffa19c0c8426aadb6175fb152435ae87a": "2a59c22199b31d44fcdf0caf2710ad7a",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/4651d39ee7d8ae8e559a529111c91203bd66cc": "3e649102c6bd0f54e57f122359c7e85f",
".git/objects/08/7a96971876f1f9e7aeddcbe87090fde8fb2b1b": "0bfce22168b654ec520b542b20ae8709",
".git/objects/09/561a134239d32087a39d12f9bb1a21f3b229a0": "92151453668f13245b52b88d2b524888",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/0a/886cc2f4383e252ae220fc421718007589a99a": "de7b32738fe6c19c797d898186da4ea5",
".git/objects/0b/28a50777e5f1e8ef8d4d0d07513f5083bc8fa0": "f9c961b9dff00244657f1e930100efcd",
".git/objects/0e/463b3c05938b0490a386d7633250bca5adcc67": "f08c93010a75d4254858c715ebbacdee",
".git/objects/0e/9dbe18463076e8406cf8e65b63d6400fbbe107": "bc7801e7892bfbd3e916cc6dab29f3ae",
".git/objects/0e/f1c552cba170252f2c9671774efd4d26a1e651": "fed412dcec5001ad14d48eaff8b95fc4",
".git/objects/10/75203cb80fd51c53a25b2fc82466b46e5c8152": "f4c6446c08bb14189dbe494f768ec47a",
".git/objects/10/fa32bdcc8fdf503c3feeb26293d02720dd9dc2": "70ba923a6fc01cfbfe43c36d0aec0e7c",
".git/objects/11/f41c09523b3bf3a25123ddf9c4b4faa5bd3542": "2a9b6c83346fce8d64e6b34c88489484",
".git/objects/15/91e953a857fc385693a8e502e00a22f3e20c99": "4136521723a847043d18b06e29ccf7d8",
".git/objects/16/0e9ec11f62028ea882221f231b1d6e9a96535e": "ff22dda3380a75a782731eb170bee095",
".git/objects/16/a08699f4f794e82e1a9e9583d72daf1311e32e": "ff3229041893c55129a67187bc08b425",
".git/objects/18/6f637741f3dafad2f9b072f06e80907d494212": "077d8eccd5b3a917fb5b787232219936",
".git/objects/19/7d33ce0b15e1abe2d5a62444de32d74ffed3be": "38f9b587420e424459775327cfcb83dc",
".git/objects/19/9c394b350933c28ca9a139bb300c9005c190de": "c8379b9afdaade119be59c4b97c16a45",
".git/objects/19/d4b4e70d0b0a9437ed2a85637e2b340488aac1": "344966657c7a63524c9fe5bb1cbb7d1f",
".git/objects/1f/ccdb758076c865ff879156cd51240c4543de5e": "5006d6ee1b57ece9e979952dc2cbc8d9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/4069f8528cb5da93ed1378c15bb487214f5bee": "d898cbc4c25facff09b372ecd57c9ad4",
".git/objects/23/4e7533957f0e9bb9d38601ac8bd10c5e456920": "6dcc2bd87ec6368faaedf886e7ed73b9",
".git/objects/25/8a1e6278ece901c69b187a9f11e1a7ec79207b": "b91ad7d6c5d0ed341128b09dac71a3c8",
".git/objects/26/39c875f9d9db41e71c8cd08c8db2b1ac828498": "82c36ec7afa8f8f4e3541c7638b137e9",
".git/objects/27/ef6698984e7f83682433952327c71e5c7b3490": "6170109617ecb567d45f7c6cb09fbe8b",
".git/objects/2b/6776e50b221e33211b4c3dd740b3769a81bfdd": "cc248bae9e3aa7a0be0c1fd41a408863",
".git/objects/2b/e6022e023ba8283ca1a7818fcc49f27eb6b2ee": "26d29fbc0bf099dba8b4d774ffbb95e4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/0a8521c4af60912f401b94f797630d245ff66c": "1f80d515812c92fe11311d1ee40b528f",
".git/objects/2e/e43c37ae3d3a785620412a32b1642a715fef20": "af96dd611217adc46348e2076a19b1b8",
".git/objects/2f/9a4ab3527ae716c90086bd59b2b2813f1e5734": "87326bf33b952e3a87a5d0ee4145a681",
".git/objects/30/11e136fbf3370af98c32b0275110bccf1818a6": "c4a3912c428a887983914b15ddafc448",
".git/objects/31/10d0ae25d96ff2fa280923087e815ca67094b9": "8430c6806c9a73a0763c09b0207e3e39",
".git/objects/32/a50c8248a33c9d61544c3bb7d97fd5d2786e20": "9a3e9c2cc64d6185313350eb36e4d256",
".git/objects/33/d2f8fe51477e938a18e8e88b20e93845d1fa2e": "d622f4049262d3922524eab4e3ab3923",
".git/objects/35/158a74222f6af875ff71037902570e0fb6575e": "5e67426f9755679b46bf2d41f7e8460b",
".git/objects/36/551a85d5c1dfd2ccbc38f9a0d168ddc1719469": "0c49006b6796dfaab8493d40c2c7ece2",
".git/objects/37/370153511b1d8e00b9aed9ec9edd2b50d2a99e": "c031b206e3aaeec93c7093e5b5f530b0",
".git/objects/38/3e79db39a328540d2883d3b5c94a76c9e2b16e": "911c8f56882627b65ab1f31d80b8dfda",
".git/objects/3a/5c1b4038a7496f788a228fe70bff3cd0bf359a": "7106d0b6a450c6c662109c7de6e6782b",
".git/objects/3b/094b671ef4429142dfb617a7f03736d88e1aad": "b94d2a0a83196acb865e143b16b783b7",
".git/objects/3b/6e895685a4c7b5272696cf342fbd62ef9095c7": "21401da42c80d38be0c48f94fdd60e83",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/a6fc851b6b5f82d0e5f7024f77a15fc1952ee6": "92fae86b251eb549b815bcadce2e86b0",
".git/objects/40/8f84d0eea4ea23faa83f2d6dbe2bd9fe1240ba": "db3925a7642a6870c7a5fea20813eed5",
".git/objects/41/9969fb530571674692db9afeb4b52cc64aa886": "0053b649d6493ef53c916a4a4bd2b0a5",
".git/objects/42/11bc4d521c7050540bcff498db04416cff03df": "c35f31a14540060b40c3c4ed50a0cfb3",
".git/objects/45/5a04577323bba02b9aeeeca4f47d8653747c4d": "904fc3e6084c341825d1b2a3e88b4507",
".git/objects/46/4700d1d7ca4dc8fe8ea0f69a364e5ab8196620": "5ea5737a367be63f3e73baee12c0088b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2f8024486ac3305d4eaaa7fdc929344fcfac96": "0f965106669210a240224a7ab30fc271",
".git/objects/47/2fd5e2329f5cf6ee16ccc36fe12984bb38cc56": "dc3d110f364f328248f1eb28c854c72b",
".git/objects/47/d6468db77ca2a27a6d0c60e94274d8e88db3b3": "bf20373a1658d373376597f84f630b3b",
".git/objects/48/c9b9e0b85f51400db4df501549e416194861d1": "5634789841cdcf1ad9f7dcf8078937b1",
".git/objects/4a/f6acff2fb9e16534c6bbee411363832313dfba": "365fb22fdaaf7b994849eae9fd141a44",
".git/objects/50/e4c4820552d74d8dc69c1e9b5dd530b73dc989": "20cd68db7bf16042aa9c580f98cb22e2",
".git/objects/52/45667308aca4aee8f2076c7b526ef3fdf82c3d": "931f632020d81d7d5022a2e971b6340d",
".git/objects/52/f245f79805615ac8648915cdeda6ca70cc7166": "ab56fe193584c6c9f3e3c34db468dc12",
".git/objects/53/af701cf582b3c442d313387ee7e6fc80d3df79": "415b0db782e0b06bbd63b69ff0e999df",
".git/objects/54/552ef3e510fc5f03be253831c431ca78801a97": "94c0dc022a41d561acaa078fe9591b23",
".git/objects/55/d344b2e62d4cebdcaef204180570408d1a17ae": "72d4a2f4bcff98c8cb5b2d617663430f",
".git/objects/56/4d8baa21f0817971f9a50d265bd499407105c6": "0853fc00b93619e456d851d2067f5a4e",
".git/objects/57/2f48ab57216f934147ba1940860b2db60bbc34": "adcba863f123fb2d43226d8553d7e42f",
".git/objects/57/58ce5076e7df86bfb924e617ced3932f94608a": "c79deb151c51508db65dd3ebd2d089dc",
".git/objects/5a/2edf03585c734b4bd83a98d0aeb17f21d75488": "bb1b612a6af7c0b7a04f798e7c2b56bd",
".git/objects/5d/1d66c44e26a93eb1d2ab66f2c3d9e2d2dda8b6": "ba1b429f7a02375ac99c5fede4a71699",
".git/objects/60/00ef7a5900e901e09661d729da38a96723bdd8": "bc2c3a21e3f3e18c1f5b92cfdfab2bd0",
".git/objects/60/7a3adbd2641f529b04a006db7cffda3ea02368": "c0710ea0d55921bbab3df6088aa16982",
".git/objects/61/067a2ab1fe1bd3c82b1b89b023353d4442f3e8": "6b5551820dcb5a6fb9b8fd390c5fec7e",
".git/objects/62/a5063dc440c1e48a73a734077f6f1e0105881d": "7d63ce5832d69df61152b306d5dbb4b5",
".git/objects/65/0855da20ec3e886cc3b585989253b67957f567": "1c5e02c14363d3802b5d8639e83e9edb",
".git/objects/65/1462935d64e4faaf3caf1915b0d138d2eab66d": "a17b1154370597d122b83cd94503a06b",
".git/objects/66/0c6817b5d41d1c188a02b60b63271beadcb946": "2c3bed2cd1e7e65ad92e933fe30a147d",
".git/objects/6a/c86bd99ac31dfee8aafd3e0afbbcac7d485341": "62205c30c16cea7feda02e727a757d63",
".git/objects/6c/26c6bb6865e2cd67ceab2f1c90da1abb7581bc": "51c055bbd554bd08c6fdaffd2a4a0085",
".git/objects/6c/713a2ad89bef1dd8f14591a029e9e6e8edc45a": "97d21c80bfb300e31ab64f3a2aa83df2",
".git/objects/6e/00c542b965c3dbf60a00e8213d1e37cb393da9": "b29a397f3d437b6c5bf2bc21993a8e45",
".git/objects/6e/a2918fcea1404a8f9f5e6efbe2ca86517ef728": "b0ef560dadd2516a5b66c5ed4c5d52ab",
".git/objects/6e/fd49f67b8215e45108c41cf3aabcb147edddb9": "1eb5bd9498edafd04ef07a493a01aaf9",
".git/objects/71/e5c790ab538fc4e7e94f28a4230950ae220a8a": "2acfd314bfc82c55f8504e61e8564216",
".git/objects/72/054002f89c6970296d639158ce4308f4de5835": "f179b3ec36599a7b25b01a7d4c7b2f92",
".git/objects/72/46603966f054aa32b530a4b7ab753a617db82e": "a4109c659b0afef870cddd2d710b2d52",
".git/objects/72/fb29b213374e3606e7a0c8e7e5215aefb91385": "158a43340e3ca2d11663e9e973a54952",
".git/objects/73/15f3355ce59b5365d1c0da745799ee0d98a08e": "7e53494a349861c5e0e941422f9337e8",
".git/objects/73/6cb37efafab30b796278f01c56fad8c2672f9e": "59ae8d0cdb055ae0c7e84742d38e6d48",
".git/objects/76/ddbb441463eb28b94f151888cb2011bf01bf5d": "d562e5439fa13b5fd4c039508fee5647",
".git/objects/78/b31712f297e42d047edddff0f27e58a0e6b985": "2ce450802f212585a2c5db1bd91df6d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8f4345d8aae3dd83f4fe536e9a88f97942c239": "a1fee87e74d3f1b82b4cca5c400f5396",
".git/objects/7a/c0c207075a9ecaaeef06b3495cd9e57a858378": "fdae3ffa69db4b891e1b17655af04df5",
".git/objects/7a/fd914d188dd94db44d197098800940a7170f7c": "3fb52da9f1805481461bc4a6d662548e",
".git/objects/7b/7cc225c323aa97070b398a46d7da98d0b6e0d7": "0a37ccb2607d0f18abf232ea0a12fc55",
".git/objects/7c/d00288be7cea8aafbc5d330f8838d2949da017": "a284affdbdfde8061fa390d3e1d6ac86",
".git/objects/7e/76b94b535f0055dc25cb6dbb2e98694de7971a": "606c388d4959f705b99ad84092b8a431",
".git/objects/7e/b6168b8a179b5239168a55be087ce4139aa44e": "5b78e2cb2271fde9115b6db3a53d274d",
".git/objects/7f/632708dceaab0c5d5657155fc773e26244a207": "f862f45ba7c476bfd3c2db5ef5f66be0",
".git/objects/7f/8f6d7e608a59a6ded6d4cb888599424f5ba5ad": "17b83f1d8da8c153eeb6d50a8545cb83",
".git/objects/82/7a4b79b801144e45aadc05f7bb0770378cc4ce": "f8f7b497d1c166c4a1543ef9dbfd02e1",
".git/objects/83/694447a9d1c7490468dfb22049e51c81bf891a": "635b45c6859c2e6f698fa4234485a3df",
".git/objects/83/ccaedff4dbe7878b5f623518e277964e4b152c": "e5db17dd95530289e43fead05f61540f",
".git/objects/86/67b2d369f1e7097424e6cac999bb6e532860c7": "321d1ef48ddc2392e16d2ffe6c68c3d9",
".git/objects/88/1949b08488367af1de1c17e0597b92bd69422f": "9788c9d322ecf2f6fd134947f05d4aed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5720de3d88794eceebb93f9d8594da51b9322b": "5a5fd4595d6dc3723e3d5cf710106361",
".git/objects/8a/0e8b78761195a4b8937f28c8aa4e5875d0a220": "bd5968eadb67c1765ee0674943acec90",
".git/objects/8a/3c56b16dd8aed274b6ee59cae28714dfb8a208": "14f5d67c3280f7f7f271a2a4d237af22",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/70959382b26505819eef36030a60a534de3ca1": "54317402468b5c330f7b17de44620bb2",
".git/objects/8b/9e5198e0d49292c352b484ed6da105755984b4": "4c5d39c158c8259a62094032d8cbca4e",
".git/objects/8c/04546dc0e6a7a06bcf11fcc2647af313f876b8": "20ea11936d726904e4723c13db72c1fe",
".git/objects/8d/8e7531b7b453202a2d4fef75d467ad49a594b9": "3ea9126e4095000d7532534071a01f31",
".git/objects/8e/26609a0bb554442d2611c8f0069a4e06b795f3": "78854ba835d7f30dfa618dd8d0f9a078",
".git/objects/8e/510602d657f262ff6dbb00f0200129b920aff8": "058b8a4accddc6b771097486d7b247ed",
".git/objects/8f/0f322ce95cb4493c92ef561b499032ba855496": "fa726456933bd4e40a7a95fc943e81dd",
".git/objects/91/382817d77d985a6d14457ecdb737b991bc2d50": "30a4fa0e1d8b9daf6c172a55edd21143",
".git/objects/91/a13680c676c1dae16c9b1b38489b59af3f83e1": "f07f495cba4e456f3d0916c950edaadd",
".git/objects/91/bb4b0bff192d2373e4dfb544f83ff5e956c0c0": "29b614d76acd10ecc1b8e1b4f3e49988",
".git/objects/93/667e4ef342f3daa2803457150701462348d915": "eb43a2116ce861a3ea4038df78627179",
".git/objects/93/7c639efbd5a384466ab556b33e97ac371132cc": "fe420a4d67ed6211e9215c9ae81d1a43",
".git/objects/95/fa64e1ac7c1e18eeab904e815a2690c2d2775b": "041b9b6d89057da5a8d43a1a48aedf29",
".git/objects/98/5a6fffeb476c006020994b0808350fac2d892a": "8b925d3dafb0df08268a4c28bc6059c8",
".git/objects/98/e72ac96ac7ddcddcacad16799f00da0efead64": "84c355e3ffa7533022d0e84ad01b3aa0",
".git/objects/99/0124c258869e932280d268502e16dd07699673": "c71253a837c08613b2f036135bb83c84",
".git/objects/99/7bb8194cf917a386160a9241ab3a9761331391": "007701818d44c6e2d30162c9ce1974fb",
".git/objects/9b/143a880e1aad4299c047d38a58c7b04edf5406": "bf718e0fe57aa85e450dc5816d112e5f",
".git/objects/9c/6c5c0a0fbd293a6462341f085620aa9d7f664a": "9c877faedca6795afc4722f285aef34d",
".git/objects/9c/f6cab5a0d708a2a2b5d393ecb82a0cfc5eb2b9": "7f64fa7f11d7f56e1ec3f110d0bb5765",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/406f2ddf0e80c0efab0c4f8139141a92187077": "c47295c2d4499d629e493d1126e75fb8",
".git/objects/a2/a56c204c898de3548c3287ce8268e8f42ea1b0": "8d239af80b9d475176e400db21b9ef2a",
".git/objects/a4/06f03951acd51049e3ceb3308466f50187fec1": "4eedcebc8c1e53eaf155a9602b0364d9",
".git/objects/a5/49e93bfc8cd1f76b540429bcfd3efdaef8c195": "3cd527794e7ae9c7629bd4b1af357a0f",
".git/objects/a6/3d06f113c7f4b46d32a827a3c95fad11382bdb": "303e6b8968fccdc2d41b5ad604ef2111",
".git/objects/a7/3f4904603906909dfc27f0b2c5dc8bf216413f": "f15fb78ea1f04acaff8b2da3c63125cc",
".git/objects/a7/ff9323994d5007a3414398cbe98a7c4c4d7a93": "ec4b3987d59a25c11770b3277caadd65",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/44f97544c3a3d8da0fad72291ba0ee3ac4ba53": "b90aefdb0786ccc9a232e430cc7c2364",
".git/objects/aa/3a844ed0cd689fa2c36ede4de34bbd608c5bab": "328ada8a89bf1610282faff033d6fd14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ca99e1c2754a523069d503b5f8f7f1ff9d910a": "8015e43490ada2bd040f4d3faceac560",
".git/objects/ac/1e9d1cb556e7138b8790780ec77297697b138b": "5d2583562cc9702e2186f76022bea0a8",
".git/objects/ae/659e03607f4e336d7d088b62b8632efaa0a789": "8669a1090e5aa63bb4668387adfe76d0",
".git/objects/af/3cb63a52e2b36d34c2fcc1031432cc210f0cc5": "750ab516670a023d44b4ee5298ac320c",
".git/objects/b1/2d46280b9de103eb13ceb3ae6f79643320d4f8": "470c1ac30a1ec2ab02c61bdb97e1fae3",
".git/objects/b1/3c71370547a2b99bffa4bdc3f51a5efd514d14": "47dcde00e76dd93ab65b8822432c242f",
".git/objects/b1/7152b0ff903cd344fee37eae3a6e8b1b11bc37": "e0b8df7fab8ffa502fb77af8a584ef0b",
".git/objects/b3/454d50ae8f718800f231b185f88092ec248141": "b723d6cb73800c25d1141c890a0d6884",
".git/objects/b3/4b68b12e1fe14d01518fa3f524be9712c35b6a": "85093bf64605f23e05a3f3d36b2007e4",
".git/objects/b4/1f5715fe6057b8f946413fe72de71e04422e44": "fb155a517ed6e99abd6e2bcf4fc6486d",
".git/objects/b4/718919158f6ccace00d902f8111eeac78a84dd": "1d1a72b55d6e261b8f7b4d049c9ca11c",
".git/objects/b4/da6e2dbb888a27dddd039ddfd8b0adf1743e9d": "7329771569e4961a836bbfc674607c65",
".git/objects/b6/c467ac4959f3009b374575da535096b1b91f86": "f46f5f827eaddeaa21f29a7937a58ebb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/73c9296164500c8ea6e31ec535fce0bcc4f2f6": "29a42997f270251e3653325774bb17d5",
".git/objects/ba/54afc59da71dd767afb30cdb980262fd289f9a": "6086ceb75c5f9d532f5cc1839571b93a",
".git/objects/bc/60ba266f49664ea67a35ee54d21d8cde825db4": "9c7a0bc4f925b6d19d00bb0ed1a7409c",
".git/objects/bd/431c7729d5653c775ed80aaf64fd6bb3d58f62": "1d6dc638c44b77cd6e35560b47c65979",
".git/objects/be/2af1b12cb37a53be436c160ca7204803c42370": "b1f0b72397da286f72a4e7df0d42527f",
".git/objects/be/9c89422c423fbdb45f1357c7864422e173f64a": "88ac8553e748b183f11274b573429d30",
".git/objects/c1/3961872e3662a54b5bf7f3797f7dfee5a40cdf": "88544080a3d7df3909bc2ffc3c16e019",
".git/objects/c2/4f5214320d733dbc4d4cd5feb8f1ac7b8276b1": "e2410472beaca870418a72675c9c1da3",
".git/objects/c2/75f7ab6ae5401d51e3a20845370b5a064daec7": "d000c544867760b32e077216155b34e9",
".git/objects/c2/83643e2ddb456d7bef3a1454e96af00aa2ab9e": "c9cc34647b114408971ffa5d28691a66",
".git/objects/c2/9bc7afa1471b5737c479a6e0721c8ef62a5029": "4eaa558093b9c4ef7a1ed8a01de914b5",
".git/objects/c3/7bf8bc29d0711fcb02a3a4a01ae7907560e017": "6eb50afa03ac4c01b94eed9adc699021",
".git/objects/c5/353d967580b882e5f39ade09e540930a3a6ff6": "1c19d469cc42ef1c9054536c329698f8",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/527331bdb8f0e6af298c59f62a4cd7a5297e84": "4600dedc0e236c140093da75f1a6103e",
".git/objects/ca/d195c340d42fb3201c8d847f822828b9bec33f": "6923d3217aa7fe0e48b29c9c2107f576",
".git/objects/cc/716a289a78647402493e3cb1c500812fc31115": "7fea4ddbc7d1cca9c10ea9c0d380c425",
".git/objects/cc/b60bf6bc0fb9ba125a04940dbaff343a14bb65": "bf7dfea8b9108daab3f0345066a01c66",
".git/objects/cd/e8e3bf5233a1f744aa9279c0fceea8ea2e3df4": "8dc97ba1a0cb819ad030e14296b4bbb4",
".git/objects/ce/0a2106e89c4e3ed08293e78ccfd7c72ea44da0": "d1eae75ce09c0959d25852076bdc2e92",
".git/objects/d4/51b20191bb576d7208bed3567ca8b5090c2833": "5e24e5566812e534ee4f57adef7d7a52",
".git/objects/d4/5af2dfde087f19713b448ca3fb97bce293653b": "bd1f4d839bdd7e6e3552d003b87a6202",
".git/objects/d4/acfa271e0bd14aa338a14c6ca6594282877803": "da6cb32674b93c92e6539d249b8044f3",
".git/objects/d4/ed6eb3096e81dd30091edfb725e559c120df9f": "b91ec7e281aea8021310969d0140fa6d",
".git/objects/d6/b7bd63ffff74a1fec6220f9f622e7a4917f421": "5a660f528594ff5017d73196a6e653b7",
".git/objects/d6/fcfce680bd5273ed03648d872492f44d064f98": "d2c097de5c4cfb399628d3c5107f16aa",
".git/objects/d7/51100f6a697807061aabd7ef3eb700450dee7c": "e1fc4dcac0b98039b1ac540794b9d3c2",
".git/objects/d8/80650e64f63fe4ba51513d935ee41adda943ed": "2003d70a72cc253f536155fc343aea5d",
".git/objects/d8/d7d08ffa337a3c48a49b767c8bdb30e6933dc0": "330f27f65c78ef5faeee1bdcd644938e",
".git/objects/d9/e1ad32b5e392d59c552d322550915e0ae3354c": "a05fe8fcbae475c44fd55bf736e04234",
".git/objects/da/479b03aac0ae6401aff2ba61ab41539870c12d": "a19f4f398129fbda3c4b1e6db8a9e725",
".git/objects/db/7d41da16aa9e8a704e898f76025d4c31cc7e55": "d8d9cbd0b051301578707a3c8c7b744f",
".git/objects/db/fbc9850bf95a1e4e02cf3316ad83f4a354f87e": "00c072b9c3925da44f6219b08a0fc5c4",
".git/objects/dd/071a0c6bea582622f2e1926cf12d00a3d3d2cc": "475f5c4f251a1ed5f59c6bc7856d8a18",
".git/objects/de/4988487891d32347de09c148dfe88353a3a104": "cfafda888d99bb33f40d51a3b5be2298",
".git/objects/e0/9b6ffb1f2150598ea9fb09e16d8b844739dfc0": "718c1143ee2fb6c1a75ac9f1d2050fc3",
".git/objects/e0/b42d5bd3158818611a9151b77286e294c247ae": "31ce01243b6558c2f749947437ef4332",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/e3/1e61ab54a66b6e0fa9fa1d1befc768c379f8e1": "9822b952a1e224cc607493790715ffff",
".git/objects/e3/af494a567a6fe20cc11f50f4190016442342ee": "eb4cb517d97871a981d48cb89d52ee2c",
".git/objects/e3/cea63fc1102c768199dfef7ba08238f4e8e239": "51f1ab9643751f2cb67773bcdf384134",
".git/objects/e4/ad1162bd85eaa308950ed34267f2bf4ed99892": "dcf16816e3358aeea852ced30fdae826",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5bf6f5a4d5ba3692b8cfc4980275894f9cb2ac": "0265127279b831ab5c37243e4671da83",
".git/objects/e7/5f1ddd70346e3e66f05c64631a368fae7b0ccf": "b662051a5dac5ec245504247a5124ca8",
".git/objects/e8/0d384a7e0cfd130d1864130ca10e0dfcb2788f": "9ba19d2b244928fa1c8ef491766cd755",
".git/objects/e8/54c502861c02680b685553e38b654b8a66e205": "86f9801c25f7d3f7e5e0b728bbb4a0c0",
".git/objects/e8/5b7bcabccb06fd6c345c2df1aaf5c44d83ddd7": "03883dc6aa6ed154841b66f2c63b5c5a",
".git/objects/e9/99caff7262894aef78401283a702de5e21d095": "5dcbf5348800d72527fcda53f62d043a",
".git/objects/e9/d66e0e1d2ab62186bce0df5c3ddc448151875e": "f5c5e80687a8939c674fe3e22903fae4",
".git/objects/ea/5533db9005a5925411a2207d349ea0e7a42ecc": "fb83bd6b1f0c9bb611032187c6611d56",
".git/objects/ea/6b2bf8b08579c3714222d124ffcb7345fcb5d4": "86c6a1c11b090b0f6755bb123c2cb692",
".git/objects/ec/69644dc9fe8454a3d451e8dbf2aa1eba614854": "1125265d60a2ab95ba335ee06617599b",
".git/objects/ee/435b5426189ce6885995b911a1925b9468caaf": "9b21de5c63aa3cd64d9d78aced5c108e",
".git/objects/ef/be48bd4bbff7044405a9314301cfb286402052": "3ba6db377eff23872d5799258735ab9c",
".git/objects/f0/891921e7a1daf246abe05a9ad9381a1191bf61": "462df1ed2dff339cd7c547c52e5fa4cc",
".git/objects/f0/eb0cee2faaf1e192a461237202238e1978874c": "cc09e8c7f4388a5087aff4c5544cc207",
".git/objects/f1/0ea0ab712ac78ba4dba81c7268c1c2bb85404d": "0db61c92bf97778014a2abcfb6e9b9b3",
".git/objects/f1/f81d51699caf276d2162190eb8226bfe8e1542": "ecf8e328221dee9ed49a7f3b6810dc35",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/91bdf9940ae742894c0321d619a01a6ec75654": "a4f249895fef99653b5b71a6e0aab38a",
".git/objects/f2/db2c872b690520e0960c8b6b290000ff8cb13c": "dc7330c2f77ff6d5a6431898eebd247e",
".git/objects/f3/a0f88e67b90557e12af42eb1959c305d87513c": "169dfc7f9bd1cd70adbc115cacf1655e",
".git/objects/f4/f6b990f2f235af1089f4cbbcd2c8d241b5b736": "4bd997372b983462aeab65c221ff0e62",
".git/objects/f6/bcb52d258fa3f4caa7ed4c5ad582b8e3693b90": "b516a33286e15137f236b6c5443d40cc",
".git/objects/f6/e88c70d77f4f68493b7cb856d77ecbabae6480": "74fbfd18702aa31d932fd3a83cda37fe",
".git/objects/f8/c61ffa8ba36e0d81354aeda3a4e79236318995": "a4fd89c35153a56f9f838dc23b035e02",
".git/objects/f9/ca3fe6ee066c969e71421728c7d48312dbd8a8": "a33d5efcccd64d3d949a616bbe52a526",
".git/objects/fb/167d14575c6ae5695d893ea84fcb569d0c04d8": "af905ebe42cc5fb4ba03e635d05956a0",
".git/objects/fe/c55fb15c5920df245e0f4c63b8a7b26f2a1504": "22aa1da89ac825765b7a52304271e972",
".git/objects/pack/pack-048b293aa35c07c864115c679c789e77a04d08ea.idx": "f59b80e93d62bc7fbe644e75571446e1",
".git/objects/pack/pack-048b293aa35c07c864115c679c789e77a04d08ea.pack": "10696ca72e6749a89158573c31c11eec",
".git/objects/pack/pack-048b293aa35c07c864115c679c789e77a04d08ea.rev": "d9e6a9cf48658af1a08d3b2326668797",
".git/ORIG_HEAD": "d62d448f67748b2e3eb9ebf4a5d665f9",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/REBASE_HEAD": "b947f048338a85db8998e6c0387e0beb",
".git/refs/heads/main": "3f01df1b6cf5db6c2324d07eea449e09",
".git/refs/remotes/origin/dev": "e41eaa73f5b025ed76148f8621bc8fb9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6b272b3877f23c6282b63a3b56cc0c20",
".git/refs/tags/v0.0.1": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".git/refs/tags/v0.0.1-gh-pages.0": "a3b01effeb10263e50433d1b188766f0",
".git/refs/tags/v0.0.1-gh-pages.1": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".git/refs/tags/v0.0.10": "fae11f9888c134478d580b3795316660",
".git/refs/tags/v0.0.11": "4495620ba922f1eb136e23d17b42144c",
".git/refs/tags/v0.0.12": "056ac29033a87c330c835c1413def097",
".git/refs/tags/v0.0.13": "794d1dd4cf2f965fde19172760a8cebd",
".git/refs/tags/v0.0.14": "090a9c1eb703895569620988bfaae740",
".git/refs/tags/v0.0.15": "6d193e2fe3495aa3fc3d9e00d0766b88",
".git/refs/tags/v0.0.16": "35460a9b068400e880d4aea3b773c6bc",
".git/refs/tags/v0.0.17": "878008db604a0e90b2ba21fbf3315e07",
".git/refs/tags/v0.0.18": "5b5ab1cfc7b40cd8aab215744576562c",
".git/refs/tags/v0.0.19": "85aed3017a61176348a38d75ed4866f4",
".git/refs/tags/v0.0.2": "d4390ddc906beec1670028868f3bb361",
".git/refs/tags/v0.0.2-gh-pages.0": "d4390ddc906beec1670028868f3bb361",
".git/refs/tags/v0.0.2-refs-tags-v0-0-1.0": "369c26ea0bf5f4a39ffb403c0c8b9cac",
".git/refs/tags/v0.0.20": "2079a6ad21776b464c0d63cb8243cc5f",
".git/refs/tags/v0.0.21": "0fdaf580b08e8640371ebf59dbf8ec87",
".git/refs/tags/v0.0.22": "f1092c239299ca3e036806519a633e6f",
".git/refs/tags/v0.0.23": "094a989a30d10bdb8eecf56ca03ff375",
".git/refs/tags/v0.0.24": "c7120a83687feb075d5f857a1119007e",
".git/refs/tags/v0.0.25": "f58daa728634323b93cf310c7af4f852",
".git/refs/tags/v0.0.26": "e155a017cf78e20b9f5e10d4c4826d9c",
".git/refs/tags/v0.0.27": "fa37c83a3e220ef2d0f77a7adb829175",
".git/refs/tags/v0.0.28": "aa824b62498af42eb3b41a12dff85fb6",
".git/refs/tags/v0.0.29": "eb6e16864d591b4fe80891bad2310f24",
".git/refs/tags/v0.0.3": "cf658a195c9772781748d9ecaaa558f4",
".git/refs/tags/v0.0.30": "47fd059e6d0444b6a9cd882e83a05778",
".git/refs/tags/v0.0.31": "6b272b3877f23c6282b63a3b56cc0c20",
".git/refs/tags/v0.0.4": "c726ce2753b92be5f0e7d56a9e219c4e",
".git/refs/tags/v0.0.5": "709ba134cfa3edd908160a454509e942",
".git/refs/tags/v0.0.6": "78544cbd6549a5d6443e035a46284742",
".git/refs/tags/v0.0.7": "15ddc3f8181cb26a2ad7a014b7fd7460",
".git/refs/tags/v0.0.8": "3d560fcb8a7ab9bdc48b343b3e5e35e5",
".git/refs/tags/v0.0.9": "60815aa11e086baaff7bc87374ad6d26",
".github/release.yml": "5a502db5de8c0900b292dd3e91da3baf",
".github/workflows/static.yml": "7b30ac9604a8f2495b94fe5be3292699",
".github/workflows/tag_release.yml": "c1ec3b0b315d1d396e9954ddbd31105e",
"assets/AssetManifest.json": "60bba545aeda8db23f17e533b2c531d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/il_340x270.526781863_4j86.jpg": "237cda944f00d4d9403c7f0c113d4771",
"assets/NOTICES": "b7b39d82b81d89c1d53f72f1046e7a5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"favicon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"icons/Icon-192.png": "5a750dd8b91c22d1ecd094d77c20b714",
"index.html": "e2c7798ad64cd33a86c305006b71d8d0",
"/": "e2c7798ad64cd33a86c305006b71d8d0",
"main.dart.js": "77d7cd885c33b86fc5660c5f20bc3a71",
"manifest.json": "7b87acc53311280e6558a777b2ce7f1d",
"version.json": "31b0d34062ecd86bb052c937e8e2e50f"
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
