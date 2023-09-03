// import Counter from "./components/Counter"
import "./App.css"
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}

      <Header/>
      <div className="main">
          <Sidebar/>
          <Form/>
      </div>
    </div>
  );
}

export default App;
