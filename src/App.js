import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import TextForm from './component/TextForm';

let kon = 'worldd'
function App() {
  return (
    <div className="App">
      <Navbar title='TextUtils'></Navbar>
      <TextForm heading='Enter The Text To Analyze'></TextForm>
    </div>
  );
}

export default App;