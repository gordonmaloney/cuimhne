import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLevel, removeLevel } from "../Redux/levelSlice";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";

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

  const levelLength = levels.length;

  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([levelLength - 2, levelLength]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let marks = [];
  const mapMarks = () => {
    levels.map((level, index) =>
      marks.push({ value: levels.length - index, label: level })
    );
  };
  mapMarks();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <input onChange={(e) => setNewLevel(e.target.value)} />
      <br />
      <button onClick={() => handleAdd(newLevel)}>add {newLevel}</button>

      <Box sx={{ height: 300, marginY: 2 }}>
        <Slider
          value={value}
          orientation="vertical"
          onChange={handleChange}
          getAriaValueText={valuetext}
          disableSwap
          min={1}
          max={levels.length}
          marks={marks}
        />
      </Box>
      {console.log(levels.length)}

      <div style={{ position: "fixed", display: "block" }}>
        {levels?.map((level) => (
          <>
            {level} <button onClick={() => handleRemove(level)}>remove</button>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};
