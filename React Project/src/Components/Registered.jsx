import { useState } from "react";
import "../Styles/Register.css";
import { useForm } from "react-hook-form";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Registered() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState, handleSubmit, getValues } = useForm({
    mode: "all",
  });
  const { errors } = formState;
  const nav = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    toast.success("You are register successfully");
    setTimeout(() => {
      nav("/login");
    }, 600);
    let allFieldValues = getValues();
    let {
      first,
      last,
      imgUrl,
      state,
      street,
      country,
      city,
      zip,
      houseNumber,
      ...remainFields
    } = allFieldValues;
    remainFields.name = { first, last, middle: "" };
    remainFields.image = { url: imgUrl, alt: "" };
    remainFields.address = { state, street, country, city, zip, houseNumber };
    userService.register(remainFields).then((res) => console.log(res));
  };
  console.log("erros", errors);
  return (
    <>
      <div className="register">
        <h1>REGISTER USER</h1>
        <form className="formRegister" onSubmit={handleSubmit && submitHandle}>
          <div className="boxInput">
            <input
              onChange={(e) => handleInputChange(e.target.value, "first")}
              {...register("first", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be atleast 3 characters long",
                },
              })}
              type="text"
              className="input"
              placeholder="First Name *"
            ></input>
            <p>{errors.first?.message}</p>
          </div>
          <div className="boxInput">
            <input
              {...register("last", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name must be atleast 3 characters long",
                },
              })}
              type="text"
              className="input"
              placeholder="Last Name *"
              required="required"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email must be valid",
                },
              })}
              className="input"
              placeholder="Email *"
            ></input>
            <p>{errors.email?.message}</p>
          </div>
          <div className="boxInput">
            <input
              {...register("imgUrl", {})}
              type="url"
              className="input"
              placeholder="Image url"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("state", {})}
              type="text"
              className="input"
              placeholder="State"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("city", {})}
              type="text"
              className="input"
              placeholder="City"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message:
                    "Password Must Contain Atleast 9 Characters, One Uppercase, One Lowercase, One Number and One Special Case Charactor",
                },
              })}
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password *"
            ></input>
            <p>{errors.password?.message}</p>
          </div>
          <div className="boxInput">
            <input
              {...register("houseNumber", {})}
              type="number"
              className="input"
              placeholder="House number"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("phone", {})}
              type="phone"
              className="input"
              placeholder="Phone Number *"
              required="required"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("country", {})}
              type="text"
              className="input"
              placeholder="Country *"
              required="required"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("street", {})}
              type="text"
              className="input"
              placeholder="Street *"
              required="required"
            ></input>
          </div>
          <div className="boxInput">
            <input
              {...register("zip", {})}
              type="number"
              className="input"
              placeholder="Zip *"
              required="required"
            ></input>
          </div>
          <div className="checkbox">
            <input
              {...register("isBusiness", {})}
              type="checkbox"
              className="checkLeft"
            />
            &nbsp; <b style={{ color: "black" }}>Signup as business</b>
            <br></br>
            <input
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
              className="checkRight"
            />
            &nbsp; <b style={{ color: "black" }}>Show Password</b>
            <br></br>
            <br></br>
          </div>
          <>
            <button className="submitReg" type="submit">
              SUBMIT
            </button>
          </>
        </form>
      </div>
    </>
  );
}

export default Registered;
