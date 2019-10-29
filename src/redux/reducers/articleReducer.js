import { FETCH_ARTICLES} from "../actionTypes";



export default function(state = {}, action) {
    
  switch (action.type) {
    case FETCH_ARTICLES: {
      
      return { ...state, json: action.json, articleLoading: false };
    }
    
    default:
      return state;
  }
}
