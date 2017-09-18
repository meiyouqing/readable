import { combineReducers } from 'redux';
import allPosts from './posts';
import curPost from './curPost';
import comments from './comments';
import categories from './categories';
import postsSortMethod from './postsSortMethod';
import commentsSortMethod from './commentsSortMethod';

export default combineReducers({ allPosts, curPost, comments, categories, postsSortMethod, commentsSortMethod });
