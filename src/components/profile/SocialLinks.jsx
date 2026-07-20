import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      title: "GitHub",
      subtitle: "github.com/vijay",
      url: "https://github.com/",
      icon: <FaGithub />,
      color: "github",
    },
    {
      title: "LinkedIn",
      subtitle: "linkedin.com/in/vijay",
      url: "https://linkedin.com/",
      icon: <FaLinkedin />,
      color: "linkedin",
    },
    {
      title: "Portfolio",
      subtitle: "reactadmin.vercel.app",
      url: "https://vercel.com/",
      icon: <FaGlobe />,
      color: "portfolio",
    },
    {
      title: "Email",
      subtitle: "vijay@example.com",
      url: "mailto:vijay@example.com",
      icon: <FaEnvelope />,
      color: "email",
    },
  ];

  return (
    <div className="profile-card">

      <div className="profile-card-header">
        <h4>Social Links</h4>
        <span>Connect with me</span>
      </div>

      <div className="social-grid">

        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >

            <div className={`social-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="social-content">
              <h6>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>

          </a>
        ))}

      </div>

    </div>
  );
};

export default SocialLinks;