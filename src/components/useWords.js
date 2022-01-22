import { useSelector } from "react-redux";
import { WORDS } from "./WORDS";



export const useWords = () => {

  const levels = useSelector(state => state.levels)


  //make random array of 6 words from WORDS list
  let RandomArray = [];

  for (let i = 0; RandomArray.length < 6; i++) {
    let RanNum = Math.floor(Math.random() * WORDS.length);
    !RandomArray.includes(WORDS[RanNum]) &&
      levels.includes(WORDS[RanNum].level) &&
      WORDS[RanNum].l1 !== WORDS[RanNum].l2 &&
      RandomArray.push(WORDS[RanNum]);
  }

  let shuffledWords = [];

  RandomArray.map((word) => {
    let newWord = { Q: word.l1, A: word.l2, front: "L1" };
    let newWord2 = { Q: word.l2, A: word.l1, front: "L2" };
    shuffledWords.push(newWord);
    shuffledWords.push(newWord2);
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

    shuffleArray(shuffledWords);

  return shuffledWords;
};
