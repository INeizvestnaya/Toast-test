import { useState } from "react";
import "./App.css";
import { ToastContainer, createToast } from "ilona-toast-lib";
import Select from "./Select";

function App() {
  const [label, setLabel] = useState("");
  const [color, setColor] = useState("");
  const [variant, setVariant] = useState("success");
  const [position, setPosition] = useState("bottomRight");
  const [spaces, setSpaces] = useState("10");
  const [animation, setAnimation] = useState("");
  const [deleteTime, setDeleteTime] = useState("");

  const [toast, setToast] = useState(null);

  const addToast = () => {
    setToast({
      ...createToast({ label, variant, color }),
      position,
      animation,
      spaces,
      deleteTime,
    });
  };

  return (
    <div className="font-class">
      {toast && <ToastContainer {...toast} />}
      <h4>Toast props:</h4>
      <div>
        <label>Label: </label>
        <input
          type="text"
          className="font-class"
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <Select
        name="Variant"
        id="variant"
        options={["success", "error", "warning", "info"]}
        onChange={(e) => setVariant(e.target.value)}
        selected={variant}
      />
      <div>
        <label>Color: </label>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
      <h4>Toast container props:</h4>
      <Select
        name="Position"
        id="position"
        options={[
          "topLeft",
          "topMiddle",
          "topRight",
          "bottomLeft",
          "bottomRight",
        ]}
        onChange={(e) => setPosition(e.target.value)}
        selected={position}
      />
      <Select
        name="Spaces"
        id="spaces"
        options={[0, 10, 20, 30, 40, 50]}
        onChange={(e) => setSpaces(e.target.value)}
        selected={spaces}
      />
      <Select
        name="Animation"
        id="animation"
        options={[undefined, "fromLeft", "fromRight", "fromTop", "fromBottom"]}
        onChange={(e) => setAnimation(e.target.value)}
        selected={animation}
      />
      <Select
        name="Delete time"
        id="deleteTime"
        options={[undefined, 3, 5, 10]}
        onChange={(e) => setDeleteTime(e.target.value)}
        selected={deleteTime}
      />
      <br />
      <button className="font-class" onClick={addToast}>
        Add toast
      </button>
    </div>
  );
}

export default App;
