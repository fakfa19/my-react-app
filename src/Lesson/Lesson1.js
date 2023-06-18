import React from "react";

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
export default function Lesson1() {

  // สร้าง Component
  function MyButton() {
    return <button>This is my button component</button>;
  }

  return (
    <>
      {/* การเรียกใช้งาน Component เหมือนกับ การใช้งาน tag html ปกติเลย */}
      <MyButton></MyButton>

      {/* เพียงแค่ใน React เมื่อเราไม่มี content ใน element เราสามารถใช้ closing tag ได้เลยแบบนี้ */}
      <MyButton />
    </>
  );
}
