import React, {useState} from 'react';

export const LEVELS = () => {
    
    const [levels, setLevels] = useState([
        "Intro",
        "Food and Drink",
        "Phrases",
        "Feelings",
        "About Me",
        "Clothing",
        "Pets",
        "Weather",
        "Phrases 2",
        "Rain etc.",
        "Numbers",
        "Family",
        "Numbers 2",
        "Food 2",
        "Colors",
        "Home",
      ]);

  return levels;
};
