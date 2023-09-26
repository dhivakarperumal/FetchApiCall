import React from 'react';
import './Home.css'

const Home = () => {
  return (
      <div className='banner'>
        <h1>UserDetails</h1>
        <p>Provides core user information. Implementations are not used directly by Spring 
          Security for security purposes. They simply store user information</p>
        <button className='buttons'>User</button>
      </div>
  )
}

export default Home