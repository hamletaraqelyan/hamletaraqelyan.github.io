import React, { useEffect, useState } from "react";
import AnimatedNumbers from "../../animatedNumbers/AnimatedNumbers";
import Form from "./form/form";
import Preview from "./preview/preview";
import Input from "./form/input/input";
import Textarea from "./form/textarea/textarea";
import FileInput from "./form/fileInput/fileInput";

const REDIRECT_URI = "https://hamletaraqelyan.github.io";
const CLIENT_ID = "78qavtfz3z3963";
const CLIENT_SECRET = "Hg80oh2A0BX9r2so";
const URL_ENCODE = "https%3A%2F%2Fhamletaraqelyan.github.io";
const AUTH_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=state&scope=r_liteprofile&client_id=78qavtfz3z3963&redirect_uri=https%3A%2F%2Fhamletaraqelyan.github.io`;
const CODE =
  "AQS8mVcW0iejTBzn0r6R0rk2u-Vas72wo1KLMgo4bxFfMy9ObQgOp1V2lFFNTgV9RoRKYf2xlsYxra1cb9-x2MJL6ksHmgTxv5XJQ8fFtydPBMpj2Z8EIxitxXgLdDGDGraWfRugzcxO5bcJpka_xClm_3-zUa8boScDEJfukdwvEP0sdUrIhOMrLEpFPJw2D6PwKZiTToRg_8k2R78";

const ACCESS_TOKEN =
  "AQWiDoKdcpoZCn6TUy0Qqmr0I4AfL20VBx_-jNAJRxDP4N-BA6tnlLYP-w46ywtdtZAX0ZefLZAyNOmQMxOCXJNfl-AI-ojm9I5wrQUzaMhe5sRZUuKr4zi6Ldb_dVvhQEb8s8Bfv2y1Ik1rx20_0zmkBfCYI1WESnm9ZfZV7YouMqvCwirW1Y5ew9uGlngVbLKHaNlYqLGAFW9jX6d6cjs_awiQaR5aPIW39x8penJUZ13BeloIbnPfbMLauFThASKoDouqjwy0vgRE1LzOAIzqQxx0LYza8j_02G3K-OKmg9qBdg4DMGDxndBCzh6RdQETsPx6vb_Ix-mac5lXQn_ZmaGZXQ";

`curl https://api.linkedin.com/v2/me -H "Authorization: Bearer AQWiDoKdcpoZCn6TUy0Qqmr0I4AfL20VBx_-jNAJRxDP4N-BA6tnlLYP-w46ywtdtZAX0ZefLZAyNOmQMxOCXJNfl-AI-ojm9I5wrQUzaMhe5sRZUuKr4zi6Ldb_dVvhQEb8s8Bfv2y1Ik1rx20_0zmkBfCYI1WESnm9ZfZV7YouMqvCwirW1Y5ew9uGlngVbLKHaNlYqLGAFW9jX6d6cjs_awiQaR5aPIW39x8penJUZ13BeloIbnPfbMLauFThASKoDouqjwy0vgRE1LzOAIzqQxx0LYza8j_02G3K-OKmg9qBdg4DMGDxndBCzh6RdQETsPx6vb_Ix-mac5lXQn_ZmaGZXQ"`;

const response = {
  localizedLastName: "Arakelyan",
  profilePicture: {
    displayImage: "urn:li:digitalmediaAsset:C4D03AQHEOR5DLKYA2Q",
  },
  firstName: {
    localized: { en_US: "Hamlet" },
    preferredLocale: { country: "US", language: "en" },
  },
  lastName: {
    localized: { en_US: "Arakelyan" },
    preferredLocale: { country: "US", language: "en" },
  },
  id: "w8M1ocmuh_",
  localizedFirstName: "Hamlet",
};

const x = {
  access_token:
    "AQWiDoKdcpoZCn6TUy0Qqmr0I4AfL20VBx_-jNAJRxDP4N-BA6tnlLYP-w46ywtdtZAX0ZefLZAyNOmQMxOCXJNfl-AI-ojm9I5wrQUzaMhe5sRZUuKr4zi6Ldb_dVvhQEb8s8Bfv2y1Ik1rx20_0zmkBfCYI1WESnm9ZfZV7YouMqvCwirW1Y5ew9uGlngVbLKHaNlYqLGAFW9jX6d6cjs_awiQaR5aPIW39x8penJUZ13BeloIbnPfbMLauFThASKoDouqjwy0vgRE1LzOAIzqQxx0LYza8j_02G3K-OKmg9qBdg4DMGDxndBCzh6RdQETsPx6vb_Ix-mac5lXQn_ZmaGZXQ",
  expires_in: 5183999,
  scope: "r_liteprofile",
};
("`curl -ik -X POST https://www.linkedin.com/oauth/v2/accessToken \
   -d grant_type=authorization_code \
   -d code=AQS8mVcW0iejTBzn0r6R0rk2u-Vas72wo1KLMgo4bxFfMy9ObQgOp1V2lFFNTgV9RoRKYf2xlsYxra1cb9-x2MJL6ksHmgTxv5XJQ8fFtydPBMpj2Z8EIxitxXgLdDGDGraWfRugzcxO5bcJpka_xClm_3-zUa8boScDEJfukdwvEP0sdUrIhOMrLEpFPJw2D6PwKZiTToRg_8k2R78 \
   -d redirect_uri=https%3A%2F%2Fhamletaraqelyan.github.io \
   -d client_id=78qavtfz3z3963 \
   -d client_secret=Hg80oh2A0BX9r2so`");

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

  const displayImageUrl = `https://media.licdn.com/dms/image/urn:li:digitalmediaAsset:C4D03AQHEOR5DLKYA2Q`;

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
