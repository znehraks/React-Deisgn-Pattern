import { useState } from "react";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <div>
      {changeShirts ? <span>Shirts counts</span> : <span>Shoes counts</span>}
      <br />
      <input type="number" key={changeShirts ? "shirts" : "shoes"} />
      <br />
      <button onClick={() => setChangeShirts((s) => !s)}>Change</button>
    </div>
  );
}

export default App;
