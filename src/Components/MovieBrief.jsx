import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import "../assets/css/style.css"


export default function MovieBrief() {
  var [movies, setmovies] = useState([])
  var [image, setimage] = useState([])

  var { _id } = useParams()

  async function getAPIData() {
    try{
    var rawdata = await fetch("https://api.tvmaze.com/shows/" + _id)
    var result = await rawdata.json()
    setmovies(result)
    setimage(result.image.original)    

  }
  catch(error){
    console.error('Error fetching data:', error);

  }
  }

  useEffect(() => {
    getAPIData()
  },[]);

  return (
    <div>
    <div className='firstsection row'>

      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
        <img src={image} className="movieimage" alt="..." />
      </div>

      <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5 text-color">
        <h1>{movies.name}</h1>
        <h1>Type - {movies.type}</h1>
        <h1>Language - {movies.language}</h1>
        {/* <h1>Rating - {movies.rating.average}</h1> */}
        <h1>Status - {movies.status}</h1>

      </div>

    </div>
    <div className='summary container'>
    <p>{movies.summary.slice(3,movies.summary.length-4)}</p>
    </div>

    <button className='button-87'>Book Now</button>
    </div>
  );
}

