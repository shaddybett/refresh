import React, { useEffect, useState } from "react";
import './Style.css'


export default function Body() {
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch(
      "  http://localhost:8000/articles"
    )
      .then((Response) => Response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Sorry sir!", error));
  }, []);
  return (
    <div> 
      <div  className="link" >
      <a  href="/" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >home</a>
      <a href="/contact"  className="links"  >contact</a>
      </div>
      {
      
      data ? (
        data.map((news) => (
          <div key={news.title} class="card mb-3" >
            <div class="row g-0" >

            <div  class="card"><img src={news.urlToImage} class="img-fluid rounded-start" alt={news.title} /></div>
            <div class="col-md-8">
            <div   class="card-body">
            <p class="card-title">title:{news.title}</p>
      
            </div>
            </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading please wait</p>
      )
     
      }
    </div>
  );
}
