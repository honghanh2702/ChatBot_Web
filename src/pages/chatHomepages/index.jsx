import "./index.css";
import {
  faEllipsis,
  faList,
  faMagnifyingGlass,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import ImgaeAI from "../../assest/images.jpg";
import React from "react";
import { Button } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

const ChatHomePages = () => {
  const [isOpenSlideBar, setIsOpenSlideBar] = React.useState(true);
  const handleOpenSlideBar = () => {
    setIsOpenSlideBar(!isOpenSlideBar);
  };
  return (
    <div
      style={{
        display: "flex",
        background:
          "radial-gradient(circle at bottom right, rgba(80, 19, 156, 0.9), black 80%)",
        height: "100vh",
      }}
    >
      {/* SlideBar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpenSlideBar ? "0" : "-300px",
          width: isOpenSlideBar ? "20%" : "250px",
          height: "100vh",
          backgroundColor: "#202123",
          color: "white",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
          transition: "left 0.4s ease-in-out",
          zIndex: 999,
        }}
      >
        <div>
          <div className="icon-group">
            <Button onClick={handleOpenSlideBar}>
              <FontAwesomeIcon className="icon" icon={faList} />
            </Button>

            <div className="search-icon">
              <FontAwesomeIcon className="icon" icon={faPenToSquare} />
            </div>
          </div>
          <div style={{ height: 100 }}>
            <div className="content-feature">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ width: 35, height: 35, borderRadius: "50%" }}
                  src={ImgaeAI}
                  alt="Image AI"
                />
                <span
                  style={{
                    color: "white",
                    marginLeft: 12,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Image AI
                </span>
              </div>
              <FontAwesomeIcon
                style={{ color: "white", width: 24, height: 24 }}
                icon={faEllipsis}
              />
            </div>
          </div>
          <div>
            <div style={{ height: "auto", marginTop: 12 }}>
              <span
                style={{ color: "white", fontWeight: "bold", marginLeft: 12 }}
              >
                Today
              </span>
              <div>
                <div className="content-today">
                  <span
                    style={{ color: "white", fontSize: 17, marginLeft: 12 }}
                  >
                    Cai thien hieu suat
                  </span>

                  <FontAwesomeIcon
                    style={{ color: "white", width: 24, height: 24 }}
                    icon={faEllipsis}
                  />
                </div>
              </div>
            </div>
            <div style={{ height: "auto", marginTop: 24 }}>
              <span
                style={{ color: "white", fontWeight: "bold", marginLeft: 12 }}
              >
                Yesterday
              </span>
              <div>
                <div className="content-today">
                  <div>
                    <span
                      style={{ color: "white", fontSize: 17, marginLeft: 12 }}
                    >
                      Cai thien hieu suat
                    </span>
                  </div>
                  <FontAwesomeIcon
                    style={{ color: "white", width: 24, height: 24 }}
                    icon={faEllipsis}
                  />
                </div>
              </div>
            </div>
            <div style={{ height: "auto", marginTop: 24 }}>
              <span
                style={{ color: "white", fontWeight: "bold", marginLeft: 12 }}
              >
                Perivos 7 Days
              </span>
              <div>
                <div className="content-today">
                  <div>
                    <span
                      style={{ color: "white", fontSize: 17, marginLeft: 12 }}
                    >
                      Cai thien hieu suat
                    </span>
                  </div>
                  <FontAwesomeIcon
                    style={{ color: "white", width: 24, height: 24 }}
                    icon={faEllipsis}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chat box */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpenSlideBar ? "0px" : "0",
          width: isOpenSlideBar ? "80%" : "100%",
          height: "100vh",

          color: "white",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
          transition: "right 0.4s ease-in-out",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 16,
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              marginTop: 12,
            }}
          >
            {isOpenSlideBar ? (
              <></>
            ) : (
              <div className="icon-group">
                <Button onClick={handleOpenSlideBar}>
                  <FontAwesomeIcon className="icon" icon={faList} />
                </Button>

                <div className="search-icon">
                  <FontAwesomeIcon className="icon" icon={faPenToSquare} />
                </div>
              </div>
            )}

            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                marginLeft: 12,
              }}
            >
              CHAT AI
            </span>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                style={{
                  color: "white",
                  borderRadius: 20,
                  fontSize: 15,
                  borderColor: "rgba(255, 255, 255, 0.5)",
                  background: "linear-gradient(to bottom right, purple, pink)",
                  marginRight: 20,
                }}
                variant="outlined"
              >
                <FontAwesomeIcon
                  style={{ marginRight: 8 }}
                  icon={faShareNodes}
                />
                Share
              </Button>

              <div
                style={{
                  borderRadius: "100%",
                  border: "1px solid black",
                  backgroundColor: "red",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  marginRight: 12,
                }}
              >
                N
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              marginTop: 20,
              overflowY: "auto",
              padding: 12,
              borderRadius: 8,
            }}
          >
            <div
              style={{
                marginBottom: 10,
                padding: 12,
                backgroundColor: "#3b5998",
                borderRadius: 8,
                width: 500,
                maxWidth: 700,
                color: "white",
                justifySelf: "end",
              }}
            >
              Đây là tin nhắn từ người dùng.
            </div>
            <div
              style={{
                marginBottom: 10,
                width: 500,
                maxWidth: 700,
                padding: 12,
                backgroundColor: "#444",
                borderRadius: 8,
                color: "white",
              }}
            >
              Đây là tin nhắn từ hệ thống.
            </div>
          </div>

          {/* Input Field */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid white",
              padding: "10px 10px",
              width: "100%",
              margin: "0 auto",
              borderRadius: 10,
              height: 60,
            }}
          >
            {/* Left Icons */}
            <FontAwesomeIcon
              icon={faPaperclip}
              style={{
                fontSize: "18px",
                color: "#888",
                marginRight: "15px",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faGlobe}
              style={{
                fontSize: "18px",
                color: "#888",
                marginRight: "15px",
                cursor: "pointer",
              }}
            />

            {/* Input */}
            <input
              type="text"
              placeholder="Message ChatAI"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: "18px",
                color: "white",
              }}
            />

            <div
              style={{
                background: " linear-gradient(to bottom right, purple, pink)",
                borderRadius: "100%",
                width: 40,
                height: 40,
                alignContent: "center",
                justifyContent: "center",
                marginRight: 30,
                marginTop: 5,
                zIndex: 10,
              }}
            >
              <Button>
                <FontAwesomeIcon
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginRight: 25,
                  }}
                  icon={faPaperPlane}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatHomePages;
