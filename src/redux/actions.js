import { ADD_TODO, TOGGLE_TODO, SET_FILTER, FETCH_ARTICLES,API_DONE } from "./actionTypes";


let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';


//my actions
export const requestPosts = () => ({
  type: REQUEST_POSTS,
});
export const receivedPosts = json => ({
  type: API_DONE,
  json: json,
});
export function fetchPosts(channel) {
  return function (dispatch) {
    dispatch(requestPosts());
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
      );
  };
}

//article fetching actions
export const articlesFetched = json => ({
  type: FETCH_ARTICLES,
  json: json,
});



export function fetchArticles() {
  return function (dispatch) {
   // dispatch(requestPosts());
    return fetch('https://www.markwebkitchen.com/seo/test.json')
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


