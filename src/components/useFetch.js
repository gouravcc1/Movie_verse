import { useEffect, useState } from "react"

export default function useFetch(url){

    const [movie, setMovie] = useState([]);
    const [panding, setPanding] = useState(true);
    const [error,setError]=useState(null)
    useEffect(() => {
        const abortCont=new AbortController();
        fetch(url,{signal:abortCont.signal})
          .then((res) => res.json())
        //   .then(setMovie(false))
          .then((data) => {
            setMovie(data.results)
            setPanding(false)
          })
          .catch(err => {
            if(err.name==='AbortError'){
                console.log(" fetch aborted")
            }else{
                setPanding(false)
                setError(err.messege)
            }
          })
      }, [url]);
    //   console.log(movie);
      return {movie,panding,error}
}