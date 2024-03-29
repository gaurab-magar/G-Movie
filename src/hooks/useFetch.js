import { useEffect, useState } from "react";

export const useFetch = (apipath , queryTerm="") => {
    const[data , setData]=useState([]);
    const url = `https://api.themoviedb.org/3/${apipath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchdata(){
          let response= await fetch(url);
          let json = await response.json();
          setData(json.results);
        }
        fetchdata()
      },[url])
  return (
    {data}
  )
}
