import React, { useState } from "react";
import { ReactComponent as ImageUploadIcon } from "../../../../../media/icons/imageUpload.svg";
import { ReactComponent as CloseIcon } from "../../../../../media/icons/close.svg";
import "./fileInput.scss";

const FileInput = ({ label, name, register, required, validate, error }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const fileData = new FormData();
    fileData.append("file", event.target.files[0]);

    const x = fileData.get("file");
    console.log(x);

    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage(null);
  };

  return (
    <div className={`fileInputWrapper ${error?.type ? "error" : ""}`}>
      <input
        hidden
        id={name}
        type="file"
        {...register(name, { required, validate })}
        onChange={handleFileChange}
      />
      <label htmlFor={name}>
        <span>{label}</span>
        {required && <sup className="textCyan">*</sup>}
        <ImageUploadIcon />
      </label>

      {previewImage && (
        <div className="imagePreview">
          <div className="removeImage" onClick={handleRemoveImage}>
            <CloseIcon />
          </div>
          <img src={previewImage} alt="Preview avatar image" />
        </div>
      )}
    </div>
  );
};

export default FileInput;
