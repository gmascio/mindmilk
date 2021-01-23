import React from "react";

function CommentList(props) {
  const commentList = props.comments.filter((comment) => {
    console.log(comment.id);
    return comment.fields.feed[0] === props.id;
  });

  console.log(props.id);

  console.log(commentList);
  return (
    <div>
      {commentList.map((com) => (
        <div className= "commentitem">
          <p>{com.fields.comment}</p>
          </div>
      ))}
    </div>
  );
}

export default CommentList;
