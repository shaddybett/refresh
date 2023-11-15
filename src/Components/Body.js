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
          <div key={news.title}  >
            <div  >
            <div  >
             
            <img className="img" src={news.urlToImage} alt={news.title} />
            <p className="title">title:{news.title}</p>
      

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
