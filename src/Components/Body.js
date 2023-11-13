import React from "react";
import { useEffect, useState } from "react";
export default function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?apikey=224c3858c2b5450bbbc3f81d857f08da"
    )
      .then((Response) => Response.json())
      .then((news) => {
        if (!Response === "ok") {
          return "Error fetching";
        } else {
          setData(news);
        }
      });
  }, []);
  return <div></div>;
}
