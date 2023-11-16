import React, { useEffect, useState } from "react";
import "./Style.css";

export default function Body() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/articles")
      .then((response) => response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Sorry sir!", error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((news) =>
      news.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, search]);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < Math.ceil(filteredData.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleSearch() {
    const filtered = data.filter((news) =>
      news.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }

  function handleSearchInputChange(event) {
    setSearch(event.target.value);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div>
      <div className="link">
        <a
          href="/"
          className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          home
        </a>
        <a href="/contact" className="links">
          contact
        </a>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="search by title"
          value={search}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.slice(startIndex, endIndex).map((news) => (
            <div key={news.title} className="card mb-3">
              <div className="row g-0">
                <div className="card">
                  <img
                    src={news.urlToImage}
                    className="img-fluid rounded-start"
                    alt={news.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-title">title:{news.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matching results found</p>
        )}
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Back
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filteredData.length / pageSize)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
