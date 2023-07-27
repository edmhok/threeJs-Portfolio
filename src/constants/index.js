import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vuejs,
    angularjs,
    nestjs,
    nextjs,
    redux,
    tailwind,
    firebase,
    nodejs,
    php,
    mongodb,
    mysql,
    git,
    wordpress,
    figma,
    docker,
    digisearch,
    dripcreative,
    snapbooster,
    coders,
    inlight,
    sandbox,
    advice,
    syntax,
    wpcrunchy,
    offsourcing,
    lumaprints,
    alreno,
    empower,
    themetribe,
    marquess,
    imageeditor,
    maruland,
    nexus,
    nfty,
    threejs,
    moopians,
    empowers,
    alrenomob
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Application Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Angular JS",
      icon: angularjs,
    },
    {
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sr. Software Engineer",
      company_name: "Lumaprints",
      icon: lumaprints,
      iconBg: "#E6DEDD",
      date: "March 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using Vue.js, Nuxt, Laravel-Bagisto, MySQL",
        "Created an image editor application and contributed features on the backend of the business for customer handling application.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Freelancing - Artificers",
      icon: alreno,
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: [
        "Alreno LPG: Created a simple Arduino project weighing scale that connects to WiFi. The Arduino will send the weight to AWS Lambda and the Lambda stores data in Firebase FireStore. The data will also be fetched from the ReactNative Expo app that I also have been built. The technologies involved are : ReactNative-Expo, Arduino, AWS Lambda, NodeJS Serverless, Firebase-Firestore.",
        "SuSu Mama PNG: A project that I have been starting since 2013 and just been updating when they have a request for new features. It’s a system, web based application for health centers in Papua New Guinea. The technologies involved are : PHP Custom Build, MySQL, jQuery, Vanilla JS, Apache, Fingerprint Biometric Scanning.",
        "WavesStock : A simple application wherein the user can search for premium images on the internet such as Shutterstock. The app fetches data from a private confidential API from China. Technology : ReactJS, Nodejs Serverless, Firebase-firestore",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "EmpowerWealth",
      icon: empower,
      iconBg: "#E6DEDD",
      date: "2018 - 2021",
      points: [
        "I have created a portal for clients with micro-apps and services to help provide advisory to clients for property investments. ReactJS, AngularJS, ExpressJS, NodeJS, Webpack, MongoDB",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Digisearch",
      icon: digisearch,
      iconBg: "#E6DEDD",
      date: "2019",
      points: [
        "I have created a javascript based small scale ecommerce site that excludes the experience of UX reloading when navigating through pages.", 
        "Technologies used here are NextJS, Laravel and MySQL",
      ],
    },
    {
      title: "Software Developer",
      company_name: "DripCreative",
      icon: dripcreative,
      iconBg: "#E6DEDD",
      date: "2017 - 2018",
      points: [
        "Creating a recruitment system for blue collar workers by connecting workers and jobs.",
        "Technologies used here are ReactJS, NodeJS, ExpressJS, AdonisJS, MongoDB" 
      ],
    },
    {
      title: "Software Developer",
      company_name: "SnapBooster",
      icon: snapbooster,
      iconBg: "#E6DEDD",
      date: "2016 - 2017",
      points: [
        "Creating an app that records photo receipts from clients and then converts these as a text base character to be stored in the database.", 
        "Technologies used here are VanillaJS, AWS Lambda Function",
      ],
    },
    {
      title: "Developer, Manager, Co-Founder",
      company_name: "CodersforHire",
      icon: coders,
      iconBg: "#E6DEDD",
      date: "2015 - 2016",
      points: [
        "Creating an app that records photo receipts from clients and then converts these as a text base character to be stored in the database.", 
        "Technologies used here are VanillaJS, AWS Lambda Function",
      ],
      
    },
    {
      title: "Software Engineer, Co-Founder",
      company_name: "Inlight Marketing",
      icon: inlight,
      iconBg: "#E6DEDD",
      date: "2014 - 2015",
      points: [
        "Create client portal software for MLM (Multi Level Marketing) with cash flows including binary system, genealogy network, and graphs). Custom PHP, MySQL"
      ],
    },
    {
      title: "Senior Web Developer",
      company_name: "SandBox Digital",
      icon: sandbox,
      iconBg: "#E6DEDD",
      date: "2013 - 2014",
      points: [
        "Provides websites and advertising landing pages for Australian clients. Example popular client is Shell Rimula. Wordpress, SCSS, jQuery"
      ],
    },
    {
      title: "Freelance Lead Tech",
      company_name: "Advice Interactive",
      icon: advice,
      iconBg: "#E6DEDD",
      date: "2012 - 2013",
      points: [
        "Create a client portal with SEO tools for boosting client’s web presence. Work includes creating Data Scraping scripts.",
        "Custom PHP, RegEx, MySQL, jQuery, SOAP, Paypal API, Google API"
      ],
    },
    {
      title: "Freelance Wordpress Developer",
      company_name: "Syntax Marketing",
      icon: syntax,
      iconBg: "#2e2e2e",
      date: "2012",
      points: [
        "Create small to medium scale size wordpress sites for clients using Wordpress, jQuery, SCSS",
      ],
    },
    {
      title: "StartUp Owner",
      company_name: "ThemeTribe",
      icon: themetribe,
      iconBg: "#E6DEDD",
      date: "2012 - 2013",
      points: [
        "Creating various wordpress themes and plugins from scratch named from Filipino Tribes using Wordpress, jQuery, SCSS",
      ],
    },
    {
      title: "Developer, Co-Founder",
      company_name: "WPCrunchy",
      icon: wpcrunchy,
      iconBg: "#E6DEDD",
      date: "2011 - 2012",
      points: [
        "Creating premium wordpress themes from scratch, elegant themes support agents, custom wordpress plugins providers using Wordpress, jQuery, SCSS",
      ],
    },
    {
      title: "Jr / Sr Developer",
      company_name: "OffSourcing Inc.",
      icon: offsourcing,
      iconBg: "#E6DEDD",
      date: "2009 - 2011",
      points: [
        "Creates multi-branch ecommerce for a jewelry shop. Also provides wordpress sites for different clients. PHP, jQuery, JS, Yahoo Stores, Wordpress, CSS, MySQL, GoogleMapAPI, PaypalAPI",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He consistently delivered clean, high-quality code. He demonstrated a strong work ethic and was a pleasure to collaborate with. During our time working together, he focused on front-end development for a SAAS product.",
      name: "Rodger Yonley",
      designation: "Senior Software Engineer",
      company: "Virtuous",
      image: "https://media.licdn.com/dms/image/C5603AQFcuGQ1YMPj3w/profile-displayphoto-shrink_400_400/0/1651506753884?e=1695859200&v=beta&t=ua-taEPqDBcquNxGFVJezHOWGSYlZ63GqrnKMI2vZRo",
    },
    {
      testimonial:
        "He is really good in terms of Software Engineering in General. Easy to communicate and collaborate with. He's really good at working with JavaScript and its libraries such as React.",
      name: "Dann Russell Molina",
      designation: "Mobile Application Developer",
      company: "Skodel",
      image: "https://media.licdn.com/dms/image/D5603AQFKVrRDHZjKWg/profile-displayphoto-shrink_400_400/0/1669847629632?e=1695859200&v=beta&t=BYuUnX1dD08zl4OIvzOmeDvW_jLe03oFAbgC3gg4_To",
    },
    {
      testimonial:
        "One of the best engineer I’ve work with. Knowledge and skills are superb with excellent eye on quality software craftsmanship.",
      name: "Junrill Galvez",
      designation: "Full-Stack Software Architect & DevOps ",
      company: "Freelancer",
      image: "https://media.licdn.com/dms/image/C5603AQHWrLGAw_6mzw/profile-displayphoto-shrink_400_400/0/1592378921232?e=1695859200&v=beta&t=lUASpDNS4i6-NsXs8Kwy2dN-5Np3lgXu21Baw4ecHls",
    },
  ];
  
  const projects = [
    {
      name: "Maruland",
      description:
        "A Web3 with an endless metaverse play-to-own adventure game like Pokemon, Digimon and Neopets that can earn coin.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: maruland,
      source_code_link: "https://maruland.io/",
    },
    {
      name: "Lumaprints",
      description:
        "Provides high-quality canvas, paper, metal, peel & stick, and framed prints by using archival inks and top-of-the-line printers regularly calibrated to ensure color accuracy.",
      tags: [
        {
          name: "VueJS",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel-Bagisto",
          color: "green-text-gradient",
        },
        {
          name: "Nuxt",
          color: "pink-text-gradient",
        },
      ],
      image: imageeditor,
      source_code_link: "https://www.lumaprints.com/",
    },
    {
      name: "Marquess Global Limited",
      description:
        "A turnkey brokerage solution for financial and investment markets from Malaysia",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: marquess,
      source_code_link: "https://mqg.io/",
    },
    {
      name: "Nexus WorldBook",
      description:
        "World’s first crypto liquidity ecosystem, committed to building a cohesive network for both makers and takers.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: nexus,
      source_code_link: "https://nexusworldbook-com.stackstaging.com/",
    },
    {
      name: "NFTy",
      description:
        "Easiest place to create, buy and sell NFTs. Mint your very own collectible and let your biggest fans own it forever, literally.",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        // {
        //   name: "Web3",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "Nuxt",
        //   color: "pink-text-gradient",
        // },
      ],
      image: nfty,
      source_code_link: "https://nftyfy.com/",
    },
    {
      name: "Moopians",
      description:
        "A turnkey brokerage solution for financial and investment markets from Malaysia",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: moopians,
      source_code_link: "https://themoopians.io/",
    },
    {
      name: "Empower Wealth Advisory",
      description:
        "Financially transform your life by investing in property today",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "M E A N",
          color: "green-text-gradient",
        },
        {
          name: "M E R N",
          color: "pink-text-gradient",
        },
      ],
      image: empowers,
      source_code_link: "https://empowerwealth.com.au/",
    },
    {
      name: "Alreno Mobile",
      description:
        "Created a simple Arduino project weighing scale that connects to WiFi",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase Firestore",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: alrenomob,
      source_code_link: "https://github.com/lchentanaone/Alreno-backup?fbclid=IwAR2w4lu47mwLgBrRz0YNbFA0uR22JGHvrXvXuF05IqycqWkFHF_g7FO3q04",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };