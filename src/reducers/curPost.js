import * as constants from '../constants';

const curPost = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_POST:
      return {
        ...action.post,
      };
    case constants.UPDATE_POST:
      return {
        ...state,
        ...action.params,
      };
    case constants.VOTE_POST:
      return {
        ...action.post
      };
    default:
      return state;
  }
};

export default curPost;
