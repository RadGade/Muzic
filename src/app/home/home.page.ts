import { Component } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  spotifyApi = new SpotifyWebApi;

  constructor() {}
}
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQBg0CmObGlwwN2t6ayHEQbSk-Vem3WO6GDMnufj-oCrRHTMeb-0bnJKLAMQe6zFBZHW63pEAmzOtw_NVFGF_AnkhxWD5WYeVn_O35h8-d4Xy_KwgyhtbFz8ssQw3mNfiJwPAswR88wdZKP_Ysdmo6KpjkQ5IhSzr4KSE13cHTMKRLyR-zZlEYkd2q0sj2vNq2U4TTo_htaV5AENA4FyDk6Ql6RJMIePdl8ocNL_O_vxp0rj6_Va6XjLPPRsH5jw1MH7lRkJWIA0i02cHgIw77FSX4shKMCbit4');

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', ' https://api.deezer.com/chart');
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData[0]);
};
ourRequest.send()










  var prev = null;

function onUserInput(queryTerm) {

  // abort previous request, if any
  if (prev !== null) {
    prev.abort();
  }

  // store the current promise in case we need to abort it
  prev = spotifyApi.searchTracks(queryTerm, {limit: 5});
  prev.then(function(data) {

    // clean the promise so it doesn't call abort
    prev = null;

    // ...render list of search results...

  }, function(err) {
    console.error(err);
  });
}