import React from "react";
import "./Login.css";


interface LoginProps{
  RegisterClick: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  return (
  <div className="window">
    <div className="nav-bar"></div>
    <div className="frame">
      <div className="text-wrapper">Авторизація</div>
      <div className="content">
        <input type="text" placeholder="Email:" className="input"/>
        <input type="text" placeholder="Password:" className="input" />
      </div>
      <div className="forme-group">
      <div className="checkbox">
            <label htmlFor="rememberMe"><div className="text">Запом'ятати мене</div></label>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
      </div>
            <div className="forgot-password">
            <a className='text' href="#" id="forgotPasswordLink">Забули пароль?</a>
            </div>
      </div>
      <button className="button-sign-in" type="submit">Увійти</button>
      <div className="sign-link">
      <a className='text' href="#" id="registerLink" onClick={props.RegisterClick}>Зареєструватись</a>
      </div>
    </div>
  </div>
  
  );
};
export default Login;
