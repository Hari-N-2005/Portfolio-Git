// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Hari-N-2005', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Carbon Tally',
          description:
            'CarbonTally is a webstie that uses a xgboost model to predict the carbon emitted by a person per month. This website provides a seamless UI that enables users to track their carbon emission , get tips and provides a local leaderboard that shows the carbon emissions of people in a locality.',
          imageUrl:
            'https://github.com/Hari-N-2005/NasaSpaceChallenge/blob/main/Nasa/src/assets/Images/logo.jpg?raw=true',
          link: '',
        },
        {
          title: 'Portfolio Website',
          description:
            ' Here, you\'ll find a collection of my projects, showcasing my skills in building responsive, user-friendly, and visually appealing web applications. Explore my work, learn more about me, and feel free to get in touch!',
          imageUrl:
            'https://github.com/Hari-N-2005/Portfolio-Git/blob/main/public/logo.png?raw=true',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hari',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hari-n05',
    twitter: 'hari_n05',
    //mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '_.h.a_r.i.__',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '',
    email: 'harigovindn700@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1v51Ps270VuoKKAmEFySHdRHwShM9ydtq', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Python',
    'Java',
    'C',
  ],
  /*experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],*/
  /*certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],*/
  /*educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],*/
  publications: [
    {
      title: 'Hey Guys, I\'m Hari Govind N.',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        ' I\'m a passionate Front-End Developer with a keen eye for design and a love for crafting seamless user experiences. Currently studying at Model Engineering College, Thrikakkara, I specialize in building responsive, intuitive, and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I thrive on bringing creative ideas to life through clean and efficient code. I’m always eager to learn, experiment, and push the boundaries of front-end development. Let\'s build something amazing together!',
    },
    /*{
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  /*footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,*/

  enablePWA: true,
};

export default CONFIG;
