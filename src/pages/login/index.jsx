const Login = () => {

  const handleLogin = () => {
    const clientId = "Ov23liXS94qlXaXJ9edu";
    const redirectUri = "http://localhost:8080/v1/login/oauth2/code/github";
    const scope = "user";
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }

  return (
    <>
      <h1>GitHub OAuth2 로그인</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </>
  )
};

export default Login;