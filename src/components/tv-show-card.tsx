import React, { useState } from "react";

interface Props {
    name: string;
    poster_path: string;
    first_air_date: string;
    overview: string
    size?: string;
}

const TvCard = (props: Props) => {
const { name, poster_path, first_air_date, overview, size} = props;
const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };
  return (
  <div className={`flex flex-col ${size}`}>
  <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} onClick={toggleOverview}></img>
  <label className="font font-semibold flex justify-center">{name}</label>
  <p className="flex justify-center">{first_air_date}</p>

  {showOverview && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-500 rounded-lg p-4 max-w-md overflow-y-auto">
            <h2 className="flex justify-center text-lg font-bold mb-2 text-white">Overview</h2>
            <p className="text-white p-3">{overview}</p>
            <button className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-950" onClick={toggleOverview}>
              Close
            </button>
          </div>
        </div>
      )}
  </div>
  )
}

export default TvCard;