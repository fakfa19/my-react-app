import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */
export default function Lesson8() {
  // const [count, setCount] = useState(0);
  // return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;

  const defaultUser = { id: -1, name: "Default" };
  const [user, setUser] = useState(defaultUser);

  const handleOnClick = () => {
    const newUser = {
      id: 2,
      name: "New name",
    };

    // กรณี ต้องการอัพเดท เพียงแค่ name เราสามารถใช้ Spread Operator ได้
    // const newUser = {
    //   ...user,
    //   name: "New name",
    // };

    setUser(newUser);

    // หรือใช้ Object destructoring ตอน setUser เลยแบบนี้
    // setUser({ ...user, name: "New name" });
  };

  return <button onClick={handleOnClick}>ID: {user.id} | Name: {user.name}</button>;
}
