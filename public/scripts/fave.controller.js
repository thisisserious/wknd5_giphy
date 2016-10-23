console.log('fave.controller.js loaded');
angular.module('giphyApp')
       .controller('FaveController', FaveController);

function FaveController() {
  var fave = this;
  console.log('FaveController loaded', fave);
  //
  // main.randomGif = null;
  // main.searchGifs = [];
  // main.search = '';
  //
  // main.randomGifData = function() {
  //     main.randomGif = null;
  //
  //     var promise = giphyapi.randomGifData();
  //     promise.then(function(randomGif) {
  //       main.randomGif = randomGif.fixed_height_downsampled_url;
  //     });
  //
  //   };
  //
  // main.searchGifData = function() {
  //   main.searchGifs = [];
  //
  //   var promise = giphyapi.searchGifData(main.search);
  //   promise.then(function(gifs) {
  //       main.searchGifs = gifs;
  //     });
  // };
}
