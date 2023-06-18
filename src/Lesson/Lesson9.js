import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                          Props & State and Events                          */
/* -------------------------------------------------------------------------- */
export default function Lesson9() {
  return (
    <>
      <MyComponent>
        <h1>This is children header</h1>
        <p>This is paragraph</p>
      </MyComponent>
      <Counter />
    </>
  );
}

function MyComponent({ children }) {
  return <>{children}</>;
}

function MyButton({ handleClick }) {
  return <button onClick={handleClick}>Click me!</button>;
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      You pressed me {count} times
      <MyButton handleClick={handleClick} />
    </>
  );
}
