// ไฟล์นี้เหมือนเป็นไฟล์หลักที่ create-react-app
// สร้างขึ้นมาเหมือนกับเป็นไฟล์ main ของโปรแกรม
// ที่จะนำส่วนประกอบต่างๆมาใช้งานด้วยกันในไฟล์นี้
import "./App.css";
import React, { useState } from "react";
import Lesson1 from "./Lesson/Lesson1";
import Lesson10Class from "./Lesson/Lesson10/Lesson10Class";
import Lesson10Fn from "./Lesson/Lesson10/Lesson10Fn";
import Lesson2 from "./Lesson/Lesson2";
import Lesson3 from "./Lesson/Lesson3/Lesson3";
import Lesson4 from "./Lesson/Lesson4";
import Lesson5 from "./Lesson/Lesson5";
import Lesson6 from "./Lesson/Lesson6";
import Lesson7 from "./Lesson/Lesson7";
import Lesson8 from "./Lesson/Lesson8";
import Lesson9 from "./Lesson/Lesson9";
import SectionBar from "./components/SectionBar";
import ModalDialog from "./components/ModalDialog";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>

        <SectionBar name="Lesson1" />
        <Lesson1 />

        <SectionBar name="Lesson2" />
        <Lesson2 />

        <SectionBar name="Lesson3" />
        <Lesson3 />

        <SectionBar name="Lesson4" />
        <Lesson4 />

        <SectionBar name="Lesson5" />
        <Lesson5 />

        <SectionBar name="Lesson6" />
        <Lesson6 />

        <SectionBar name="Lesson7" />
        <Lesson7 />

        <SectionBar name="Lesson8" />
        <Lesson8 />

        <SectionBar name="Lesson9" />
        <Lesson9 />

        {/* <SectionBar name="Lesson10" /> */}
        {/* <Lesson10Class /> */}
        {/* <Lesson10Fn /> */}

        <SectionBar name="ModalDialog" />
        <button onClick={() => setShow(true)}>Open dialog</button>
        <ModalDialog isOpen={show}>
          Hello there!
          <br />
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
        </ModalDialog>
      </header>
    </div>
  );
}

export default App;
