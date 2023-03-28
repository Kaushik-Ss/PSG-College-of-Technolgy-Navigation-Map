import React,{ useState } from 'react';
import '../static/style/login.css';

  function Login(props) {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    return (
      <>

<button onClick={toggleSidebar}>Close Sidebar</button>
        {showSidebar && (
          <div className="sidebar">
          
          <br></br>
            Username:<input type="text"></input>
            <br></br>
            Password:<input type="password"></input>
            <br></br>
            <button type="submit">Login</button>

          </div>
        )}
      </>

    );
  }

  export default Login;