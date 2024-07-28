import React ,{ useState }  from 'react';
import { motion ,AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs ,SiJavascript ,SiPhp ,SiRedux ,SiTailwindcss ,SiFigma ,SiFirebase,SiMysql,SiGithub ,SiPostman  } from 'react-icons/si';
import { HiMiniArrowUturnDown } from "react-icons/hi2";
import FigmaIcon from './Figma';
import PythonIcon from './python';




const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};


const App = () => {
  const projects = [
    {
      title: 'Project One',
      images: ['/proj1.1.png', '/proj1.2.png'],
      description: 'Developed Cinephile, a MERN stack app that allows users to categorize and store movies, with JWT-based authentication and TMDb API integration for personalized recommendations and real-time movie information.'
    },
    {
      title: 'Project Two',
      images: ['/proj2.1.png'],
      description: 'Created CarHub, a MERN stack application providing users with the latest car collections, comparison features, and personalized car recommendations to enhance their vehicle selection experience.'
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[currentProject].images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects[currentProject].images.length) % projects[currentProject].images.length);
  };

  const imageVariants = {
    hidden: { opacity: 0, rotateY: -90, transformOrigin: 'right' },
    visible: { opacity: 1, rotateY: 0, transformOrigin: 'right' },
    exit: { opacity: 0, rotateY: 90, transformOrigin: 'right' }
  };
  return (
    <div className="bg-[#EBF3EC] relative overflow-hidden">
      <section className="min-h-screen flex flex-col justify-center items-center p-4 relative">
        <motion.img
          src='/PROFILE.jpg'
          alt="Profile"
          className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] md:w-[600px] md:h-[600px] rounded-full absolute top-[-10%] right-[-10%] md:top-[-10%] md:right-[-10%] lg:top-[-10%] lg:right-[-10%]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-montaga mb-2">John K Giji</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montaga mb-4">Software Developer</h2>
          <div className="flex flex-wrap justify-center mb-6">
            <SiMongodb className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 text-green-500 transform transition duration-500 hover:scale-110" />
            <SiExpress className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 text-black transform transition duration-500 hover:scale-110" />
            <SiReact className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 text-blue-500 transform transition duration-500 hover:scale-110" />
            <SiNodedotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-2 text-green-700 transform transition duration-500 hover:scale-110" />
          </div>
          <motion.button 
            className="border-2 border-black text-black px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-xl mb-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
          </motion.button>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-blue-700" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black" />
            </a>
          </div>
        </motion.div>
        <div className="absolute bottom-4 left-4">
          <HiMiniArrowUturnDown 
            className="w-12 h-12 text-gray-700 cursor-pointer ml-14"
            onClick={() => scrollToSection('skills-section')}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="min-h-screen w-full max-w-4xl mx-auto mt-12 px-4 flex flex-col justify-center items-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-montaga mb-8 text-center">Major Skills</h2>
  <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 text-center max-w-2xl">
    Here are some of the key technologies and tools that I have expertise in. These skills help me build efficient, scalable, and user-friendly applications.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <div className="bg-white p-28 rounded-lg shadow-lg relative transition-transform duration-700 transform hover:scale-125 cursor-pointer">
            <SiJavascript className="w-14 h-14 text-yellow-300 absolute top-3 left-2" />
            <SiPhp className="w-14 h-14 text-violet-500 absolute top-0 right-5" />
            <PythonIcon className="absolute bottom-6 left-12" /> 
            <SiNodedotjs className="w-14 h-14 text-green-700 absolute bottom-0 right-18" />
            <SiFirebase className="w-14 h-14 text-yellow-300 absolute top-1/9 left-6 transform -translate-x-1/2 -translate-y-1/2" />
            <SiMysql className="w-14 h-14 text-black absolute top-20 right-0 transform -translate-x-1/4 -translate-y-1/4" />
            <h3 className="text-xl font-bold mt-10 text-center">Backend Development</h3>
            <p className="text-center mt-2">Experienced in developing scalable backend systems using Node.js, PHP, and Python Flask, with expertise in various databases and cloud services.</p>
          </div>
          <div className="bg-white p-28 rounded-lg shadow-lg relative transition-transform duration-700 transform hover:scale-125 cursor-pointer">
            <SiReact className="w-14 h-14 text-blue-500 absolute top-3 left-2" />
            <SiRedux className="w-14 h-14 text-purple-600 absolute top-0 right-5" />
            <SiTailwindcss className="w-14 h-14 text-blue-500 absolute bottom-6 left-12" />
            <FigmaIcon className="absolute bottom-0 right-6" />
            <h3 className="text-xl font-bold mt-10 text-center">Frontend Development</h3>
            <p className="text-center mt-2">Skilled in creating interactive and responsive user interfaces with React, Redux, and Tailwind CSS, combined with expertise in design tools like Figma.</p>
          </div>
  </div>
