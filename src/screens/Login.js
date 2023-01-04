import './App.css';

function App() {
  return (
    <div class="login-container">
      <form class="login-form">
        <h1>Login</h1>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <div class="button">
        <button type="submit">Acessar</button>
        </div>
        <div class="button">
        <button type="submit">Cadastre-se</button>
        </div>
      </form>
    </div>
  );
}

export default App;
