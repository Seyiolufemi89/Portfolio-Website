import Front from './Front'
import Profile from './Profile';
import Skillsboard from './skillsboard';
import Resume from './Resume';
import './App.css'

function App() {
  return (
    <>
      <header className="App-header">
        <button className="header-button">My Projects</button>
        <a className="header-button" href="#resume">My Resume</a>
        <button className="header-button">Contact Me</button>
        <button className="header-button">About Me</button>
      </header>
      <div className="App">
        <Front />
        <Profile />
        <div className = "skills column">
          <Skillsboard />
        </div>
        <Resume />
      </div>
    </>
  );
}

export default App
