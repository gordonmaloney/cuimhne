import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLevel, removeLevel, replaceLevels } from "../Redux/levelSlice";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";

import { LEVELS } from "../components/LEVELS";

export const ChangeLevels = () => {
  const dispatch = useDispatch();

  //const levels = useSelector((state) => state.levels);
  const levels = LEVELS();

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
  const [value, setValue] = React.useState([1, levelLength]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    dispatch(
      replaceLevels(
        levels.slice(levels.length - value[1], levels.length - value[0] + 1)
      )
    );
  };

  let marks = [];
  const mapMarks = () => {
    levels.map((level, index) =>
      marks.push({ value: levels.length - index, label: level })
    );
  };
  mapMarks();

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  return (
    <div>
      <Box sx={{ height: `${levels.length * 25}px`, marginY: 2 }}>
        <Slider
          value={value}
          orientation="vertical"
          onChange={handleChange}
          getAriaValueText={valuetext}
          disableSwap
          min={1}
          max={levels.length}
          marks={marks}
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
            color: "#3b122e",
          }}
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Box>
    </div>
  );
};
