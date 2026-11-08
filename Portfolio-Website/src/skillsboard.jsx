import pythonLogo from './assets/python-5.svg';
import javascriptLogo from './assets/javascript.svg';
import reactLogo from './assets/react-native-1.svg';

const skills = [
  { name: 'Python', logo: pythonLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
];


function Skillsboard() {
  const renderSkills = (isDuplicate = false) => (
    <div className="skills-marquee-group" aria-hidden={isDuplicate}>
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <img src={skill.logo} alt="" aria-hidden="true" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="skillsboard">
      <h4>Programming Skills:</h4>
      <div className="skills-marquee">
        <div className="skills-marquee-track">
          {renderSkills()}
          {renderSkills(true)}
        </div>
      </div>
    </div>
  );
}

export default Skillsboard;
