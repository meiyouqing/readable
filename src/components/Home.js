import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

import { getAllPosts, getCategories } from '../actions';
import Postlist from './Postlist';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllPosts();
  }
  render() {
    const { categories, allPosts } = this.props;
    return (
      <div className="g-home">
        <div className="categories-list">
          <h2>CATEGORIES</h2>
          <ul>
            {
              categories.map(category => (
                <li key={category.name}><Link to={`/category/${category.name}`}>{category.name}</Link></li>
              ))
            }
          </ul>
        </div>
        <Postlist posts={allPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts, categories }) => ({
  allPosts: Object.keys(allPosts).map(id => allPosts[id]),
  categories: Object.keys(categories).map(id => categories[id]),
});
const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getCategories: () => dispatch(getCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
