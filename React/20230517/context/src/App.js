import { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  // return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return (
          <div>
            {/* <h2>{props.value.id}</h2>
          <strong>{props.value.name}</strong> */}
            <h2>{value.id}</h2>
            <strong>{value.name}</strong>
            <HelloLicatTwo />
            {/* <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} /> */}
          </div>
        );
      }}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>Two : {value.id}</h2>
          <strong>Two : {value.name}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  ); // return 생략
};
// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

export default App;
