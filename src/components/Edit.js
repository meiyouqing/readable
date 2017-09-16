import React, { Component } from 'react';
import { connect } from 'react-redux'
import uuid4v from 'uuid/v4'
import { updatePost, addPost } from '../actions'

class Edit extends Component {
  state = {
    category: this.props.post? this.props.post.category : 'please select a category',
    title: this.props.post? this.props.post.title : '',
    author: this.props.post? this.props.post.author : '',
    body: this.props.post? this.props.post.body : '',
    catNote: '',
    titNote: '',
    autNote: '',
    bodyNote: '',
  }
  handleChange = e => {
    const ele = e.target;
    this.setState({
      [ele.name]: ele.value,
      [ele.dataset.note]: '',
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { post, addPost, updatePost, history } = this.props;
    const { category, title, author, body } = this.state;
    let flag = false;
    if( category === 'please select a category') {
      this.setState({catNote: 'You must select a cateory'});
      flag = true;
    }
    if( !title.length) {
      this.setState({titNote: 'You must set a title'});
      flag = true;
    }
    if( !author.length) {
      this.setState({autNote: 'You must set a author'});
      flag = true;
    }
    if( !body.length) {
      this.setState({bodyNote: 'You must set a body'});
      flag = true;
    }
    if(!flag){
      if(!post){
        addPost({
          id: uuid4v(),
          timestamp: Date.now(),
          category,
          title,
          body,
          author,
        })
      }else{
        updatePost(post.id, {
          title,
          body,
        })
      }
      history.goBack();
    }
  }
  render() {
    //console.log('Edit rendered')
    const { history } = this.props;
    const { catNote, titNote, autNote, bodyNote, category, title, author, body }  = this.state;
    return (
      <div className="g-edit">
        <div className="g-mask" onClick={history.goBack}></div>
        <div className="edit-wrap">
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="category">CATEGORY:</label>
              <select id="category" defaultValue={ category } data-note="catNote" name="category" onChange={this.handleChange}>
                <option>please select a category</option>
                <option>react</option>
                <option>redux</option>
                <option>udacity</option>
              </select>
            </p>
            <p className={"warning" + (catNote? '' : ' hide')}>{ catNote }</p>
            <p><input type="text" id="title" name="title" data-note="titNote" placeholder="title" onChange={this.handleChange} value={ title } /></p>
            <p className={"warning" + (titNote? '' : ' hide')}>{ titNote }</p>
            <p><input type="text" id="author" name="author" data-note="autNote" placeholder="author" onChange={this.handleChange} value={ author }/></p>
            <p className={"warning" + (autNote? '' : ' hide')}>{ autNote }</p>
            <p><textarea id="body" name="body" data-note="bodyNote" placeholder="body" onChange={this.handleChange} value={ body }></textarea></p>
            <p className={"warning" + (bodyNote? '' : ' hide')}>{ bodyNote }</p>
            <p><button type="submit">submit</button></p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts }, {match}) => { 
  //  console.log(allPosts)
  //  console.log(match)
   return {post: allPosts[match.params.id]}
 }
const mapDispatchToProps = dispatch => ({
  updatePost: (id, params) => dispatch(updatePost(id, params)),
  addPost: params => dispatch(addPost(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
