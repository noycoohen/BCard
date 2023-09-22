import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = ({ userType }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (userType === `guest`) {
      nav(-1);
    } else {
      localStorage.removeItem("token");
      toast.success("You log out successfully");
      setTimeout(() => {
        nav("/");
        window.location.reload();
      }, 600);
    }
  }, [userType]);
};

export default Logout;
