import { API_DONE} from "../actionTypes";



export default function(state = {}, action) {
  switch (action.type) {
    case API_DONE: {
      console.log(action)
      return { ...state, json: action.json, loading: false };
    }
    
    default:
      return state;
  }
}
