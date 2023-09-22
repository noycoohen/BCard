import "../Styles/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { messages } from "../Helpers/messages";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserType } from "../Helpers/functions";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //console.log("erros", errors);

  function submit() {
    postLogin();
  }
  const nav = useNavigate();
  async function postLogin() {
    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;
    const res = await fetch("http://localhost:8181/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const token = await res.text(); //.then((result) => console.log(result));
    localStorage.setItem("token", JSON.stringify(token));

    if (res.ok) {
      props.setuserType(getUserType(token));
      toast.success(messages.login);
      setTimeout(() => {
        nav("/");
      }, 300);
    }
  }

  return (
    <>
      <div className="SignUp">
        <form onSubmit={handleSubmit((dataa) => console.log(dataa))}>
          <h1>LOGIN</h1>
          <div className="inputbox">
            <input id="txtEmail" className="inputlog" required />
            <label htmlFor="">Email</label>
          </div>

          <div className="inputbox">
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message:
                    "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Charactor",
                },
              })}
              id="txtPassword"
              className="inputlog"
              type="password"
            />
            <label htmlFor="">Password</label>
          </div>
          <p className="errorMsg">{errors.password?.message}</p>
          <button
            onClick={handleSubmit && submit}
            className="submit"
            type="submit"
          >
            SUBMIT
          </button>
          <br></br>
          <br></br>
          <span>Do not have an account?</span>
          <a href="./register">Create Account</a>
        </form>
      </div>
    </>
  );
}
