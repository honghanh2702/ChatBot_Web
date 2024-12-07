import React from "react";
import "./index.css";
import ParticleRing from "../homepages/ParticleRing";
import chatBot from '../../assest/chat_Bot.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWink, faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const SignUpPages = () => {
  const navigate = useNavigate();
  return (
    <div className="background-container">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10,
        }}
      >
        <ParticleRing />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "white",
          textAlign: "center",
          background:
            "radial-gradient(circle at bottom right, rgba(70, 15, 158, 0.8), black 150%)",
          padding: "40px",
          borderRadius: "15px",
          width: 450,
          height: 450,
          zIndex: 100,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Sign Up
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ marginTop: -10 }}>Welcome to ChatAI !</h3>
          <span style={{ marginTop: -8, marginLeft: 12 }}>
          <FontAwesomeIcon icon={faFaceGrinWink} />
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: 10,
          }}
        >
          <label style={{ color: "#b3b3b3", fontSize: "14px" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              width: "400px",
              backgroundColor: "#333",
              color: "white",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label style={{ color: "#b3b3b3", fontSize: "14px" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              width: "400px",
              backgroundColor: "#333",
              color: "white",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>
        <button
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            width: "400px",
            background: " linear-gradient(to bottom right, purple, pink)",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "30px",
            marginLeft: 12,
          }}
        >
          Sign Up
        </button>
        <div style={{ display: "flex", justifyContent: "center",marginTop:5 }}>
          <h3>Already have an account ? </h3>
          <Button
          onClick={()=>navigate("/login")}
            sx={{
              marginTop:1,  
              fontWeight: "bold",
              fontSize: 16,
              "&:hover": {
                backgroundColor: "transparent", 
                boxShadow: "none", 
              },
            }}
          >
            Login
          </Button>
        </div>
      </div>
      <div style={{ width: 300, height: 400 }}>
        <img
          style={{
            width: 400,
            height: 400,
          }}
          src={chatBot}
        />
      </div>
    </div>
  )
};
export default SignUpPages;
