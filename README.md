# A news reading project using React.js/redux.js/node.js

## 使用方法 Usage

1) 进入api-server目录，安装依赖包，运行node服务：

   Into the 'api-server' directory, install the packages and run node server:

cd api-server

npm install

node server


2) 进入frontend目录，安装依赖包，运行 npm start：

   Into the 'frontend' directory, install the packages and run npm start:

cd ../frontend

npm install

npm start

## 功能描述 functionality describe

### Posts are listed correctly and have the desired functionality in a list view

Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. Posts should have buttons or links for editing or deleting that post.

The voting mechanism works and correctly displays the new vote score after clicking.

List posts link to the detail page for that post.

All posts are listed at the root.

All posts for a category are listed at /:category

List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.

### The post detail page has desired functionality

Post detail is available at /:category/:post_id

Post is displayed with title, body, author, number of comments, current score and voting mechanism. Post should have buttons or links for editing or deleting that post.

Listed comments are displayed with author, current score, and a voting mechanism to upvote or downvote the comment. Comments should have buttons or links for editing or deleting that comment.

The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

All comments for a post are displayed below the post body.

A mechanism for adding a new comment is visible on the detail page and functional.

### Users can add new posts

Application has a form for creating a new post. Submitting the form properly adds the post to the correct category.

### Users can add comments

Application has a form for adding comments to a post. Submitting the form properly adds the comment to the correct post.

### Users can edit posts/comments

Edit buttons for posts/comments open a form with existing data pre-populated. Submitting the form correctly updates the data for the comment/post.

### Users can delete posts/comments

A mechanism for deleting posts and comments exists. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at it's URL.

### The application is navigable

User is able to navigate between categories, main page and post detail pages without typing address in the address bar.