import * as constants from '../constants';

const comments = (state = {}, action) => {
  switch (action.type) {
    case constants.GET_COMMENTS:
      const comments = {};
      action.comments.forEach((comment) => {
        comment.id && (comments[comment.id] = comment);
      });
      return {
        ...comments,
      };
    case constants.ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: {
          ...action.comment,
          voteScore: 0,
          deleted: false,
          parentDeleted: false,
        },
      };
    case constants.DELETE_POST:
      const postComments = {};
      Object.keys(state).forEach((id) => {
        if (state[id].parentId === action.id) {
          postComments[id] = {
            ...state[id],
            parentDeleted: true,
          };
        }
      });
      return {
        ...state,
        ...postComments,
      };

    case constants.DELETE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true,
        },
      };
    case constants.UPDATE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.params,
        },
      };
    case constants.VOTE_UP_COMMENT:
      return {
        ...state,
        [action.id]: action.comment,
      };
    default:
      return state;
  }
};

export default comments;
