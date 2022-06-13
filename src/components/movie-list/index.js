import React, { useState, useRef, useEffect}  from "react";
import "./index.css";

function MovieList() {
const namedInputRef = useRef();
const [isLoading, setIsLoading] = useState(true);
const [movieList, setMovieList] = useState([]);

 const fetchHandler = async () => {
  setIsLoading(true);
  try {
  const response = await fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${namedInputRef.current.value}`)
  const res = await response.json();
  setIsLoading(false);
  const result = res.data.map((data) => {
    return data.Title;
  })
  setMovieList(result)
  } catch(e) {
    console.log(e);
  }
}
useEffect(() => {
  
},[])
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" ref={namedInputRef}/>
          <button className="" data-testid="submit-button" onClick={() => fetchHandler('https://jsonmock.hackerrank.com/api/movies?Year=')} >Search</button>
        </section>

        <ul className="mt-50 styled" data-testid="movieList">
          {!isLoading && movieList.length > 0 && movieList.map((data) => {
            return(<li className="slide-up-fade-in py-10" key={Math.random()}>{data}</li>)
          })
          }
        </ul>
        { !isLoading && movieList.length === 0  &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>
        }
      </div>
      
    );
}
export default MovieList;
