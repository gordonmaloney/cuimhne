import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLevel, removeLevel } from "../Redux/levelSlice";

export const ChangeLevels = () => {
  const dispatch = useDispatch();

  const levels = useSelector((state) => state.levels);

  const [newLevel, setNewLevel] = useState("Home");

  const handleAdd = (level) => {
    dispatch(addLevel(level));
  };

  const handleRemove = (level) => {
    dispatch(removeLevel(level));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
        <input onChange={e => setNewLevel(e.target.value)} />
      <br/>
      <button onClick={() => handleAdd(newLevel)}>add {newLevel}</button>

      <div style={{position: "fixed", display: "block"}}>
        {levels?.map((level) => (
          <>{level} <button onClick={() => handleRemove(level)}>remove</button><br/></>
        ))}
      </div>
    </div>
  );
};
