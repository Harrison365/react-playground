import React from "react";
import { useState, useEffect } from "react";
import MyComponent from "./MyComponent";
import { useSearchParams } from "react-router-dom";

export default function Stuff() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [newEle, setNewEle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [gottenQuery, setGottenQuery] = useState("");

  function deleteItem(targetIndex) {
    setArr((current) => {
      return current.filter((item, index) => {
        return targetIndex != index;
      });
    });
  }

  useEffect(() => {
    let query = searchParams.get("query");
    setGottenQuery(query);
    console.log("in useEffect", query);
  }, [searchParams]);

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
      <p>here is your query query --> {gottenQuery}</p>
      <button
        onClick={() => {
          setSearchParams({ query: "tennis" });
        }}
      >
        query = tennis
      </button>
      <button
        onClick={() => {
          setSearchParams({ query: "basketball" });
        }}
      >
        query = basketball
      </button>
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
