import React from "react";

/* -------------------------------------------------------------------------- */
/*                            Conditional Rendering                           */
/* -------------------------------------------------------------------------- */
export default function Lesson5() {
  //! Element Variables
  // ตัวอย่างการใช้ If Else ในการ render Component ถ้า score มากกว่า 50
  // ก็จะ render แบบนึง ถ้า น้อยกว่า 50 ก็จะอีกแบบ
  // วิธีนี้จะใช้แบบ JavaScript คือการกำหนดเงื่อนไข และก็ assign JSX ไปเก็บไว้ที่ตัวแปรซักตัว
  // let result;
  // const score = 50;

  // if (score >= 50) {
  //   result = <p>You've passed!</p>;
  // } else {
  //   result = <p>Please try again next time</p>;
  // }

  // return (
  //   <div>
  //     <p>Your result:</p>
  //     {result}
  //   </div>
  // );

  //! ? operator
  // คล้ายๆ If Else แต่วิธีนี้ คือเราใช้ภายใน JSX
  // จากตัวอย่าง If Else ถ้าเราใช้ ? operator จะเป็นแบบนี้
  // const score = 50;

  // return (
  //   <div>
  //     <p>Your result:</p>
  //     {/* condition ? true : false */}
  //     {/* ถ้าเงื่อนไข True ก็ execute อันแรก ถ้า False ก็จะ execute อันที่สอง (หลัง colon) */}
  //     {score >= 50 ? <p>You've passed!</p> : <p>Please try again next time</p>}
  //   </div>
  // );

  //! logical &&
  // ในบางครั้ง เราต้องการแค่ condition เป็น If ไม่ต้องการ​ Else
  // เราสามารถใช้ && ได้ ตัวอย่าง syntax คือ
  // condition && true
  const score = 50;

  return (
    <div>
      <p>Your result:</p>
      {/* condition && true */}
      {score >= 50 && <p>You've passed!</p>}
    </div>
  );
}
