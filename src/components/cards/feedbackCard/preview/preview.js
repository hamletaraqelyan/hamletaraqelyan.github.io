import React, { useCallback, useEffect } from "react";
import "./preview.scss";
import CommentItem from "../commentItem/commentItem";
import { ReactComponent as CloseIcon } from "../../../../media/icons/close.svg";

const Preview = ({ show, onClosePopup, data }) => {
  const escFunction = useCallback(
    (event) => {
      event.key === "Escape" && onClosePopup();
    },
    [onClosePopup]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className={`previewPopup ${show ? "show" : ""}`}>
      <div className="previewPopupCloseLayer" onClick={onClosePopup} />
      <div className="previewPopupContent">
        <div className="previewPopupContentCloseIcon" onClick={onClosePopup}>
          <CloseIcon />
        </div>
        <CommentItem data={data} />
      </div>
    </div>
  );
};

export default Preview;
