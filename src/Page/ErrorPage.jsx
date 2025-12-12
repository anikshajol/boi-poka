import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigation = useNavigate();
  const handleBackHome = () => {
    navigation(-1);
  };
  return (
    <div className="text-center flex-col gap-4 text-[#23be0a] text-4xl font-bold flex justify-center items-center h-screen ">
      <h2>Page Not Found</h2>
      <button onClick={handleBackHome} className="btn border-[#23be0a]">
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
