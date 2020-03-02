import {  FETCH_ARTICLES } from "./actionTypes";
//import mongo from "./atlasmongo";

const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');


const client = Stitch.initializeDefaultAppClient('saljidaljeserver-krkzo');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-saljidalje').db('saljidalje');

//article fetching actions
export const articlesFetched = json => ({
  type: FETCH_ARTICLES,
  json: json,
});


//funnc called from  POpisRobe to get all items from external api
export function fetchArticles() {

  return function (dispatch) {
/*
     return fetch('https://picsum.photos/v2/list')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(articlesFetched(json));
      },
      );
      */
   
    return fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/saljidaljeserver-krkzo/service/api/incoming_webhook/fetchAll')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        console.log(json,"aaaaaa")
        dispatch(articlesFetched(json));
      },
      );
      
  };
}










