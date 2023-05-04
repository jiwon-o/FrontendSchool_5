import "./App.css";
import Menu from "./components/menu/Menu.jsx";
import NewMenu from "./components/newMenu/NewMenu.jsx";
import Today from "./components/today/Today.jsx";
import TripList from "./components/tripList/TripList";

function App() {
  // const name = "라이캣!";
  // const 변수 = "value";
  // const 함수 = () => {
  //   console.log("함수!");
  // };
  // const 값 = true;
  return (
    <div>
      {/* {100 + 1}
      {"hello" + "world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {함수()}
      {변수}
      {값 ? "one" : "two"}
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        안녕, {name} 1호
      </h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass" />
      <Menu />
      <NewMenu />
      <Today /> */}
      <TripList />
    </div>
  );
}

export default App;
