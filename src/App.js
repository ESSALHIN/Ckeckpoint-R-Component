import './App.css';
import Adress from './Component/Profile/Adress';
import Photo from './Component/Profile/Photo';
import FullName from './Component/Profile/FullName';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Photo/>
      <Adress/>
    </div>
  );
}

export default App;
