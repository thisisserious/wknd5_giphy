console.log('fave.service.js loaded');

angular.module('giphyApp')
       .service('favorites', FavoritesService)

function FavoritesService($http) {
  console.log('inside FavoritesService, this:', this);
  this.favoritesData = function () {
    return $http.get('/gifs', config)
  }.then(function (response) {
    console.log('favoritesData response', response);
    return response;
  });
  // var API = 'http://api.giphy.com/v1/gifs/';
  // var key = 'dc6zaTOxFJmzC';
  //
  // this.randomGifData = function () {
  //   return $http.get(API + 'random', {
  //     params: {
  //       api_key: key
  //     }
  //   })
  //     .then(function (response) {
  //       console.log('randomGifData response', response);
  //       return response.data.data;
  //     });
  // };
  //
  // this.searchGifData = function (search) {
  //   console.log('this:', this);
  //     var q = search.replace(' ', '+');
  //     return $http.get(API + 'search', {
  //       params: {
  //         q: q,
  //         api_key: key
  //       }
  //     }).then(function (response) {
  //         return response.data.data;
  //       });
  //   };
}
