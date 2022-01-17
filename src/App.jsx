import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [num, setnum] = useState(0);
  const incNum = () => {
    return setnum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
      alert("Can't go down now ");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="content_div">
          <h1>{num}</h1>
          <button onClick={incNum}>
            <AddIcon />
          </button>
          <button onClick={decNum}>Decreament</button>
        </div>
      </div>
    </>
  );
};

export default App;
