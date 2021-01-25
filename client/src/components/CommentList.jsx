import React from "react";

function CommentList(props) {
  const commentList = props.comments.filter((comment) => {
    // console.log(comment.id);
    // console.log(comment)
    return comment.fields.feed[0] == props.id;

  });

  // console.log(props.id);

  // console.log(commentList);
  return (
    <div>
      {commentList && props.comments &&
        <>
          {commentList.map((com) => (
            <div className="commentitem">
              <h3>{com.fields.name}</h3>
              <p>{com.fields.comment}</p>
            </div>
          ))}
        </>
      }
    </div>
  );
}

export default CommentList;
