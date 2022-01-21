import React, { useState, useEffect } from "react";
import FBModal from "./FBModal";

export const Header = () => {  
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header">
               
                 <FBModal 
                  prompt={<h1 className="header-howto">??</h1>}
                  title="How to play"
                  body={
                    <div className="modalBody">
                    Like the card game "memory", the goal here is to match pairs - but instead of just two of the same words, you're looking for translations.
                    <br /><br />
                    The game is intended to be a study aid for people using the Gaelic Duolingo course, and the vocabulary is based on the first checkpoint of that.
                    <br /><br />
                    If you would like to support this project and the development of future Gaelic learning programs, you can make a donation <a target="_blank" href="https://ko-fi.com/gordonmaloney">by clicking here</a>.
                    </div>
                  }
                 />

          <h1>
          🤔 Cuimhne
          </h1>
      </div>

    </>
  );
};
