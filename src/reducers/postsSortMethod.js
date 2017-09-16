import * as constants from '../constants';

const postsSortMethod = (state = 'voteScore', action) => {
  if (action.type === constants.SET_POSTS_SORT_METHOD) return action.postsSortMethod;
  return state;
};


export default postsSortMethod;
