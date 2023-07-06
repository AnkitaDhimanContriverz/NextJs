import React from "react";


interface MovieProps {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  posterPath: string;
}

const MovieCard = ({
  id,
  title,
  overview,
  vote_average,
  posterPath,
}: MovieProps) => {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/noImage.jpg";

  return (
    <div className="bg-white ">
      <img src={imageUrl} alt="/" />
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>Rating- {vote_average}</p>
    </div>
  );
};

export default MovieCard;
