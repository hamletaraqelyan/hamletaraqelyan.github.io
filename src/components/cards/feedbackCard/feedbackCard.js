import React, { useEffect, useState } from "react";
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import Form from "./form/form";
import Preview from "./preview/preview";
import Input from "./form/input/input";
import Textarea from "./form/textarea/textarea";
import FileInput from "./form/fileInput/fileInput";

const FeedbackCard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [previewData, setPreviewData] = useState({});

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleGetData = (data) => {
    setPreviewData(data);
    handleTogglePopup();
  };

  const inputs = [
    {
      id: 0,
      label: "First Name",
      name: "firstname",
      required: true,
      component: Input,
    },
    {
      id: 1,
      label: "Last Name",
      name: "lastname",
      required: true,
      component: Input,
    },
    {
      id: 2,
      label: "E-mail",
      name: "email",
      required: true,
      fullWidth: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
      component: Input,
    },
    {
      id: 3,
      label: "Upload photo",
      name: "avatar",
      required: false,
      type: "file",
      validate: {
        fileSize: (value) => value[0].size <= 1024 * 1024, // Max file size is 1MB
        fileType: (value) => {
          const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
          return allowedTypes.includes(value[0].type);
        },
      },
      component: FileInput,
    },
    {
      id: 4,
      label: "Write a comment...",
      name: "comment",
      required: true,
      type: "textarea",
      component: Textarea,
    },
  ];

  return (
    <>
      <div className="card">
        <AnimatedNumbers text={"05"} image={"/media/forest.webp"} />
        <div className="info">
          <p className="infoLabel textCyan textUppercase">Leave your comment</p>
          <h2 className="infoTitle textUppercase fontPlayfair">Feedback</h2>
          <div className="horizontalLine mobileCenter" />
          <Form inputFields={inputs} onGetData={handleGetData} />
        </div>
      </div>
      <Preview
        data={previewData}
        show={showPopup}
        onClosePopup={handleTogglePopup}
      />
    </>
  );
};

export default FeedbackCard;
