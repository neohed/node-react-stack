import {
  Link,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AddEditNote from "./AddEditNote";
import './App.css';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={
              <ul>
                <li>
                  <Link to="edit-note">Edit Note</Link>
                </li>
              </ul>
            }/>
            <Route path="/edit-note" element={<AddEditNote/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
