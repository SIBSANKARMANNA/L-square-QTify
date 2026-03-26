
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
        <Sections title="Top Albums" endpoint="albums/top" />
        <Sections title="New Albums" endpoint="albums/new" />
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
      <Sections title="Songs" endpoint="songs" tab={true} />
    </div>
  );
}

export default App;

