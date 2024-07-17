import React, { useEffect, useState } from "react";

import TvCard from "../components/tv-show-card";
import { getAiringToday } from "../services/tv-show/api-airing-today";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const TvShow = () => {
  const [nowPlayingTv, setNowPlayingTv] = useState<ResponseTvShow>();

  useEffect(() => {
fetchTv();
  }, [])
  
  const fetchTv = async () => {

    try{

      const response = await getAiringToday();
      setNowPlayingTv(response);

    }catch (error){
      console.log(error);

    }
    
  };

  return (
  <div className="flex flex-col p-5">
    <label className="text-2xl font-bold mb-5 flex flex-wrap justify-center">Airing Today</label>
    <div className="text-md flex-row flex flex-wrap gap-5 justify-center">
      {nowPlayingTv?.results.map((item: TvShow) => (
      <TvCard
      poster_path={item.poster_path}
      name={item.name}
      first_air_date={item.first_air_date}
      overview={item.overview}
      size="w-40"
      />
     ))}
    </div>
  </div>
  
  );
};

export default TvShow;
