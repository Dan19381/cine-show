import { useEffect, useState } from "react";

export default function App() {
  type MovieData = {
    Title?: string;
    Year?: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Ratings?: { source: string; value: string }[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    imdbID?: string;
    Type?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
  };
  const [data, setData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=c433e78",
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <h1>CineShow</h1>
      <div className="m-4 p-4 bg-gray-100 rounded shadow">
        <p>{data?.Title}</p>
        <p>{data?.Year}</p>
        <p>{data?.Rated}</p>
        <p>{data?.Released}</p>
        <p>{data?.Runtime}</p>
        <p>{data?.Genre}</p>
        <p>{data?.Director}</p>
        <p>{data?.Writer}</p>
        <p>{data?.Actors}</p>
        <p>{data?.Plot}</p>
        <p>{data?.Language}</p>
        <p>{data?.Country}</p>
        <p>{data?.Awards}</p>
        <img src={data?.Poster} alt={data?.Title} />
      </div>
    </div>
  );
}
