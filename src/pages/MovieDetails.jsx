import React, { useState } from 'react';
import { Form, useParams } from 'react-router-dom'
// import {dummyDateTimeData, dummyShowsData } Form '../assets/assets'

const MovieDetails = () => {
  
   
      const {id} = useParams()
      const [show, setShow] = useState(null)





 const getShow = async ()=>{
  const show = dummyShowsData.find(show => show._id === id)
  setShow 
 }
      return (
        <div>
    </div>
  )
}

export default MovieDetails;
