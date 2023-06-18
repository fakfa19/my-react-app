import React from "react";

/* -------------------------------------------------------------------------- */
/*                              JSX และ Component                             */
/* -------------------------------------------------------------------------- */
export default function Lesson2() {
  // ❌ return multiple element ไม่ได้
  // return (
  //   <h1>Hello World!</h1>
  //   <p>This is component!</p>
  // )

  // ✅ wrap มันด้วย div ซะ
  // return (
  //   <div>
  //     <h1>Hello World!</h1>
  //     <p>This is component!</p>
  //   </div>
  // )

  // ในบางครั้ง เราไม่ต้องการ wrap มันด้วย div เพิ่ม เพราะมันจะทำให้
  // เวลาเรา render HTML เรามีโค๊ด div เพิ่มมา ทำให้ stylesheet ของเราผิดเพี้ยน
  // เราสามารถ wrap element ด้วย การใช้ React.Fragment หรือ ตัวย่อคือ <> และ </> แบบนี้

  // return (
  //   <React.Fragment>
  //     <h1>Hello World!</h1>
  //     <p>This is component!</p>
  //   </React.Fragment>
  // )

  // หรือใช้ short hand <>{...}</>
  // return (
  //   <>
  //     <h1>Hello World!</h1>
  //     <p>This is component!</p>
  //   </>
  // );

  // การแสดงค่า JavaScript หรือการแทรกโค๊ด JavaScript ลงไปใน JSX เราจะใช้ {}
  const title = "Hello World!";
  const message = "This is component!";

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
