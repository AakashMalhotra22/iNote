import React from 'react'
import AddNote from './AddNote';
import Notes from './Notes';

const Home = () => {
  
  return (
    <>
    <div className="container my-3">
      <AddNote/>
      </div>
      <Notes/>
    </>

    
  )
}

export default Home
