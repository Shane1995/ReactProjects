import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  // When making use of another action make sure you place the await key before the dispatch method. 
  await dispatch(fetchPosts()); 
  // instead of getting every user 10 times. it returns an array with the unqiue users  
  //const userIds = _.uniq(_.map(getState().posts, 'userId'));
  //console.log(userIds)
  //userIds.forEach(id => dispatch(fetchUser(id)));

// The chain function that refactors the code above: Must have the value function attached to the
//end of the chained functions 
  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
  };
} 

//const fetchUser = _.memoize( (id, dispatch) => {
//  const response = await jsonPlaceholder.get(`/users/${id}`);
//  dispatch({ type: "FETCH_USER", payload: response.data });
//});

// Memozie version 
// const _fetchUser = _.memoize(async (id, dispatch) => {
//  const response = await jsonPlaceholder.get(`/users/${id}`);
//  dispatch({ type: "FETCH_USER", payload: response.data });
//});

