import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope className="w-6 h-6 text-[var(--accent)]" />,
      link: "mailto:cenkoflorian@gmail.com",
      label: "cenkoflorian@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6 text-[var(--accent)]" />,
      link: "https://www.linkedin.com/in/florian-cenko-6a7a19252/",
      label: "Florian Cenko",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6 text-[var(--accent)]" />,
      link: "https://github.com/Florian-Cenko",
      label: "github.com/Florian-Cenko",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[var(--foreground)] relative inline-block">
          Contact
          <span className="block w-16 h-1 bg-[var(--accent)] rounded-full mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[var(--card-bg)] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform border border-transparent"
            >
              {contact.icon}
              <div>
                <h3 className="font-semibold text-[var(--foreground)] text-lg">{contact.name}</h3>
                <p className="text-[var(--secondary)] text-sm">{contact.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}