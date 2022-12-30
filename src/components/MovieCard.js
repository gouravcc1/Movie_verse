import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"
export default function MovieCard(props){
    const [hovering,setHovering]=useState(false);
    function onhver(){
        setHovering(true);
     }
     function onnthvr(){
        setHovering(false);
      }
    return (
        <div>
       <Link to={"/detail/"+props.id+"/"+props.api} >
        <div className="Card" 
        onMouseOver={onhver}
        onMouseOut={onnthvr}
        onClick={()=>{
            console.log("hii");
        }}
        >
        {!hovering &&<img alt="movie "  className="IMG"   src={props.Src} />}
        {hovering  && <img  alt="movie " className="IMG IMG_BLUR Increaceimgsize"   src={props.Src} />}
        {hovering  && <h2   className="Title">{props.title}</h2>}
        </div>
        </Link>
        </div>
    )
}