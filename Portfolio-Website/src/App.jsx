import Front from './Front'
import Profile from './Profile';
import Skillsboard from './Skillsboard';
import './App.css'

function App() {
  return (
    <body>
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
    </body>
  );
}

export default App
