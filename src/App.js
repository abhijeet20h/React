import "./App.css";
// import Message from "./Components/Message"
// import PropsEx from "./Components/PropsEx"
// import SetStateEx from "./Components/SetStateEx"
// import NameList from "./Components/NameList"
// import Ex1 from './Components/Ex1'
import Input from "./Components/Input";
import Input2 from "./Components/Input2";

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      {/* <PropsEx  name="ABHIJEET" surname="HORE"/> */}
      {/* <SetStateEx/> */}
      {/* <Covid/> */}
      {/* <Ex1/> */}

      <div className="container" style={{ display: "flex" }}>
        {" "}
        <Input />
        <Input2 />
      </div>
    </div>
  );
}

export default App;
