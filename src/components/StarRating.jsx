import { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import { FaStar } from "react-icons/fa";
// npm install react-icons --save
function StarRating(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  let starArry = [...Array(props.numStars)];

  return (
    <div className="flex justify-center mt-5">
      {starArry.map((item, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            id={i}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
            style={
              i <= (hover || rating) ? { color: "yellow" } : { color: "black" }
            }
          />
        );
      })}
    </div>
  );
}
export default StarRating;
