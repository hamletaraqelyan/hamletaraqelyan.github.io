import React from "react";
import "./commentItem.scss";

const CommentItem = ({ data, navigation = false }) => {
  const { comment, firstname, lastname, date } = data;
  return (
    <div className="commentWrapper">
      <p className="commentWrapperText">{comment}</p>
      <div className="commentWrapperAuthor">
        <div className="commentWrapperAuthorInformation">
          <div className="commentWrapperAuthorInformationAvatar" />
          <div className="commentWrapperAuthorInformationName">
            <p className="textCyan textUppercase">
              {firstname} {lastname}
            </p>
            <p className="smallText">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
