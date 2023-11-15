import React, { useEffect, useState } from "react";



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
      <a href="/">home</a>
      <a href="/contact">contact</a>
      
      {
      
      data ? (
        data.map((news) => (
          <div key={news.title} class="container text-center" >
            <div class="row align-items-start" >
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
