import React from "react";

/* -------------------------------------------------------------------------- */
/*                               Rendering List                               */
/* -------------------------------------------------------------------------- */
export default function Lesson4() {
  // กรณีที่เราต้องการ render Component ที่คล้ายๆ กันเช่น Profile
  // หรือ list ของ สิ่งของต่างๆ เราสามารถใช้ JavaScript Array map ได้
  // ตัวอย่าง ที่เห็นบ่อยๆ เช่น เราจะแสดง <ul> และข้างในมี <li> มีข้อมูลดังนี้
  // return (
  //   <div>
  //     <ul>
  //       <li>John Doe</li>
  //       <li>Chuck Norris</li>
  //       <li>Jane Doe</li>
  //       <li>Foo Bar</li>
  //       <li>Alice Bob</li>
  //     </ul>
  //   </div>
  // );

  // 1. เปลี่ยนข้อมูล ให้อยู่ในรูปแบบ JavaScript Array
  // const names = [
  //   "John Doe",
  //   "Chuck Norris",
  //   "Jane Doe",
  //   "Foo Bar",
  //   "Alice Bob",
  //   "Tim Cook",
  //   "Mark Zuckerberg",
  // ];

  // 2. ใช้ map เพื่อแปลงให้เป็น array ของ JSX nodes ชื่อ users
  // const users = names.map((name) => <li>{name}</li>);

  // 3. จากนั้น ใน component เราก็สามารถ ใช้แบบนี้ได้
  // return <ul>{users}</ul>;

  // นอกจากนี้ เราสามารถแทรก Map ใน JSX ตรงๆ ภายใน return function ได้เลย
  // โดยไม่ต้องสร้างตัวแปรก็ได้ แบบนี้
  // return (
  //   <ul>
  //     {names.map((user) => {
  //       return <li>{user}</li>;
  //     })}
  //   </ul>
  // );

  // เราจะได้ Warning ว่า Each child in a list should have a unique "key" prop.
  // ใน list items เราควรจะใส่ key ให้กับมันด้วย
  // ตัวอย่าง จากปกติ ข้อมูล array string เราก็ทำเป็น data object โดยการใช้ id
  // const names2 = [
  //   { id: 1, name: "John Doe" },
  //   { id: 2, name: "Chuck Norris" },
  //   { id: 3, name: "Jane Doe" },
  //   { id: 4, name: "Foo Bar" },
  //   { id: 5, name: "Alice Bob" },
  // ];
  // return (
  //   <ul>
  //     {names2.map((user) => {
  //       return <li key={user.id}>{user.name}</li>;
  //     })}
  //   </ul>
  // );

  // หรือถ้าไม่มี id จริงๆ ก็ใช้ index ของ array ก็ได้
  // แต่ก็ไม่แนะนำเท่าไหร่ (กรณีที่ไม่มี id หรือ unique อื่นๆ จริงๆ เท่านั้น)
  const names3 = [
    "John Doe",
    "Chuck Norris",
    "Jane Doe",
    "Foo Bar",
    "Alice Bob",
    "Tim Cook",
    "Mark Zuckerberg",
  ];
  return (
    <ul>
      {names3.map((user, index) => {
        return <li key={index}>{user}</li>;
      })}
    </ul>
  );
}
