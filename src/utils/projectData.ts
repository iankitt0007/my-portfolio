interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'A detailed description of the first project.',
      image: '/images/project1.png',
      link: 'https://github.com/your-profile/project-one',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A detailed description of the second project.',
      image: '/images/project2.png',
      link: 'https://github.com/your-profile/project-two',
    },
  ];
  
  export default projects;
  