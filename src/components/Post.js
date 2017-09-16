import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import { votePost, voteUpComment, getComments, getPost, deleteComment, updateComment, deletePost, setCommentsSortMethod, addComment } from '../actions'

class Post extends Component {
  state = { edit: '', comTextValue: '', addComment: false, author: '' }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id)
    this.props.getComments(id)
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleEdit = comment => {
    this.setState({
      edit: comment.id,
      comTextValue: comment.body,
    })
  }
  handleSubmit = id => {
    this.props.updateComment(id, {
      timestamp: Date.now(),
      body: this.state.comTextValue,
    })
    this.setState({ edit: '', comTextValue:'' })
  }
  handleSubmit2 = () => {
    const { author, comTextValue } = this.state;
    if(!author || !comTextValue) return;
    this.props.addComment({
      id: uuidv4(),
      timestamp: Date.now(),
      body: comTextValue,
      author: author,
      parentId: this.props.match.params.id,
    })
    this.setState({ addComment: false, comTextValue:'' })
  }
  render() {
    const { post, comments, history, commentsSortMethod, vote, voteUpComment, updateComment, deleteComment, deletePost, setCommentsSortMethod } = this.props;

    if (!post) return <div></div>

    return (
      <div className="g-post">
        <h2 className="g-nav">
          <span>category/{post.category}</span>
          <a href="javscript:void(0)" onClick={history.goBack} className="go-back">&lt; back</a>
        </h2>
        <h1>{post.title}</h1>
        <div className="post-info">
          <span className="author">{post.author}</span>
          <span className="time">{new Date(post.timestamp).toLocaleDateString()}</span>
          <span className="vote-score">
            <i className="up-vote" onClick={() => { vote(post.id, 'upVote') } }></i>
            <i className="down-vote" onClick={() => { vote(post.id, 'downVote') } }></i>
            {post.voteScore}
          </span>
          <Link to={`/edit/${post.id}`} className="comment-edit f-pointer"><img alt="readable" src="/icons/edit.svg" /></Link>
          <span className="comment-delete f-pointer" onClick={() => { deletePost(post.id);history.goBack() } }><img alt="readable" src="/icons/delete.svg" /></span>
        </div>
        <div className="post-content">
          {post.body}
        </div>
        <div className="post-comments">
          <h2>COMMENTS</h2>
          <p>
            <span className={"sort-post " + commentsSortMethod}>
              sort by:
              <b className="sort-vote" onClick={setCommentsSortMethod.bind(null, 'voteScore')}>vote</b>
              <b className="sort-time" onClick={setCommentsSortMethod.bind(null, 'timestamp')}>time</b>
            </span>
            <span className="total-comments">total: { comments.length } comments</span>
            <a href="javascript:void(0)" className="create-link" onClick={() => {this.setState({addComment: true})}}>Create a new comment</a>
          </p>
          {
            this.state.addComment && (
              <p className="create-comment">
                <input type="text" name="author" value={this.state.author} onChange={this.handleInput} placeholder="author" />
                <textarea type="text" name="comTextValue" value={this.state.comTextValue} onChange={this.handleInput} placeholder="comment content here" ></textarea>
                <button onClick={() => { this.handleSubmit2() } }>submit</button>
              </p>
            )
          }
          {
            comments.filter(comment => !comment.deleted)
              .sort((a, b) => (b[commentsSortMethod] - a[commentsSortMethod]))
              .map(comment => (
                <dl key={comment.id}>
                  <dt>
                    <span className="comment-author">{comment.author}</span>
                    <span onClick={() => { this.handleEdit(comment) } } className="comment-edit f-pointer"><img alt="readable" src="/icons/edit.svg" /></span>
                    <span onClick={() => { deleteComment(comment.id) } } className="comment-delete f-pointer"><img alt="readable" src="/icons/delete.svg" /></span>
                    <span className="vote-score">
                      <i className="up-vote" onClick={() => { voteUpComment(comment.id, 'upVote') } }></i>
                      <i className="down-vote" onClick={() => { voteUpComment(comment.id, 'downVote') } }></i>
                      {comment.voteScore}
                    </span>
                </dt>
                  <dd>
                    {
                      this.state.edit === comment.id
                        ? (
                          <p>
                            <textarea type="text" name="comTextValue" value={this.state.comTextValue} onChange={this.handleInput} ></textarea>
                            <button onClick={() => { this.handleSubmit(comment.id) } }>submit</button>
                          </p>
                        )
                        : <p>{comment.body}</p>
                    }
                  </dd>
                </dl>
              ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ curPost, comments, commentsSortMethod }) => ({
  post: curPost,
  comments: Object.keys(comments)
    .map(id => comments[id]),
  commentsSortMethod,
})
const mapDispatchToProps = (dispatch) => ({
  vote: (id, option) => dispatch(votePost(id, option)),
  voteUpComment: (id, option) => dispatch(voteUpComment(id, option)),
  getPost: id => dispatch(getPost(id)),
  getComments: id => dispatch(getComments(id)),
  updateComment: (id, params) => dispatch(updateComment(id, params)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  deletePost: (id) => dispatch(deletePost(id)),
  setCommentsSortMethod: method => dispatch(setCommentsSortMethod(method)),
  addComment: params => dispatch(addComment(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
