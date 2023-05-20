import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./form.scss";

const Form = ({ inputFields, onGetData }) => {
  const [location, setLocation] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getLocationData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setLocation(res.data);
  };

  useEffect(() => {
    getLocationData();
  }, []);

  function formatDate(date) {
    const validDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[validDate.getMonth()];
    const day = validDate.getDate();
    const year = validDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      const date = formatDate(Date.now());
      const result = { ...data, location, date };
      console.log(result.avatar);
      onGetData(result);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form"
      encType="multipart/form-data"
    >
      {inputFields.map((field) => {
        const InputComponent = field.component;
        return (
          <InputComponent
            key={field.id}
            label={field.label}
            name={field.name}
            register={register}
            pattern={field.pattern || {}}
            required={field.required}
            fullWidth={field.fullWidth}
            error={errors[field.name]}
          />
        );
      })}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <button className="cta infoText">
        Preview
        <span className="arrowIcon" />
      </button>
    </form>
  );
};

export default Form;
