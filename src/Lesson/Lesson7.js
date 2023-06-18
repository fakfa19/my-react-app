import React from "react";

/* -------------------------------------------------------------------------- */
/*                                    Props                                   */
/* -------------------------------------------------------------------------- */
export default function Lesson7() {
  // React Component จะใช้ props ในการ รับ-ส่ง ข้อมูล ระหว่าง Component
  // ตัว Parent Component สามารถที่จะส่งข้อมูล ไปหา Child Component ได้ ผ่าน props
  // (เหมือน HTML attributes) แต่ต่างกันตรงที่ เราสามารถ ส่งค่า JavaScript
  // หรือ object array หรือ function ก็ได้

  const names = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Chuck Norris", age: 30 },
    { id: 3, name: "Jane Doe", age: 23 },
    { id: 4, name: "Foo Bar", age: 35 },
    { id: 5, name: "Alice Bob" },
  ];

  function Item(props) {
    // return <li>John Doe</li>;
    // return <li>{props.name}</li>;

    // const name = props.name;
    // const age = props.age;

    const { name, age } = props;
    return (
      <li>
        Name: {name} - {age} yrs.
      </li>
    );
  }

  function MyComponent() {
    return (
      <ul>
        {names.map((user) => {
          // return <Item />;
          // ทีนี้จะสังเกตเห็นว่า ทุกๆ Item มันยังแสดงแค่ John Doe ยังไม่ได้เป็นค่าจริงๆ
          // ที่เราอยากให้เป็น วิธีการก็คือ สร้าง props ขึ้นมาใหม่ ชื่อว่า name และส่งไปแบบนี้
          // return <Item name={user.name} />;

          const { id, name, age } = user;
          return <Item key={id} name={name} age={age} />;
        })}
      </ul>
    );
  }

  return <MyComponent />;
}
