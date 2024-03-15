import "./App.css";
import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [newEle, setNewEle] = useState("");

  function deleteItem(targetIndex) {
    setArr((current) => {
      return current.filter((item, index) => {
        return targetIndex != index;
      });
    });
  }

  return (
    <div className="yo">
      <h1>Counter {count}</h1>
      <button
        onClick={() =>
          setCount((currcount) => {
            return currcount + 1;
          })
        }
      >
        +
      </button>
      <MyComponent2 id="yo" count={count} setCount={setCount} />
      <MyComponent count={count} setCount={setCount} />
      {arr.length ? (
        <ul>
          {arr.map((item, index) => {
            return (
              <div>
                <li>{item}</li>
                <button
                  onClick={(e) => {
                    deleteItem(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <h3>List Empty</h3>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newEle !== "") {
            //No empty strings ^^^
            setArr((currArr) => {
              return [...currArr, newEle];
            });
          }
          setNewEle("");
        }}
      >
        <input
          value={newEle}
          onChange={(e) => {
            setNewEle(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function MyComponent2({ count, setCount }) {
  return (
    <div>
      <h1>@@@@@@@@@</h1>
    </div>
  );
}

export default App;
