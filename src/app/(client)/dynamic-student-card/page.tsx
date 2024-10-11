 import React from 'react'
import StudentCard from '../components/student-cards/student-cards'
 
 function Home() {

  const studentData =[

    {
      name: 'John Doe',
      role: 'Fronend Developer',
      program:'GIAIC',
      image: 'https://picsum.photos/200/300',
      SocialLinks: {
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe',
      }
    },
    {
      name: 'John Doe',
      role: 'Fronend Developer',
      program:'GIAIC',
      image: 'https://picsum.photos/200/300',
      SocialLinks: {
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe',
      }
    },
    {
      name: 'John Doe',
      role: 'Fronend Developer',
      program:'GIAIC',
      image: 'https://picsum.photos/200/300',
      SocialLinks: {
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe',
      }
    } 
  ]
   return (
<div className="flex f items-center ">
      {studentData.map((students, index) => (
        <StudentCard key={index} {...students} />
      ))}
    </div>
   )
 }
 
 export default Home
 