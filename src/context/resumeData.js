import React from 'react';

const ResumeContext = React.createContext({
  imagebaseurl: 'https://rbhatia46.github.io/',
  name: 'Terrence Meikle',
  role: 'Frontend Developer and Data Scientist',
  linkedinId: 'Your LinkedIn Id',
  skypeid: 'Your skypeid',
  portfolio: [
    {
      name: 'Workout Tracker',
      description: 'Track Daily Workouts',
      imgurl: '../assets/images/workout-tracker.png',
    },
    {
      name: 'project2',
      description: 'mobileapp',
      imgurl: 'images/portfolio/project.jpg',
    },
    {
      name: 'project3',
      description: 'mobileapp',
      imgurl: 'images/portfolio/project2.png',
    },
    {
      name: 'project4',
      description: 'mobileapp',
      imgurl: 'images/portfolio/phone.jpg',
    },
  ],
});

export default ResumeContext;
