import Front from './Front'
import Profile from './Profile';
import Skillsboard from './skillsboard';
import './App.css'

function App() {
  return (
    <>
      <header className="App-header">
        <button id = "Header-button">My Projects</button>
        <button id = "Header-button">My Resume</button>
        <button id = "Header-button">Contact Me</button>
        <button id = "Header-button">About Me</button>
      </header>
      <div className="App">
        <Front />
        <Profile />
        <Skillsboard />
      </div>
    </>
  );
}

export default App
