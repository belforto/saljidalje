import {  FETCH_ARTICLES } from "./actionTypes";




//article fetching actions
export const articlesFetched = json => ({
  type: FETCH_ARTICLES,
  json: json,
});


//funnc called from  POpisRobe to get all items from external api
export function fetchArticles() {
  return function (dispatch) {
   // dispatch(requestPosts());
    return fetch('https://picsum.photos/v2/list')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(articlesFetched(json));
      },
      );
  };
}


