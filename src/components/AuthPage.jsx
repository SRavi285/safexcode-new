import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Logo from "../assets/logo-color.png"; 
import bgImage from "../assets/background.jpg";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate(); 

  const handleClick = () => {
    if (activeTab === "register") {
      setActiveTab("login");
    } else {
      setActiveTab("register");
    }
  };

  const sendOtp = () => {
    setOtpSent(true);
  };

  const resendOtp = () => {
    setOtpSent(false);
    setOtpSent(true);
  };
  

  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}>
      <div className="flex justify-end p-4 ">
        <button
          onClick={handleClick}
          className="p-2 text-white bg-blue-500 rounded-md"
        >
          {activeTab === "login" ? "Register" : "Login"}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md border border-white/30">

          <div className="text-center items-center justify-center mb-8 text-blue-600"> 
            {/* <img src={Logo} alt="logo" /> */}
            <h1 className="text-7xl">safe<span className="text-black">X</span>code</h1>
            <p>Secure Communication Seamless Connection</p>
          </div>
          {activeTab === "login" ? (
            <div className="flex flex-col items-center justify-center">
              {!otpSent && (
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full p-2 mb-3 border rounded-md"
                />
              )}

              {otpSent ? (
                <div className="w-full flex flex-col items-center">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full p-2 mb-3 border rounded-md"
                  />
                  <div className="flex justify-end mb-4 text-sm w-full">
                    <button onClick={resendOtp} className="text-blue-500">
                      Resend OTP?
                    </button>
                  </div>
                  <div className="flex justify-between w-full">
                    <button
                      className="px-8 py-2 text-white bg-red-500 rounded-md"
                      onClick={() => navigate(-1)} 
                    >
                      Back
                    </button>
                    <button
                      className="px-8 py-2 text-white bg-blue-500 rounded-md"
                      onClick={() => alert("Login")}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <button
                    onClick={sendOtp}
                    className="px-8 py-2 text-white bg-blue-500 rounded-md w-full"
                  >
                    Send OTP
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full p-2 mb-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border rounded-md"
              />
              <label className="flex items-center mb-4 text-sm">
                <input type="checkbox" className="mr-2" />
                I agree to the terms & conditions
              </label>
              <button
                onClick={() => alert("register")}
                className="w-full p-2 text-white bg-blue-500 rounded-md"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
