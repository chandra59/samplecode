if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"0b2d50f07e5888f4ab14c42794d9be82","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"0b2d50f07e5888f4ab14c42794d9be82","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"dc5409ff49a47801e91bc0fd82c00b4c","url":"static/css/21.b82d8140.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"c4e3c8e1af09d5c9d38d25b4cc0cb742","url":"static/js/1.aad7fb80.chunk.js"},{"revision":"1c79969db45ea3723623fa37732584be","url":"static/js/11.08161d85.chunk.js"},{"revision":"648d707e71655540ab32a1b3b8a820ba","url":"static/js/12.75b0786d.chunk.js"},{"revision":"9632199976f11624faa4499ef9c074ed","url":"static/js/13.d4254061.chunk.js"},{"revision":"4ceabbe1c5111a727c51fbaacf64f2cd","url":"static/js/14.3b529371.chunk.js"},{"revision":"001dbf76589195de13979b9df2d09126","url":"static/js/15.0f4fd666.chunk.js"},{"revision":"f7e51b732651770c2c7f3b88587965b1","url":"static/js/16.9afd4526.chunk.js"},{"revision":"4b98c519c9658d1c89d41d359d920e91","url":"static/js/17.27ddb08c.chunk.js"},{"revision":"dcc4d58685a1170621180853a64037ca","url":"static/js/18.0d609327.chunk.js"},{"revision":"d9a71ace2c40dac040dfdc121ba016be","url":"static/js/19.09ab8748.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"6a1a08a888c7cb87d90aee5866a1143d","url":"static/js/20.ef6803ba.chunk.js"},{"revision":"b5521854a81aa8e3b9e6ad201949244f","url":"static/js/21.9f4ecb32.chunk.js"},{"revision":"996d52d7c1286c8da04bc5decce858dd","url":"static/js/22.babc951a.chunk.js"},{"revision":"46305a98df2c9f332214907674657800","url":"static/js/23.ae59d9a2.chunk.js"},{"revision":"b8d1d7def59073561a8288ee814ef2e6","url":"static/js/24.813174db.chunk.js"},{"revision":"51a08c84ae3b975077b4a73020290f23","url":"static/js/25.2f591bb1.chunk.js"},{"revision":"147508839c79a66cc74e6ff91187f99c","url":"static/js/26.7bcaac18.chunk.js"},{"revision":"a24bc291f989324c25c346df607e4676","url":"static/js/27.e160a016.chunk.js"},{"revision":"2d8746b57e8382b92db77e20f9c06a8e","url":"static/js/28.2ec6c8d6.chunk.js"},{"revision":"be1931c69e42acd41abac52d98f7967c","url":"static/js/29.468c93c6.chunk.js"},{"revision":"952d4241f03fc762ddd6c16bba0cf9ac","url":"static/js/3.38497798.chunk.js"},{"revision":"d81edb3b8e1918e8dee11d8f98bc71fc","url":"static/js/30.a00c3542.chunk.js"},{"revision":"c39df0775acdba4686c92d5ebb67743d","url":"static/js/31.87f31d86.chunk.js"},{"revision":"f6c5df46bfbdc603364e1ce266d9711b","url":"static/js/32.8bd98a05.chunk.js"},{"revision":"b1856b7935fdee0c663acd36a1db98ab","url":"static/js/33.b062986a.chunk.js"},{"revision":"a3bfd64be0dbf3982ff06ee9995e9f03","url":"static/js/34.d0b27d77.chunk.js"},{"revision":"b7b71ff94f2def89444b5cbd878a2b94","url":"static/js/35.ec05df4b.chunk.js"},{"revision":"8beeca36a6576dc8bb29cabd1d4ef811","url":"static/js/36.5d4aa349.chunk.js"},{"revision":"e65f0e26bec5f1edf55a54f48fc7890c","url":"static/js/37.28dd3d2a.chunk.js"},{"revision":"562071f1b77d0d9e2fc860df2cea401c","url":"static/js/38.c6dcc434.chunk.js"},{"revision":"72922bbb81acc691db3403385128e181","url":"static/js/39.6057d469.chunk.js"},{"revision":"a01cebf2d8302261b57ec08261972ba1","url":"static/js/4.c6f23ee7.chunk.js"},{"revision":"28a1c9150e7a3400e3cb8d0dc5c5fd89","url":"static/js/40.9f107881.chunk.js"},{"revision":"cb6c7a9b01af1c9c42043e1babfe50d6","url":"static/js/41.8b2087c0.chunk.js"},{"revision":"a2cdbc7da1a598c91fea35b0089b2174","url":"static/js/42.fda24f8d.chunk.js"},{"revision":"14a9b9ac021c611b6c657e4409fd77ef","url":"static/js/43.5f9df5ca.chunk.js"},{"revision":"27d2c4c246228d68e15d3132b18ab7c1","url":"static/js/44.62a159f1.chunk.js"},{"revision":"4cd1145eafdbb049bd20f989061db203","url":"static/js/5.49e21306.chunk.js"},{"revision":"fabfd06e7bddf8ee9e28e094b7337f1d","url":"static/js/6.2269dc02.chunk.js"},{"revision":"872c23036f13d6b9b60bd42166dfab89","url":"static/js/7.054f0fe1.chunk.js"},{"revision":"a883dcfee941b8f5cd6bbbd8f1efb228","url":"static/js/8.f7eeb7cc.chunk.js"},{"revision":"a031aeb40d08811ad2bb80b38d83a931","url":"static/js/main.51be5386.chunk.js"},{"revision":"674d6ca228ca11543dc4ef85b4b7d2a6","url":"static/js/runtime-main.041c5b9a.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
