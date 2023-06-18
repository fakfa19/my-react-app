/* eslint-disable jsx-a11y/alt-text */
import "./Lesson3.css";
import styles from "./Lesson3.module.css";
import React from "react";
import mountain from "./mountain.jpeg";

/* -------------------------------------------------------------------------- */
/*                                     CSS                                    */
/* -------------------------------------------------------------------------- */
export default function Lesson3() {
  //! className
  // ใช้แบบ HTML/CSS ปกติได้เลย เพียงแต่ใช้ attribute ชื่อ className แทนที่ class แบบนี้
  // return <img className="avatar" src={mountain} width={100} />;

  //! Inline-Style
  // เป็นการแทรก style แบบ inline คล้ายๆ HTML เพียงแต่ style แบบนี้ ต้องเป็น object เท่านั้น
  // const myStyle = {
  //   avatar: {
  //     // ข้อสังเกต ใน Style Object เราจะใช้ชื่อแบบ camelCase 
  //     borderRadius: "50%",
  //   },
  // };
  // return <img style={myStyle.avatar} src={mountain} width={100} />;

  //! CSS Modules
  // คล้ายๆกับ การใช้งาน CSS ปกติ เพียงแต่ว่า วิธีนี้ ข้อดีคือ 
  // แต่ละ Component จะถูก generate ชื่อแตกต่างกัน ทำให้ไม่ต้องกังวลว่า css เราจะไปชื่อซ้ำกับไฟล์อื่นๆ
  // วิธีการก็คือ ตั้งชื่อไฟล์ ลงท้ายด้วย .module.css เช่น [name].module.css 
  return <img className={styles.avatar} src={mountain} width={100} />
}
