import React, { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import { Button, SnackbarContent } from "@mui/material";
import {useWords} from './useWords'

import { useSelector } from "react-redux";

export const Memory = () => {

  const levels = useSelector(state => state.levels)
  console.log("levels, ", levels)

  //import array from useWords
  const ImportedWords = useWords();
  const ImportedArray = useMemo(() => ImportedWords, [ImportedWords.length, levels]);


  const [selectL1, setSelectL1] = useState("");
  const [selectL2, setSelectL2] = useState("");

  const [show, setShow] = useState([]);
  const [correct, setCorrect] = useState([]);

  const [clickable, setClickable] = useState(true);

  const [win, setWin] = useState(false);

  //snackbar states
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();

  const handleCorrect = () => {
    setTimeout(function () {
      message != "Ceart!" && setMessage("Ceart!");
      !open && setOpen(true);
    }, 10);
  };

  const handleIncorrect = () => {
    setTimeout(function () {
      message != "Feuch a-rithist..." && setMessage("Feuch a-rithist...");
      !open && setOpen(true);
    }, 10);
  };

  if (selectL1 && selectL2) {
    clickable == true && setClickable(false);

    let selectQ = ImportedArray.filter((word) => word.Q == selectL1)[0];

    if (selectQ && selectL2 == selectQ.A) {
      //handle correct
      !correct.includes(selectL1) && correct.push(selectL1);
      !correct.includes(selectL2) && correct.push(selectL2);

      console.log("Correct!");
      handleCorrect();
    } else {
      //handle incorrect
      handleIncorrect();
      console.log("Incorrect!");
    }

    setTimeout(function () {
      if (correct.length == ImportedArray.length) {
        //handle win
        setWin(true);
        console.log("You win!");
      }
    }, 50);

    setTimeout(function () {
      setSelectL1("");
      setSelectL2("");
      setShow([]);
      setClickable(true);
    }, 800);
  }

  const selectCard = (wordId) => {
    !selectL1 ? setSelectL1(wordId) : setSelectL2(wordId);

    show.push(wordId);
  };

  //snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="memory-game-wrapper">
      {win && (
        <center>
          <h1>Bhuannaich thu! Meal do naidheachd!</h1>
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#b9ccda",
              "&:hover": {
                backgroundColor: "#8699a7",
              },
            }}
            onClick={() => window.location.reload()}
          >
            Feuch a-rithist
          </Button>
          <br />
          <br />
          <br />
        </center>
      )}

      <div
        className="CardsContainer"
        style={{ pointerEvents: !clickable && "none" }}
      >
        <Grid container spacing={1}>
          {ImportedArray?.map((word) => {
            return (
              <Grid item xs={4} sm={3} md={2}>
                <div
                  className={
                    show.includes(word.Q) || correct.includes(word.Q)
                      ? "card flip"
                      : "card"
                  }
                  id={word.Q}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: "140px",
                    maxHeight: "20vw",
                    margin: "5px",
                  }}
                  onClick={() =>
                    !correct.includes(word.Q) &&
                    !show.includes(word.Q) &&
                    selectCard(word.Q)
                  }
                >
                  <div className="card-face back-face" />

                  <div
                    className="card-face front-face"
                    style={{
                      borderRadius: "5px",
                      border: "5px solid rgb(185, 204, 218)",
                      boxSizing: "border-box",
                      backgroundColor: 
                      
                      correct.includes(word.Q)
                        ? "white"
                        : word.front == "L1" ?
                          "rgba(208, 231, 247, 0.76)"
                        : "rgb(185, 204, 218)"
                    }}
                  >
                    <center>
                    <h5 style={{ userSelect: "none" }}>{word.Q}</h5>
                    </center>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <SnackbarContent
          style={{
            backgroundColor: message == "Ceart!" ? "green" : "grey",
          }}
          message={
            <span id="client-snackbar">
              <center>{message}</center>
            </span>
          }
        />
      </Snackbar>
    </div>
  );
};
