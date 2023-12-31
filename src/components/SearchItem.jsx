import React, { useState, useEffect } from "react";
import fallback from "/src/assets/NoImage.png";
import "./styles/SearchItem.css";

const SearchItem = ({ film, handleBuy, getFilmDetails }) => {
  const [expanded, setExpanded] = useState(false);
  const [fullFilmData, setFullFilmData] = useState(null);

  //   useEffect(() => {
  //     if (expanded) {
  //       getFilmDetails(film.imdbID);
  //     }
  //   }, [expanded, film.imdbID, getFilmDetails]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchFilmDetails = async () => {
      if (expanded) {
        try {
          const data = await getFilmDetails(film.imdbID);
          setFullFilmData(data);
        } catch (error) {
          console.error("Error fetching film details: ", error);
        }
      }
    };

    fetchFilmDetails();
  }, [expanded, film.imdbID, getFilmDetails]);

  return (
    <div className={`search-item-container ${expanded ? "expanded" : ""}`}>
      <div className="title-poster">
        <h3 className="film-title">{film.Title}</h3>
        <div className="year-type-row">
          <p>Type: {film.Type}</p>
          <p>Year: {film.Year}</p>
        </div>
      </div>

      <div className="poster">
        <img
          src={film.Poster}
          onError={(e) => (e.currentTarget.src = fallback)}
          alt={film.Title}
        />
      </div>

      <div className="buttons-row">
        <button className="buyMovieBtn" onClick={() => handleBuy(film)}>
          Buy
        </button>
        <button className="more-info-btn" onClick={toggleExpanded}>
          {expanded ? "Less" : "More"}
        </button>
      </div>

      <div className="expanded_info_wrapper">
        {expanded && (
          <section className="expanded-info">
            <section className="data">
              {fullFilmData ? (
                <section>
                  <p className="plot">Plot: {fullFilmData.Plot}</p>
                  <div className="detailed-info-bottom-container">
                    <p>Runtime: {fullFilmData.Runtime}</p>
                    <p>Director: {fullFilmData.Director}</p>
                    <p>Genre: {fullFilmData.Genre} </p>
                    <p>Language: {fullFilmData.Language} </p>
                    <p>Starring: {fullFilmData.Actors} </p>
                    <p>IMDB Rating: {fullFilmData.imdbRating} </p>
                    <p>Metascore: {fullFilmData.Metascore} </p>
                    <a href={`http://www.imdb.com/title/${film.imdbID}`}>
                      <p>IMDB</p>
                    </a>
                  </div>
                </section>
              ) : (
                <p>Loading film details...</p>
              )}
            </section>
          </section>
        )}
      </div>
    </div>
    // <div>
    //   <div className="posterContainer">
    //     <img
    //       className="poster"
    //       src={film.Poster}
    //       onError={(e) => (e.currentTarget.src = fallback)}
    //       alt={film.Title}
    //     />
    //   </div>

    //   <div>
    //     <h3 className="filmTitle">{film.Title}</h3>
    //     <p>Type: {film.Type}</p>
    //     <p>Year: {film.Year}</p>
    //     <p>IMDB ID: {film.imdbID}</p>
    //     <a href={`http://www.imdb.com/title/${film.imdbID}`}>IMDB Page</a>
    //   </div>

    //   <div>
    //     <button className="buyMovieBtn" onClick={() => handleBuy(film)}>
    //       Buy
    //     </button>
    //     <button
    //       className="more-info-btn" onClick={toggleExpanded}
    //     //   onClick={() => {
    //     //     setExpanded(!expanded);
    //     //     getFilmDetails(film.imdbID);
    //     //     setSelectedFilm(film);
    //     //   }}

    //     >
    //       {expanded ? "LESS" : "MORE"}
    //     </button>
    //     {expanded && (
    //       <section className="expanded-info">
    //         <section className="data">
    //           {fullFilmData ? (
    //             <div>
    //               <h3>Runtime: {fullFilmData.Runtime}</h3>
    //               <h3>Director: {fullFilmData.Director}</h3>
    //               <h4>Released: {fullFilmData.Released} </h4>
    //               <p>Plot: {fullFilmData.Plot}</p>
    //               <h4>IMDB Rating: {fullFilmData.imdbRating} </h4>
    //               <h4>Metascore: {fullFilmData.Metascore} </h4>
    //             </div>
    //           ) : (
    //             <p>Loading film details...</p>
    //           )}
    //         </section>
    //       </section>
    //     )}
    //   </div>
    // </div>
  );
};

export default SearchItem;
