import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import { boxes } from "./config";

export default function App() {
  const [colorDecolorBoxes, setColorDecolorBoxes] = useState(boxes);
  const [delcolorItems, setDecolorItems] = useState([]);

  useEffect(() => {
    if (delcolorItems.length === 9) {
      for (let i = 0; i < 9; i++) {
        setTimeout(() => {
          const newColorDecolorBoxes = [...colorDecolorBoxes];
          newColorDecolorBoxes.map((item) => {
            if (item.value === delcolorItems[i]) {
              item.colored = false;
            }
            setColorDecolorBoxes(newColorDecolorBoxes);
          });
        }, i * 2000);
      }
      setDecolorItems([]);
    }
  }, [delcolorItems]);

  const boxesClicked = (colorItemIndex) => {
    const newColorDecolorBoxes = [...colorDecolorBoxes];
    newColorDecolorBoxes.map((item, index) => {
      if (index === colorItemIndex) {
        item.colored = true;
        const newDecolorItems = [...delcolorItems];
        if (!newDecolorItems.includes(item.value)) {
          newDecolorItems.push(item.value);
        }
        setDecolorItems(newDecolorItems);
      }
    });
    setColorDecolorBoxes(newColorDecolorBoxes);
  };

  return (
    <div className="App">
      <div className="parentBox">
        {colorDecolorBoxes.map((item, index) => (
          <div
            className={`boxes ${item.colored ? "clickedBox" : ""} `}
            key={`${item}${index}`}
            onClick={() => boxesClicked(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
