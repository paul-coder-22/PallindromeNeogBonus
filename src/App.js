import { useState } from "react";
import "./styles.css";

export default function App() {
  let showText = true;
  const [stringName, setString] = useState("");
  function checkPallindrome() {
    const reverseCheck = stringName.toLowerCase();
    const reverseString = reverseCheck
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
    return reverseCheck === reverseString ? "Pallindrome" : "Not Pallindrome";
  }

  return (
    <div className="App">
      <h1>Hello Programmers</h1>
      <h2>Check Pallindrome or Not</h2>
      <div className="parentDiv">
        <div>
          <label htmlFor="checkString">
            Input{" "}
            <input
              id="checkString"
              type="text"
              value={stringName}
              placeholder="Type Something"
              onInput={(e) => setString(e.target.value)}
            />
          </label>
          <button
            onClick={() => {
              checkPallindrome();
              showText = false;
              setString("");
            }}
          >
            Click
          </button>
          <div>{checkPallindrome()}</div>
        </div>
      </div>
    </div>
  );
}
