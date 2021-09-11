import './App.css';
import ContactUs from './componenets/ContactUs';
import Facility from './componenets/mainbody/Facility';
import MainBottom from './componenets/mainbody/MainBottom';
import MainTop from './componenets/mainbody/MainTop';
import Methods from './componenets/Methods';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <div className="app">

      {/* Header */}
        <Navbar />

      {/* Body */}
      
      <MainTop />
      <MainBottom />
      
      <Facility />
      <Methods />
      
      <ContactUs />
      {/* Footer */}
    </div>
  );
}

export default App;
