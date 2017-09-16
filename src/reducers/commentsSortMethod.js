import * as constants from '../constants';

const commentsSortMethod = (state = 'voteScore', action) => {
  if (action.type === constants.SET_COMMENTS_SORT_METHOD) return action.commentsSortMethod;
  return state;
};


export default commentsSortMethod;
