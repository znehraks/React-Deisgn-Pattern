import { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => console.log("outer div")}
      style={{ position: "absolute", marginTop: "200px" }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show
        <br />
        Click it to close
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return null;
  // 첫번째 인자에 해당하는 컴포넌트를, 두번째 인자에 해당하는 DOM의 하위에 렌더링
  // => 실제로 컴포넌트가 불려지는 위치와는 무관하게 렌더링됨
  // => 이벤트 버블링은 실제위치가 아니라, react component 배치 위치를 기준으로 발생함
  return createPortal(
    <div className="alert" onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};

export default App;
