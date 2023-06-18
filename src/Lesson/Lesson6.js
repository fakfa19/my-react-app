import React from "react";

/* -------------------------------------------------------------------------- */
/*                                   Events                                   */
/* -------------------------------------------------------------------------- */
export default function Lesson6() {
  function handleClick() {
    alert("You clicked me!");
  }

  const items = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Chuck Norris" },
    { id: 3, name: "Jane Doe" },
  ];

  function handleClickItem(name) {
    alert(`You name: ${name}`);
  }

  return (
    <>
      {/* โดยปกติ ถ้าเป็น HTML & JS เราจะรับ events ผ่าน onclick หรือใช้ addEventListener()
          ใน React เราก็จะใช้คล้ายๆ กันเพียงแต่ว่า onclick จะเป็น onClick (camelCase)
          และรับเป็น handler function 
      */}
      <button onClick={handleClick}>Click me</button>

      {/* 
        นอกจากนี้ events เราสามารถใช้ anonymous function ไปเลยก็ได้
        ถ้าเกิดว่า function นั้นไม่ได้ต้องการอะไรซับซ้อน
      */}
      <button onClick={() => alert("You clicked me!")}>Click me</button>

      {items.map((item) => (
        <button key={item.id} onClick={() => handleClickItem(item.name)}>
          {item.name}
        </button>
      ))}
    </>
  );
}
