import logo from './logo.svg';
// import './App.css';
import People from './People';
import Tours from './tours/Tours';
import './tours/tours.css'


function App() {
  return (
    <main>
      <section className="main-container">
        {/* <People /> */}
        <Tours/>
      </section>
    </main>
  );
}

export default App;

