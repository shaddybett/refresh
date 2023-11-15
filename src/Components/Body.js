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
      <div   >
      <a  href="/" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >home</a>
      <a href="/contact"  className="links"  >contact</a>
      </div>
      {
      
      data ? (
        data.map((news) => (
          <div key={news.title} class="container text-center" >
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" >
            <div class="col" >
            <span  ><img src={news.urlToImage} alt={news.title} /></span>
            <p>title:{news.title}</p>

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