</section>


{/* Experience Section */}
<section id="experience-section" className="min-h-screen w-full max-w-4xl mx-auto mt-12 px-4 flex flex-col justify-center items-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-montaga mb-8 text-center">Professional Experience</h2>
  <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 text-center max-w-2xl">
    Here are some of the key experiences and roles I have undertaken in my professional career, which have helped me build efficient, scalable, and user-friendly applications.
  </p>
  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8">
    <div className="bg-white p-20 rounded-lg shadow-lg relative transition-transform duration-700 transform hover:scale-125 cursor-pointer flex flex-col sm:flex-row sm:items-center">
    <div className="w-28 h-28 bg-white rounded-full overflow-hidden flex-shrink-0 border-2 border-black">
        <img src="/cmp1.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <h3 className="text-xl font-semibold">Software Developer </h3>
        <p className="text-sm text-gray-600">Crudops Pvt Ltd</p>
        <p className="text-sm text-gray-600">2023 April - 2024 June</p>
        <ul className="text-sm list-disc list-inside">
          <li>Primarily focus on developing Javascript framework and library applications, with some involvement in machine
          learning projects.</li>
          <li>Coordinate teams and collaborate on multiple frameworks including Python and JavaScript.</li>
          
        </ul>
      </div>
    </div>
    <div className="bg-white p-20 rounded-lg shadow-lg relative transition-transform duration-700 transform hover:scale-125 cursor-pointer flex flex-col sm:flex-row sm:items-center">
    <div className="w-28 h-28 bg-white rounded-full overflow-hidden flex-shrink-0 border-2 border-black">
        <img src="/cmp2.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4">
        <h3 className="text-xl font-semibold">Web Developer Intern</h3>
        <p className="text-sm text-gray-600">Nosce echno Solutions</p>
        <p className="text-sm text-gray-600">2022(May-November)</p>
        <ul className="text-sm list-disc list-inside">
          <li>Developed and maintained dynamic web applications using  Backend-end technologie such as PHP, enhancing user experience and site functionality</li>
          <li>Assisted in debugging and optimizing existing code, contributing to improved application performance and reliability.
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</section>




{/* project */}

<section id="project-section" className="min-h-screen w-full max-w-4xl mx-auto mt-12 px-4 flex flex-col justify-center items-center">
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-montaga mb-8 text-center">Personal Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-12 w-full flex flex-col sm:flex-row items-center">
          <div className="relative w-full sm:w-2/3 h-64 sm:h-80 md:h-96">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={project.images[currentImage]}
                alt={`${project.title} Image ${currentImage + 1}`}
                className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
            
          </div>
          
          <div className="relative w-full sm:w-1/3 h-64 sm:h-80 md:h-96 mt-4 sm:mt-0 sm:ml-4">
            <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg shadow-lg flex items-center justify-center h-full">
              <p className="text-lg sm:text-xl md:text-2xl font-light">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>


    <footer className="w-full py-4 text-black text-center text-2xl">
        <p className="text-sm">&copy; {new Date().getFullYear()} Johin K Giji— Copyright © 2024</p>
      </footer>

    </div>
  );
};

export default App;
