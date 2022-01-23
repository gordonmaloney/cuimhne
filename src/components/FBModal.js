import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

import Fade from "@mui/material/Fade";
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

export default function FBModal({ prompt, title, body }) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
  };

  const Header = () => {
    return (
      <div
        style={{
          zIndex: 0,
          padding: "0px",
          margin: "0px",
          marginLeft: "-0.2px",
          marginTop: "-0.5px",
          paddingTop: "3px",
          width: "100.2%",
          height: "45px",
          borderRadius: "6px 6px 0 0",
          backgroundColor: "#B9CCDA",
        }}
      >
        <div style={{float: "right", display: "block"}}>
            <CloseIcon onClick={() => setOpen(false)} />
            </div>
            <h2
              style={{
                display: "block",
                padding: "0px",
                margin: "0px",
                textAlign: "left",
                paddingLeft: "10px",
                paddingBottom: "0px",
              }}
            >
              {title}
              </h2>
      </div>
    );
  };

  return (
    <>
      <span onClick={handleOpen}>{prompt}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Header />

            {body}

<center>
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
              onClick={() => setOpen(false)}
            >
              Play
            </Button>
            </center>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
