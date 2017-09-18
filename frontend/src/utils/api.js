const base = 'http://localhost:5001/';

const myHeaders = new Headers({
  Authorization: 'Lily Mei',
  'Content-Type': 'application/json',
});

export function getCategories() {
  return fetch(`${base}categories`, { headers: myHeaders }).then(res => res.json());
}
export function getAllPosts() {
  return fetch(`${base}posts`, { headers: myHeaders }).then(res => res.json());
}
export function getPosts(category) {
  return fetch(`${base}${category}/posts`, { headers: myHeaders }).then(res => res.json());
}
export function getPost(id) {
  return fetch(`${base}posts/${id}`, { headers: myHeaders }).then(res => res.json());
}
export function getComments(postId) {
  return fetch(`${base}posts/${postId}/comments`, { headers: myHeaders }).then(res => res.json());
}
export function getComment(commentId) {
  return fetch(`${base}comments/${commentId}`, { headers: myHeaders }).then(res => res.json());
}

export function addPost(params) {
  const myInit = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetch(`${base}posts`, myInit).then(res => res.json());
}
export function votePost(postId, params) {
  console.log(params);
  const myInit = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetch(`${base}posts/${postId}`, myInit).then(res => res.json());
}
export function addComment(params) {
  const myInit = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetch(`${base}comments`, myInit).then(res => res.json());
}
export function voteUpComment(commentId, params) {
  console.log(params);
  const myInit = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(params),
  };
  return fetch(`${base}comments/${commentId}`, myInit).then(res => res.json());
}

export function editComment(commentId, params) {
  const myInit = {
    headers: myHeaders,
    method: 'PUT',
    body: JSON.stringify(params),
  };
  return fetch(`${base}comments/${commentId}`, myInit).then(res => res.json());
}
export function editPost(postId, params) {
  const myInit = {
    headers: myHeaders,
    method: 'PUT',
    body: JSON.stringify(params),
  };
  return fetch(`${base}posts/${postId}`, myInit).then(res => res.json());
}
export function deletePost(postId) {
  const myInit = {
    headers: myHeaders,
    method: 'DELETE',
  };
  return fetch(`${base}posts/${postId}`, myInit);
}
export function deleteComment(commentId) {
  const myInit = {
    headers: myHeaders,
    method: 'DELETE',
  };
  return fetch(`${base}comments/${commentId}`, myInit).then(res => res.json());
}
