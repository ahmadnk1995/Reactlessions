
import './App.css';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Lists from './components/lists';
import Conditions from './components/conditions'


function App() {
  return (
    <div className="App">
           <p>Welcome From App </p> 
          
            <Welcome name = "Ahmad"> Description </Welcome>
            <Hello name = "Ahmad" ></Hello>
            <Lists/>
            <Conditions/>   
    </div>
  );
}

export default App;
