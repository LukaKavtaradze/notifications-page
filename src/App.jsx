import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(3);
  function clearNofitications() {
    setCount(0);
  }

  return (
    <div className="notification-box">
      <Header count={count} clear={clearNofitications} />
    </div>
  );
}

export default App;
