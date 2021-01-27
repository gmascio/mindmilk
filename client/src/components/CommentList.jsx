import { LikeButton, Provider } from "@lyket/react";
import React from "react";

function CommentList(props) {
  const commentList = props.comments.filter((comment) => {
  
    return comment.fields.feed[0] === props.id;

  });
  if (!commentList) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    )
  }
  

  console.log(props.id);

  console.log(commentList);
  return (
    <div className="commentContainer">
      {commentList && props.comments &&
        <>
          {commentList.map((com) => (
            <div className="commentitem">
              <h3>{com.fields.name}</h3>
              <p>{com.fields.comment}</p>
              <div className="like">
              <Provider apiKey="399b32917e64940844091fa308648b">
              <LikeButton id="likeme" component={LikeButton.templates.Twitter} namespace="post"/>
              
                </Provider>
                </div>
            </div>
          ))}
        </>
      }
    </div>
  );
}

export default CommentList;