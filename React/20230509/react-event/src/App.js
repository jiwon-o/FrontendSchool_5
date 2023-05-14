import { useState } from "react";

function App() {
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // submit 이벤트 차단
    console.log("submit");
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default App;
