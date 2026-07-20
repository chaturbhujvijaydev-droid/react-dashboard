const SkillsCard = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5", level: 98 },
    { name: "CSS3 / SCSS", level: 96 },
    { name: "Bootstrap", level: 94 },
    { name: "Redux Toolkit", level: 90 },
    { name: "REST APIs", level: 91 },
    { name: "Git & GitHub", level: 88 },
    { name: "Responsive UI", level: 97 },
    { name: "Performance Optimization", level: 85 },
  ];

  return (
    <div className="profile-card">

      <div className="profile-card-header">
        <h4>Professional Skills</h4>
        <span>Technical Expertise</span>
      </div>

      <div className="skills-list">

        {skills.map((skill, index) => (

          <div className="skill-item" key={index}>

            <div className="skill-header">

              <span>{skill.name}</span>

              <strong>{skill.level}%</strong>

            </div>

            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width: `${skill.level}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default SkillsCard;