import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiCodechef, SiHackerrank , SiCodingninjas } from 'react-icons/si';

const codingProfiles = [
  {
    name: 'LeetCode',
    icon: <SiLeetcode className="text-yellow-500" />,
    link: 'https://leetcode.com/u/brijesh_2004/',
  },
  {
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks className="text-green-600" />,
    link: 'https://www.geeksforgeeks.org/user/brskumar0102/',
  },
  {
    name: 'Codeforces',
    icon: <SiCodeforces className="text-blue-700" />,
    link: 'https://codeforces.com/profile/brijesh_singh',
  },
  {
    name: 'CodeChef',
    icon: <SiCodechef className="text-gray-800" />,
    link: 'https://www.codechef.com/users/brijesh_122004',
  },
  {
    name: 'Coding Ninjas',
    icon: <SiCodingninjas className="text-red-500" />,
    link: 'https://www.naukri.com/code360/profile/Brijesh_94ec',
  },
  {
    name: 'HackerRank',
    icon: <SiHackerrank className="text-green-500" />,
    link: 'https://www.hackerrank.com/profile/brskumar0102',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FaGithub />,
    link: 'https://github.com/brijesh2004',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="text-blue-600" />,
    link: 'https://www.linkedin.com/in/brijesh-singh-456185228/',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="text-blue-400" />,
    link: 'https://x.com/Brijesh49644045',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram className="text-pink-500" />,
    link: 'https://www.instagram.com/brij_esh_singh/',
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="text-red-500" />,
    link: 'mailto:brskumar0102@gmail.com',
  },
];

const Contact = () => {
  return (
    <div className="px-6 py-12 md:ml-28 mb-28 md:mb-0 w-full max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-red-500 mb-10">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Coding Profiles */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Coding Profiles</h2>
          <ul className="space-y-4">
            {codingProfiles.map((profile) => (
              <li key={profile.name}>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg text-gray-700 hover:text-red-500 transition"
                >
                  <span className="text-2xl">{profile.icon}</span>
                  {profile.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Connect with Me</h2>
          <ul className="space-y-4">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg text-gray-700 hover:text-red-500 transition"
                >
                  <span className="text-2xl">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
