import Pallete from './Pallete';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div className="">
     <Pallete {...seedColors[4]}/>
    </div>
  );
}

export default App;
