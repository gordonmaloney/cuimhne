import React, { useState, useEffect } from "react";
import FBModal from "./FBModal";
import Fab from "@mui/material/Fab";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Drawer from "@mui/material/Drawer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Box from "@mui/material/Box";
import { ChangeLevels } from "./changeLevels";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Fade from "@mui/material/Fade";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header">
        <Fab
          sx={{
            zIndex: 3,
            backgroundColor: "white",
            fontWeight: 600,
            color: "#261420",
          }}
          className="menufab"
          onClick={() => setShow(!show)}
        >
          {!show ? (
            <MenuIcon fontSize="large" style={{ transform: "scale(1.3)" }} />
          ) : (
            <MenuOpenIcon
              fontSize="large"
              style={{ transform: "scale(1.3)" }}
            />
          )}
        </Fab>

        <center>
          <h1 style={{ width: "100%", display: "block", marginLeft: "-40px"}}>🤔 Cuimhne</h1>
        </center>

        <FBModal
          prompt={
            <Fab
              sx={{
                zIndex: 3,
                backgroundColor: "white",
                fontWeight: 600,
                color: "#261420",
                position: "absolute",
                right: "20px",
                top: "20px",
                color: "#261420",
              }}
              className="header-howto"
              onClick={() => setOpen(!open)}
            >
              <QuestionMarkIcon
                fontSize="large"
                style={{ transform: "scale(1.3)" }}
              />
            </Fab>
          }
          title="How to play"
          body={
            <div className="modalBody">
              Like the card game "memory", the goal here is to match pairs - but
              instead of just two of the same words, you're looking for
              translations.
              <br />
              <br />
              The game is intended to be a study aid for people using the Gaelic
              Duolingo course. You can use the menu in the top left corner to
              choose the levels you want to study vocabulary from.
              <br />
              <br />
              If you would like to support this project and the development of
              future Gaelic learning programs, you can make a donation{" "}
              <a target="_blank" href="https://ko-fi.com/gordonmaloney">
                by clicking here
              </a>
              .
            </div>
          }
        />

        <Drawer
          style={{ zIndex: 2 }}
          anchor="left"
          open={show}
          onClose={() => setShow(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#B9CCDA",
            },
          }}
        >
          <Box sx={{ width: 250, padding: 2 }}>
            <br />
            <br />
            <br />
            <h2>Filter vocabulary</h2>
            <p>
              If you're studying with Duolingo, you can filter which lessons
              you'd like to see vocabulary from using the slider below:
            </p>
            <ChangeLevels />
          </Box>
        </Drawer>
      </div>
    </>
  );
};
