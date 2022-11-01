
import './App.css';

import Header from './Components/Layouts/Header';
import { Meals } from './Components/Meals/Meals';

function App() {
  return (
    <div className="App">
   <Header/>
   <main>
    <Meals/>
   </main>
    </div>
  );
}

export default App;
