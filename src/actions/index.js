import * as constants from '../constants';
import * as api from '../utils/api';

export const setPostsSortMethod = postsSortMethod => ({
  type: constants.SET_POSTS_SORT_METHOD,
  postsSortMethod,
});
export const setCommentsSortMethod = commentsSortMethod => ({
  type: constants.SET_COMMENTS_SORT_METHOD,
  commentsSortMethod,
});
export const getAllPosts = () => (dispatch) => {
  api.getAllPosts()
    .then(allPosts => dispatch({
      type: constants.GET_ALLPOSTS,
      allPosts,
    }));
};
export const getPosts = category => (dispatch) => {
  api.getPosts(category)
    .then(posts => dispatch({
      type: constants.GET_POSTS,
      posts,
    }));
};
export const getPost = id => (dispatch) => {
  api.getPost(id)
    .then(post => dispatch({
      type: constants.GET_POST,
      post,
    }));
};
export const getComments = id => (dispatch) => {
  api.getComments(id)
    .then(comments => dispatch({
      type: constants.GET_COMMENTS,
      comments,
    }));
};
export const getComment = id => (dispatch) => {
  api.getComment(id)
    .then(comment => dispatch({
      type: constants.GET_COMMENT,
      comment,
    }));
};
export const getCategories = () => (dispatch) => {
  api.getCategories()
    .then(({ categories }) => dispatch({
      type: constants.GET_CATEGORIES,
      categories,
    }));
};
export const addPost = post => (dispatch) => {
  api.addPost(post)
    .then(() => {
      dispatch({
        type: constants.ADD_POST,
        post,
      });
    });
};
export const addComment = comment => (dispatch) => {
  api.addComment(comment)
    .then(() => {
      dispatch({
        type: constants.ADD_COMMENT,
        comment,
      });
    });
};
export const updatePost = (id, params) => (dispatch) => {
  api.editPost(id, params)
    .then(() => {
      dispatch({
        type: constants.UPDATE_POST,
        id,
        params,
      });
    });
};
export const updateComment = (id, params) => (dispatch) => {
  console.log(id, params);
  api.editComment(id, params)
    .then(() => {
      dispatch({
        type: constants.UPDATE_COMMENT,
        id,
        params,
      });
    });
};
export const deletePost = id => (dispatch) => {
  api.deletePost(id)
    .then(() => {
      dispatch({
        type: constants.DELETE_POST,
        id,
      });
    });
};
export const deleteComment = id => (dispatch) => {
  api.deleteComment(id)
    .then(() => {
      dispatch({
        type: constants.DELETE_COMMENT,
        id,
      });
    });
};
export const votePost = (id, option) => (dispatch) => {
  api.votePost(id, { option })
    .then((post) => {
      dispatch({
        type: constants.VOTE_POST,
        id,
        post,
      });
    });
};
export const voteUpComment = (id, option) => (dispatch) => {
  api.voteUpComment(id, { option })
    .then((comment) => {
      dispatch({
        type: constants.VOTE_UP_COMMENT,
        id,
        comment,
      });
    });
};
