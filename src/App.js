import logo from './logo.svg';
import './App.css';

import PersonCard from './Components/PersonCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard yournamehere = "Doe, Jane">
          <p>Age: 45</p>
          <p>Hair Color: Black</p>
        </PersonCard>
        <PersonCard yournamehere = "Smith, John">
          <p>Age: 88</p>
          <p>Hair Color: Brown</p>
        </PersonCard>
        <PersonCard yournamehere = "Fillmore, Millard">
          <p>Age: 50</p>
          <p>Hair Color: Brown</p>
        </PersonCard>
        <PersonCard yournamehere = "Smith, Maria">
          <p>Age: 62</p>
          <p>Hair Color: Brown</p>
        </PersonCard>
      </header>
    </div>
  );
}

export default App;
