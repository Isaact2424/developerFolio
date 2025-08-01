import React from "react";
import "./HackyBird.scss"; // Optional styling if needed
import { hackyBird } from "../../portfolio";


export default function HackyBird() {
 if (!hackyBird.display) return null;


 return (
   <div className="main" id="hackyBird">
     <div className="hacky-bird-container">
       <h1>{hackyBird.title}</h1>
       <p>{hackyBird.subtitle}</p>
       <p>{hackyBird.description}</p>
       <div
         className="game-embed-wrapper"
         dangerouslySetInnerHTML={{ __html: hackyBird.embed }}
       />
     </div>
   </div>
 );
}
