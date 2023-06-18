import React from "react";

export default class Lesson10Class extends React.Component {
  // constructor() จะเป็น method แรกที่ถูกทำงานก่อนการ render() 
  // โดยเรามักจะ initial state หรือ bind method ไว้ที่นี้เป็นส่วนใหญ่ 
  // ถ้าหากเราไม่ได้ทำทั้งสองอย่างนี้ก็ไม่จำเป็นต้องเขียน constructor() ก็ได้
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // componentDidMount() จะถูกเรียกใช้งานทันทีหลังการ render() 
  // เราสามารถทำการจัดการต่าง ๆ เกี่ยวกับ DOM ได้ที่ method นี้ 
  // และเรายังสามารถใช้ setState() ใน method นี้ได้อีกด้วย 
  // ซึ่งถ้าเราทำการ setState() ที่ componentDidMount() มันจะทำให้เกิดการ re-render 
  // ใน component นั้น
  // componentDidMount() นี้เหมาะสำหรับการดึงข้อมูลจาก API การ set up subscriptions ต่าง ๆ 
  // แต่ถ้าเราทำการ subscription แล้วอย่าลืม unsubscription ใน componentWillUnmount() ด้วยนะ
  componentDidMount() {
    console.log(`🚀 ~ componentDidMount:`);
    this.time = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  // componentWillUnmount()
  // method นี้จะถูกเรียกใช้งานก่อนที่ component จะถูก unmount ทิ้งไป
  // โดยปกติเราจะใช้เพื่อ reset ค่า network request, subscription
  componentWillUnmount() {
    console.log(`🚀 ~ componentWillUnmount:`);
    clearInterval(this.time);
  }

  changeTime() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>Hello! This is a class component clock.</p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
