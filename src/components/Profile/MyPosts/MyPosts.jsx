import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <div className={s.posts}>
        <div>
          <h3>My Posts</h3>
        </div>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddPost}>Add post</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className={s.post}>{postElements}</div>
    </>
  );
};

export default MyPosts;
