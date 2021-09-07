import './App.css';
import MainBottom from './componenets/mainbody/MainBottom';
import MainTop from './componenets/mainbody/MainTop';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <div className="app">

      {/* Header */}
        <Navbar />

      {/* Body */}
      <MainTop />
      <MainBottom />
      {/* Footer */}
    </div>
  );
}

export default App;
