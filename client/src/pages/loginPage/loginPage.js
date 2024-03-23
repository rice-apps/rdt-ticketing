import React from 'react';
import "./loginPage.css"

const LoginPage = () => {

  const handleLoginInfo = () => {
    alert('Login information');
  }

  return (
    <div className="AppLogin">
        <div className = 'Images'>
            <img className = 'loginImg'
                src='login.png'
            />
            <img className = 'logoImg'
                src = 'logo.png'
            />
            <text className = "MainText"> Rice Dance Theater</text>
        </div>
        <div className = 'loginButton'>
            <button onClick={handleLoginInfo}>
                <img className = 'googleLogo'
                    src = 'google.png'
                />
                Log in with Google
            </button>
        </div>
    </div>
  );
}

export default LoginPage;