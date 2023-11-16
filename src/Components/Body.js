// import React, { useEffect, useState } from "react";
// import "./Style.css";

// export default function Body() {
//   const [data, setData] = useState([]);
//   // const [search,setSearch]= useState()
//   const[currentPage, setCurrentPage] = useState(1)
//   let pageSize = 9;

//   useEffect(() => {
//     fetch("  http://localhost:8000/articles")
//       .then((Response) => Response.json())
//       .then((news) => setData(news))
//       .catch((error) => console.error("Sorry sir!", error));
//   }, []);

// function prevPage(){
//   if(currentPage>1){
//     setCurrentPage(currentPage-1)
//   }

// }

// function nextPage(){
// setCurrentPage(currentPage + 1)
// }
//   // const filteredData = data.filter((news)=>
//   // news.title.toLowerCase().includes(search.toLowerCase())
//   // );

//   // function handleSearch(event){
//   //   setSearch(event.target.value)
//   // }

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   return (
//     <div>
//       <div className="link">
//         <a
//           href="/"
//           class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
//         >
//           home
//         </a>
//         <a href="/contact" className="links">
//           contact
//         </a>
//       </div>

//       {/* <input type="text" placeholder="search by title" value={search} onChange={handleSearch}/> */}

//       <div className="card-container">
//         {data ? (
//           data.slice(startIndex, endIndex).slice(0, pageSize).map((news) => (
//             <div key={news.title} class="card mb-3">
//               <div class="row g-0">
//                 <div class="card">
//                   <img
//                     src={news.urlToImage}
//                     class="img-fluid rounded-start"
//                     alt={news.title}
//                   />
//                 </div>
//                 <div class="col-md-8">
//                   <div class="card-body">
//                     <p class="card-title">title:{news.title}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading please wait</p>
//         )}
//       </div>
//       <div>
//           <div>
//             <button onClick={prevPage} disabled={currentPage === 1}>
//               Back
//               </button>
//             <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / pageSize)}>
//               Next
//               </button>
//           </div>
//         </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Style.css";

export default function Body() {
  const [data, setData] = useState([]);
  // const [search,setSearch]= useState()
  let pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("  http://localhost:8000/articles")
      .then((Response) => Response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Sorry sir!", error));
  }, []);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }}

    function nextPage() {
      setCurrentPage(currentPage + 1);
    }
  

  // const filteredData = data.filter((news)=>
  // news.title.toLowerCase().includes(search.toLowerCase())
  // );

  // function handleSearch(event){
  //   setSearch(event.target.value)
  // }

  return (
    <div>
      <div className="link">
        <a
          href="/"
          class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          home
        </a>
        <a href="/contact" className="links">
          contact
        </a>
      </div>

      {/* <input type="text" placeholder="search by title" value={search} onChange={handleSearch}/> */}

      <div className="card-container">
        {data ? (
          data.slice(0, pageSize).map((news) => (
            <div key={news.title} class="card mb-3">
              <div class="row g-0">
                <div class="card">
                  <img
                    src={news.urlToImage}
                    class="img-fluid rounded-start"
                    alt={news.title}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <p class="card-title">title:{news.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading please wait</p>
        )}
      </div>
      <div>
        <button onClick={prevPage}disabled={currentPage===1}>Back</button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / pageSize)} >Next</button>
      </div>
    </div>
  );
}