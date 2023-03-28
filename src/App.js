import './static/style/App.css';
import Login from './components/Login.js';
import ImageMap from './components/Image.js';
import Header from './components/Header.js';


function App() {
  return (
    <div className="App">
      
        <Header />
        {/* login form */}
        <Login />
        
        {/* image map */}
        <ImageMap/>
        


      
    </div>
  );
}

export default App;
