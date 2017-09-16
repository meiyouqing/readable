import * as constants from '../constants';

const allPosts = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_ALLPOSTS:
      const allPosts = {};
      action.allPosts.forEach((post) => {
        post.id && (allPosts[post.id] = post);
      });
      return {
        ...allPosts,
      };
    case constants.ADD_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          voteScore: 0,
          deleted: false,
        },
      };
    case constants.UPDATE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.params,
        },
      };
    case constants.DELETE_POST:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true,
        },
      };
    case constants.SET_POSTS_SORT_METHOD:
      const sortedPosts = {};
      Object.keys(state).sort((a, b) => (state[b][action.method] - state[a][action.method]))
        .forEach((id) => {
          sortedPosts[id] = state[id];
        });
      return {
        ...sortedPosts,
      };
    case constants.VOTE_POST:
      return {
        ...state,
        [action.id]: action.post,
      };
    default:
      return state;
  }
};

export default allPosts;
