import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Postlist from './Postlist';

class Category extends Component {
  render() {
    const { posts, match } = this.props;
    return (
      <div className="g-category">
        <h2 className="g-nav"><span>category/{match.params.id}</span><Link to="/" className="go-back">&lt; back</Link></h2>
        <Postlist posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts }, props) => ({
  posts: Object.keys(allPosts)
    .filter(id => allPosts[id].category === props.match.params.id)
    .map(id => allPosts[id]),
});

export default connect(mapStateToProps)(Category);
