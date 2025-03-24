import { use, useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    // API Calls
  }, []);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: @anandyelloju</h4>
    </div>
  );
};

export default User;
