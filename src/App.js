import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    
    <Navbar title={"Text Refactor"}/>
    <div className="container my-3">
      <TextForm title={"Enter the text here: "}/>
    </div>
    </>
  );
}

export default App;
