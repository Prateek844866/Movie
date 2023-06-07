import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css"

export default function Movies() {
  var [movies, setmovies] = useState([])


  async function getAPIData() {
    var rawdata = await fetch("https://api.tvmaze.com/search/shows?q=all")
    var result = await rawdata.json()
    setmovies(result)
  }

  useEffect(() => {
    getAPIData()
  }, [])

  return (
    <div className='row container'>
      {
        movies.map((item, index) => {
          return <div key={index} className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.show.image.original} className="img-fluid rounded-start movie-image" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.show.name}</h5>
                    <p className="card-text">Language - {item.show.language}</p>
                    <p className="card-text">Type - {item.show.type}</p>
                    <Link to={"/movie/" + item.show.id} className="btn mybtn btn-sm button-24">Book Tickets</Link>
                    <p className="card-text premiered"><small className="text-body-secondary">Premiered - {item.show.premiered}</small></p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        })
      }

    </div>
  )
}

