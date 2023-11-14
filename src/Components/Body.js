import React from "react";
import { useEffect, useState } from "react";
export default function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=224c3858c2b5450bbbc3f81d857f08da"
    )
      .then((Response) => Response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Sorry sir!", error));
  }, []);
  return (
    <div>
    {data.articles ? (data.articles.map((news)=>(
            <div key={news.title}>
                <img src={news.urlToImage} alt={news.title}/>
                <p>title:{news.title}</p>

            </div>
    ))
        ) : (<p>Loading please wait</p>
        )}
        </div>
  );
}
