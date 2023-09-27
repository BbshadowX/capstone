import { useState } from "react";

function Login() {
  const [loginStatus, setLoginStatus] = useState(null);

  return (
    <div id="Login">
      {loginStatus ? <h1>Login</h1> : <button>Login</button>}
    </div>
  );
}

export default Login;
