
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='bottom-space'>
        <Sections title="Top Albums" endpoint="top" />
        <Sections title="New Albums" endpoint="new" />
      </div>
      
      <hr
        style={{
          border: "none",
          height: "1px",
          backgroundColor: "#34c94b",
          width: "100%",
          margin: "auto auto"
        }}
      />
      <Sections title="New Albums" endpoint="new" />
    </div>
  );
}

export default App;

