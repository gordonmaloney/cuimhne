import React, { useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import { Button, SnackbarContent } from "@mui/material";
import { useWords } from "./useWords";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  border: "2px solid darkgrey",
  height: "auto",
  minHeight: "200px",
  zIndex: 0,
  padding: "0px",
  margin: "0px",
  paddingBottom: "20px",
};

export const Memory = () => {
  const levels = useSelector((state) => state.levels);
  console.log("levels, ", levels);

  const [refresh, setRefresh] = useState(0);

  //import array from useWords
  const ImportedWords = useWords();
  const ImportedArray = useMemo(
    () => ImportedWords,
    [ImportedWords.length, levels, refresh]
  );

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
        setCloseModal(true);
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

  const reset = () => {
    setRefresh(refresh + 1);
    setWin(false);
    setCorrect([]);
  };

  //modal stuff
  const [closeModal, setCloseModal] = useState(false);
  const handleClick = () => {
    handleCloseModal();
  };
  const handleCloseModal = () => {
    setCloseModal(false);
  };

  return (
    <div className="memory-game-wrapper">
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
                      backgroundColor: correct.includes(word.Q)
                        ? "white"
                        : word.front == "L1"
                        ? "rgba(208, 231, 247, 0.76)"
                        : "rgb(185, 204, 218)",
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

      {win && (
        <center>
          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            sx={{
              paddingBottom: "10px",
              textTransform: "none",
              backgroundColor: "#b9ccda",
              "&:hover": {
                backgroundColor: "#8699a7",
              },
            }}
            onClick={() => reset()}
          >
            Play again
          </Button>
        </center>
      )}

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

      <Modal
        open={win && closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleCloseModal}
      >
        <Box sx={style}>
          <div
            style={{
              zIndex: 0,
              padding: "0px",
              margin: "0px",
              marginLeft: "-0.2px",
              marginTop: "-0.5px",
              paddingTop: "3px",
              width: "100.2%",
              height: "55px",
              borderRadius: "6px 6px 0 0",
              backgroundColor: "#B9CCDA",
            }}
          >
            <h1
              style={{
                padding: "0px",
                margin: "0px",
                textAlign: "left",
                paddingLeft: "20px",
                paddingBottom: "0px",
              }}
            >
              Meal do naidheachd!{" "}
              <span style={{ float: "right", marginRight: "5px", marginTop: "-8px" }}>
                <CloseIcon onClick={() => setCloseModal(false)} />
              </span>
            </h1>
          </div>
          <center>
            <div style={{ padding: "10px" }}>
              <h3>You won! Would you like to play again?</h3>
            </div>
            <Button
              size="large"
              variant="contained"
              sx={{
                paddingBottom: "10px",
                textTransform: "none",
                backgroundColor: "#b9ccda",
                "&:hover": {
                  backgroundColor: "#8699a7",
                },
              }}
              onClick={() => reset()}
            >
              Play again
            </Button>
          </center>
        </Box>
      </Modal>
    </div>
  );
};
