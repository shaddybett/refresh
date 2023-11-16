import React, { useEffect, useState } from "react";
import "./Style.css";

export default function Body() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => response.json())
      .then((news) => setData(news))
      .catch((error) => console.error("Sorry sir!", error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((news) =>
      news.title.toLowerCase().includes(search.toLowerCase())
    );

    // Sort by relevance, where articles with the search term in the title come first
    const sortedFilteredData = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const searchTerm = search.toLowerCase();

      const aTitleIncludesSearch = aTitle.includes(searchTerm);
      const bTitleIncludesSearch = bTitle.includes(searchTerm);

      if (aTitleIncludesSearch && !bTitleIncludesSearch) {
        return -1;
      } else if (!aTitleIncludesSearch && bTitleIncludesSearch) {
        return 1;
      } else {
        return 0;
      }
    });

    setFilteredData(sortedFilteredData);
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
    // Sort by relevance, where articles with the search term in the title come first
    const sortedFilteredData = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const searchTerm = search.toLowerCase();

      const aTitleIncludesSearch = aTitle.includes(searchTerm);
      const bTitleIncludesSearch = bTitle.includes(searchTerm);

      if (aTitleIncludesSearch && !bTitleIncludesSearch) {
        return -1;
      } else if (!aTitleIncludesSearch && bTitleIncludesSearch) {
        return 1;
      } else {
        return 0;
      }
    });

    setFilteredData(sortedFilteredData);
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
          className="search"
          type="text"
          placeholder="search by title"
          value={search}
          onChange={handleSearchInputChange}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
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
      <div className="paginate">
        <button
          className="pagA"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <button
          className="pagB"
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filteredData.length / pageSize)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
