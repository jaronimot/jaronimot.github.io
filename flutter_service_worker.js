'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "18475f652557bb1325e78f40f22b0023",
".git/config": "947fe7e1902e0320d75fc78a0884e278",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f0f29d159732682f805f3eff449de4e9",
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
".git/index": "00055645f24fab120d9a35a4f9291c20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f4e50ae2e08a8430ff8d3af20d3bb59",
".git/logs/refs/heads/main": "6bf1421f14226437b8ecbb4c8be3cbee",
".git/logs/refs/remotes/origin/HEAD": "07c9a7d448feb507fc11946758d5e70f",
".git/logs/refs/remotes/origin/main": "3917c3626351e921a5769104df3df7cc",
".git/objects/00/137c1ef5bf5c58c289530da9e11ad00b63d33e": "2cb765018e14d84774989dfae5a84c06",
".git/objects/01/57074bfb5d862a74ac308814951fd872483cbf": "81106c7fcdda56d280e49fc716f67bf6",
".git/objects/01/92d558aef0148ef511485a553efa4e407d63ad": "928e0eff71c8d683d5d8d0792e41b140",
".git/objects/02/fabaa4a76eef74a5936ae471c0016bec1c5eb9": "50e240b8174a27f60bdb1139a4d85909",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/46e6f8c2d80ad639cc86809a6e4e94cedb5467": "a10c38dea9140158e88dd0c3e30ac984",
".git/objects/04/ad7a6522e537b657fe2444315e96053468c5d4": "cba0484f6e07367843155f1c383b9967",
".git/objects/05/3c40c7d8d35f6a5f19078def7d749c57eff469": "247a5f0f776dd58f868c454a78b4ed38",
".git/objects/05/4576fb0f5c23a64d7e9d62a2cb5aa0cac40995": "c37b1f07e030d6472e01511353740940",
".git/objects/05/4d51568a0d18a234a6aa2bc756c5411219110b": "d427727785c6b5d2ec11532c29635a1e",
".git/objects/0a/29d3d766981b2e958b93d8668b33a16cd4351d": "39874b3b9454d380f15dcfb24431f726",
".git/objects/0a/83076e5b90205d7565a66a810a2eeb7ee61d1f": "493435745b5d2fef9e10a594766d7e1b",
".git/objects/0c/8718def257cab0709e04ba47e11e0ea1848476": "016785dddd2f3c7cc5bca35be499f77f",
".git/objects/0d/de728df100914d8da3bd246cf60a45a3bed256": "1061d2cfda6343b4dcba8089cf3230c6",
".git/objects/0e/558a00a5a00cbb95ac8c40777002bf232e78e6": "c5abde7b6e5c20a0d771766c3d9834d4",
".git/objects/0f/4d701a21b60c1e4761357850a5a8137a7243cf": "afcd82a75bf3a546c9de667df19e9eed",
".git/objects/12/7b7515dbe0b29960da99c534c5b78f6cdf760b": "cab4a5d877a3cbf43d3201590a50b0e9",
".git/objects/14/f98713626de18b84e051e5bb32a2962e7bac7d": "d5d15920faeb5154c729666de115aafe",
".git/objects/16/3c8c1e45c620d627b6ad23793eb6b5d2e91000": "6278dd19ba011ee4bddba8045e803254",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/20/97ceb4531de00040e1e81c21a971d8261018e3": "de1f0358dc7f08488833547db88b7860",
".git/objects/25/090ceda09ed437706527cbd112787913994c8b": "7b76477b9237a4a1e61edf6c9690ec33",
".git/objects/25/862b65bdc84bfb8f389a9c15cd56257ccca0c6": "32b0ce80d1924a65a6fa9648a9bd3ffa",
".git/objects/26/c5e507f8b44ccb35639063646f14c4c9744748": "fbdcc1e4cc0f5ef79b8c0065de5c788f",
".git/objects/2e/b01f519bf45a96034661abc196b41b8be1ed6c": "605171c13506dad6862c17aaed5f7951",
".git/objects/2f/42e849ad8dbff28067df4199d5a1a1f17ddf12": "a2aa85cc5bcce1270a6b20cda4c1fb74",
".git/objects/30/ba473bd7742fd2e860460f7c17317bd3a9db63": "7b51f54438eb600a0c7cab91ab816309",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/97fa0a21a99d02a14a16e5ad723b8a602e423e": "63888d1dc8d61b9e601abbfcc10b4c75",
".git/objects/37/26548851d232863ff858feaf31e661808c6aa9": "ec0e7ebf73e8a19dcc88971f6e24775d",
".git/objects/38/85f5bf9b4ef3d787db1cd5b29a994bf4238214": "f1cceb59e8131137aed8871767750f8b",
".git/objects/39/1d457c5916082e8ea5d7a720484ab479097852": "20fc1dfe98da5e9e9bb4c44a820109bf",
".git/objects/3a/53df9980c2a568ed865c661a4bb88f664b768c": "e6bb9d23d2639be609642f3adca2fa36",
".git/objects/3b/b7178ad0f1192ddb63ea62d20cd56bae1622c9": "7111464ebd426b88c1a1d053bd08268e",
".git/objects/3c/2cacfe5ef528e8f39df5d82ca0e779d34402ba": "1e7f38050cff9b45de01ecf5068ef404",
".git/objects/3e/321d5ca1de686d354299ff18910fa1b5f4d1ff": "089462b535348041d4e50619d58e93a1",
".git/objects/3f/3135a3a6227be566c7ec02ab573e6b56d59eb1": "94028dc57b736bb83ef3c09bdfc434d4",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/190548d4a8fe751280c9e6243350f7267f1577": "544d37c678d5e05c0764987127e25fbe",
".git/objects/44/3179f523b23070c1f88a5199c9b7faae605d3e": "14e085b518de1667522c1feb414da3b5",
".git/objects/45/53c4f30da8505fbe4627a449e58a9d220e8176": "9046baf59bbc2bfbc9304d1eed166ed1",
".git/objects/4a/a430de28771452c3e0064da9571ed9d74676e0": "c21e9eab8b70404a0bda855a40dcfbd1",
".git/objects/4b/693f574af680a889720ac98123d9feca5eeca9": "2b0c6a971a035df1f1f33aedcaf81be8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/0537c318975e5a16fc0a6f234aeff96dc1c2be": "77905052525220be6a9eb15e2e2eee91",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/53/5f2d8a942ab0b6e4024345d2e1c83ee643b95d": "57b2477016ca2f540053e3702eb17364",
".git/objects/55/014787e317519b514af43865474fecde15bdaa": "cd930a68a3fa831c71862143aaef567a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/ca674f023c3583d7a248643af2d58edd19ba8c": "abb060fc9536c66c24d6bca701cbc0e5",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/ecb9651b5612ad068f3e6c5a9ad61df4fa95a3": "b5531e780f8b16100288ef02a01f1a55",
".git/objects/62/a2051c8bb5801431adbe50394e686193fb3781": "8cdab43ce8c8bfa4f459956e5d07ec27",
".git/objects/63/624942b4894ff523e3a6de3515e364710a2dd6": "2d5d7b5f1d27fe93ea77700459e977a6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/21f6d315d2e249282bf4e04d5806126da85667": "29bd4222645f128bea0fdb0e7e3dca7e",
".git/objects/6a/1d37d7bbe1a4f099c610a2aabe52fff3954983": "23274eeb74fb1c53c5f5da8964dac9b1",
".git/objects/6d/7732fb3a6d8cc5efc63c4d7a43ddac89ebe55c": "3258996bd7260a25b401c8050804c083",
".git/objects/6d/ef2315e78572650fe50ad42a7afb45d347cf26": "127ff64c339fa2c60121aa7b6eb2383d",
".git/objects/6f/52e8201697a5befff5448dd271d71bca980e63": "0d72bfc8963353f131bd653ab829d254",
".git/objects/71/c68f7ba35b98efbe9aeb63bb63588f2c417aa6": "88fe95404c49477d84b3d0520fb1f4a9",
".git/objects/73/3288f7d7d18d43b20e821418122e4653b39974": "d02e9ee062c63af72dc549446d1bdea4",
".git/objects/74/57db2cab6a575db21b0bd06c49eeab49bc6764": "f888a866e26728a675ffacff95308316",
".git/objects/79/d55bc2b46016b8d40b6ff2b19c459f57cc0579": "e8a36419e58dd907aba551afc8708b58",
".git/objects/7a/45c76dc1bc48a97adae03f40abb1386c896c53": "a2a9552f2c52ab04739edd2184ad264c",
".git/objects/7f/62a63cb904a36918a3046ecc50ec2b3408a0d0": "1940e4e5189c0419a7fcceb6b2786642",
".git/objects/80/3fbe8fd8283735bdefe2fa57d67a89d19233db": "ac3aa1e7bf96874ca5212ea3861cab8f",
".git/objects/81/4ecc042626441bdab7c22c67cf6e0e0a9db0af": "bafa7ad7ea11d39ae77cecb4846620bb",
".git/objects/82/38788ad832dbfb3393854ef899b7f33579c05b": "1a9e89db1c5361634511fd826bed3a96",
".git/objects/83/8a0d81570f26ef0acd76a55c53beaa919f9884": "b4460621adce9a71425c1a9f04ae8e9c",
".git/objects/84/c62c1798115dfcf3590893000651a29d7eaed5": "a22d56aecd2f7b9f1ba205fda147f895",
".git/objects/85/03c1f91b2d1f81566d78d52fd68cf528e168db": "49465542f82bf34019c21493cb087d44",
".git/objects/88/4e38b26a509745b2c7f3e19b7e547b0df806c7": "4837b325c8336120fb60b2a15a9e8d9a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/1969fa051166a4a947e1c6d841204773c09fe4": "2e2414767625d15b8bfc5df96a603929",
".git/objects/8e/a564ebebd049e5631beb516e6a359ce1f63b8a": "9b344f9775ed280728082f198cf856f0",
".git/objects/8f/59ad09b062d0d1e0fc415eb4d7fe6b80bebb9c": "d07480b4c4a83fcb3b29263fd938ad73",
".git/objects/91/14e9ecdc39cf0cfa775370a92dc7cf5ebd5fb4": "d4f7f5288cc20905bdaa099792021f20",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5c4625fafd9a51a46d71cb6de7188a04452ec9": "dda8b2b696bdd2e74a218b9421b7c35a",
".git/objects/93/eb5daa1901fa8cacc784f937c94ce58284e35e": "a44334ddd06f8f605de6bc1db862ebd7",
".git/objects/93/f1b0e751993d9d11881ced1cab0afa7393a072": "f1380d9258149e0718f567e663fb6d28",
".git/objects/94/3ac130d7344f2edb20d5d22e03bc2ba71982a9": "ced60c8997c16f49458c371638f0e89e",
".git/objects/96/3558b96473ec92af20c07981639204f3d7e055": "85dee9a02d5c5b3913509dfbde3cf4ed",
".git/objects/96/519ec907f0a8f39652c411bf775310d377b029": "431adf1913bfb16ed7149f937055c19b",
".git/objects/96/6310377909b7d31550da96fd1932634eb225af": "c9be0cb2f40aff940db10fc078ab5e69",
".git/objects/97/3062096217f4661c89302d59b696f20f0288d3": "8527351a451ac59ec87fece1b966daea",
".git/objects/98/f98f383e766f84465342380c311739e9320742": "3b8da0c870ec4564568b7eb9b5911bdd",
".git/objects/9e/1e78365f751d797c265b9846835a659c1a2e87": "1e6e779e540ec32e7aa2911f4e83d6f0",
".git/objects/9f/088a388ef46c63bcf9d5854a2dadbad6c4786b": "48a0b37b18ee0d386abb09a8a0303c2f",
".git/objects/9f/53baff5a73588adadacef64a6814823c920a58": "07d36c76325e6c45dc1e031370f4e301",
".git/objects/9f/926a72986b1eea61a65e4dbfa94b387ba50a40": "8c18217f88bc317d4be61d499e6308db",
".git/objects/a0/cb6edc201322e2d6db6b726ea4e62fa2258eab": "889fac729c5c60bfeb62af73d3ca4bac",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/727a8bc57fdcc815dfc28fff474d8dbc41aabb": "4f8ee9350956d5644aae9fe32650aba1",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/fc32ad1a1e9cfda21fdec61a42cafc2bf4af24": "d2fe7de627619f359b6b97f719bb62c5",
".git/objects/a9/3647c8847c2968e4bb1d838f8ff4f47c6295a8": "2b1259b8e209604e3af6f34c9a67af89",
".git/objects/aa/0f49d61e60e736efb5ca20e6fefbc12c52b84e": "c1976e52f40899a1403a9e7e9835ccab",
".git/objects/ab/e83a76f6c284742485a29feca2fb85c7d665ee": "6a02e85d0f4135b5600f33c2dc3c992d",
".git/objects/b6/302b836ab6e1c351062b60cb21d8c14cd01e19": "4bf63ab9b427cbcf7d9f0015b7d84f44",
".git/objects/b8/aaaf04590b8826cdcdccdc315793544a4fb492": "38a271f6a779ffd5780895491b6c3875",
".git/objects/ba/85ebad3a0481f5aac566a0ae98b901c92ea3ec": "7a17b428c0337c5a916c52574981d92f",
".git/objects/bb/382daaee777f564c44472cbf89990f4c646a0f": "e6389c2be1dbb792d14b6607de4c1ede",
".git/objects/bd/674f7707d831a98540e5a870f00ccc4fee0f8a": "4f0df2e8a4bcfb3bc9ad89373cf8703d",
".git/objects/be/469e59ee4ef78518bc64cc8d92389e037ab3b6": "779c7a8094fdffd182be8609e90967db",
".git/objects/be/db269d79fc4b55a5cb339dfbe2d29dc7b91696": "cd28ea68bd0e14808fbf0805a0fd1668",
".git/objects/c0/41e62a6a048a621e2c03bbafb586b5da5ecf46": "27150791190d3fb71a16b6be06b2d822",
".git/objects/c2/763a4183586b067dbc9b961f0bc9c986261f42": "f41e6199345e6e47432fac9afe0ce5dd",
".git/objects/c2/dff94641264ec9ef8d3b0150110fd5479e5a56": "a675cbc5256d0e0d4c00b54ea338402a",
".git/objects/c3/6a61974e74c8b6bd93f309e1b30120280fed95": "d70806d46959d1e69d908b2d68b3c660",
".git/objects/c4/4af2fa49dd31e56edb802522dbcf81d73d0917": "e148ff2121be544f4c1d0e158c04f352",
".git/objects/c5/6b5e1cb88412626a805397ef37493120966684": "295caeaa488b46619f297f04fc2c67c3",
".git/objects/c5/ea3f8acbfc40c46c216928d44f9963c96872ac": "34b97ec326a197ad7b64daebdb2b0edb",
".git/objects/c7/2c888dad10790754774231d29aa6e2ec00fc4f": "8f909646fdf30a099b363eee7179b0f5",
".git/objects/c7/e0967ac5b1bbaf33157ea4d4e957a7e1b8eb46": "8854e97861d08f2e62406272a956f28a",
".git/objects/c8/63761d32b6a8ecc0afe573a41d07bc273d06ea": "f4543ab39fcf308cade3ae3c5b70459a",
".git/objects/cc/8b20d2e69fa686551e8be0de529bd5eda9134f": "4b2640498200cea096d35ae3045cf2c5",
".git/objects/d1/768ebca8d6b5856ebdd5231b3a35935d80e46e": "40f0695a0657662efb6070248b7d533a",
".git/objects/d1/8836597f2be382a3660251993b136b1f39a23b": "6e5a6d5d299fb8d83ca791090eeeab83",
".git/objects/d1/ba3b7211f0e45ac945e02891981fdb687197b0": "0a77610a8f4c9a6a1bcc47cd98fb665c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/c0567d062876f13a6a5e5105d366e881e8538e": "6355e556d1991f3219b76d49ba72aced",
".git/objects/d5/ee8f483c63d42873622b970346f93b05da1077": "53fb4a46979586f124a7bd47c95799dd",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/5e568c13b548c3c0555052913e82cdc8dc62e9": "7ccfaaa2f5348a091d3fbc8f336e3239",
".git/objects/de/19b30129116d2a94b8cc2ecd0568d36b2718c7": "f04c136a969deffd7d7c21697f23893b",
".git/objects/e4/313ac48db299904156102d93cbf1a6398c362a": "075f5a2c739a2472c73dcad0ca74d84c",
".git/objects/e8/09cb52b2862e269d01d3188cde7a903ca43154": "2dc8c753bd76cbf109674927df86c88f",
".git/objects/e8/7395c042689bc2f5e88458ace71a3d65a9153d": "c26fdba2d906d6fe26f83685f6d95cdb",
".git/objects/ea/6e54e011dd5666faa8a63f48dc187be82ce573": "0a62c46c38e675289fa5afaaded0380f",
".git/objects/ec/e4b1fb474c944ac4a424f69a1ab02e27ba7593": "3dc8d0b016aee573305764cdec6b8577",
".git/objects/ef/016b2d0bcf00caec9495a5cbbce04d44e26aee": "4b9d794b42306d92f855e2fc70317fcd",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/e6c7c2ecd57a942e9b58e4bbe27bd6727fe793": "aaf4eb444345ae6069626525b84abb4a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/7925d7f12b9eff84c9974aff7cbbb9c61924b9": "a5b355e8c3e8d5f4fa3e531702be609c",
".git/objects/f5/f1bc01c2f201396c20bbc9db4d1cb7c3005952": "cd19ed7e38834c4889ce4a6fce14b51d",
".git/objects/f6/48230175dce382d569e367814406e7245ea6f2": "1a51609f6622e6cb3ac7183165677763",
".git/objects/f6/66ceceffbad80a9e011abea9f912f1e8fc4a2b": "9dfff6342dfd8cc5783e9787440bbe7c",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.idx": "34e873bade1ed4fbff61ff3581fe0261",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.pack": "d04fc9a81ff7cd83e71a1f1a8c333afd",
".git/objects/pack/pack-681239e3893c14be9291714135cfcdf5f13f0e45.rev": "584d9eebe586877db43273f16f292d55",
".git/ORIG_HEAD": "86c9804b7871e37fa5ad554424545581",
".git/packed-refs": "7904b5587c9ce11edbab7403bcbe4fdd",
".git/refs/heads/main": "21c10538669f098fc7b147c0d18b1d47",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "21c10538669f098fc7b147c0d18b1d47",
".git/refs/tags/v0.2.0": "5af0521c7f68d25451ba7a45b4587fe4",
".git/refs/tags/v0.2.1": "134a8a70f0c57695c06114e20f44768f",
".git/refs/tags/v0.3.0": "0ee04d245f5b7d209cffa919874099b3",
".git/refs/tags/v0.3.1": "c1454a33dd5aca8d4609dd18c6fb3f8d",
".git/refs/tags/v0.4.0": "857734acd4850f407dc4e3c1179db3aa",
".git/refs/tags/v0.5.0": "3c6da16292859c8a66e32896a42d10b2",
".git/refs/tags/v0.5.1": "c78c072dfd3a56ae7e95121bd9eb54a6",
".git/refs/tags/v0.6.0": "70474bc81b4218caddbf4d005815ccd4",
".git/refs/tags/v0.6.1": "4b18da5f7309f1ab9f74d5f5a73540e6",
".git/refs/tags/v0.7.0": "86c9804b7871e37fa5ad554424545581",
".git/refs/tags/v0.8.0": "bfa67176da2644a63a372278e7cb8aad",
".git/refs/tags/v0.8.1": "6d3d80a901e2717928402b3f8fae8841",
".git/refs/tags/v0.9.0": "e7e5c27518de9f9ef33c5149b389eb83",
".github/release.yml": "5a502db5de8c0900b292dd3e91da3baf",
".github/workflows/tag_release.yml": "be4ffbaef4b989debfa045da137d6e06",
"assets/AssetManifest.bin": "74989fe791c40a517adf03bc54d233cd",
"assets/AssetManifest.bin.json": "3705345aff9e69e195c978ff033887a7",
"assets/AssetManifest.json": "f4b8038ada009df7a13696c394b5f0e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "94ffc669979cd7a3a3be053363f1f500",
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
"flutter_bootstrap.js": "7980fe89cf32442a8de6c79ef4853607",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/icon.jfif": "5a750dd8b91c22d1ecd094d77c20b714",
"index.html": "168261b031e6542789bdb6a5fc53468b",
"/": "168261b031e6542789bdb6a5fc53468b",
"main.dart.js": "33e80971e1c841efaad66eecf31c12bb",
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
