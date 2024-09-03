import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/Footer'
import '../ForApplicants/ForApplicants.css';

const SUPPORTED_COUNTRIES = ['at', 'au', 'be', 'br', 'ca', 'ch', 'de', 'es', 'fr', 'gb', 'in', 'it', 'mx', 'nl', 'nz', 'pl', 'sg', 'us', 'za'];

const ForApplicants = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [countryCode, setCountryCode] = useState('us');
  const [filters, setFilters] = useState({
    fullTime: false,
    partTime: false,
    contract: false,
    permanent: false
  });
  const [page, setPage] = useState(1);

  const appId = import.meta.env.VITE_APP_ID;
  const appKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const filterParams = Object.entries(filters)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(',');

    const apiUrl = `https://api.adzuna.com/v1/api/jobs/${countryCode}/search/${page}?app_id=${appId}&app_key=${appKey}&results_per_page=20&title_only=${searchQuery}${filters.fullTime ? '&full_time=1' : ''}${filters.partTime ? '&part_time=1' : ''}${filters.contract ? '&contract=1' : ''}${filters.permanent ? '&permanent=1' : ''}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData.results || []);
      } catch (error) {
        setError(`Failed to fetch data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, countryCode, filters, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
    setPage(1);
  };

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.checked
    }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const section = document.getElementById('what-we-offer');
    if (section) {
      section.style.opacity = 1;
      section.style.animation = 'scrollUp 0.6s ease-out';
    }
  }, []);

  if (loading) return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div id='what-we-offer' className="what-we-offer-section">
      <div className="sidebar">
        <div className="country-selector">
          <label htmlFor="country">Select Country:</label>
          <select id="country" value={countryCode} onChange={handleCountryChange}>
            {SUPPORTED_COUNTRIES.map(code => (
              <option key={code} value={code}>{code.toUpperCase()}</option>
            ))}
          </select>
        </div>
        <div className="filters">
          <h3>Job Type Filters</h3>
          <label>
            <input
              type="checkbox"
              name="fullTime"
              checked={filters.fullTime}
              onChange={handleFilterChange}
            />
            Full Time
          </label>
          <label>
            <input
              type="checkbox"
              name="partTime"
              checked={filters.partTime}
              onChange={handleFilterChange}
            />
            Part Time
          </label>
          <label>
            <input
              type="checkbox"
              name="contract"
              checked={filters.contract}
              onChange={handleFilterChange}
            />
            Contract
          </label>
          <label>
            <input
              type="checkbox"
              name="permanent"
              checked={filters.permanent}
              onChange={handleFilterChange}
            />
            Permanent
          </label>
        </div>
      </div>
      <div className="content">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search for a job title or company"
            className="form-control search-input"
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        <h2>Here's What We Got For You</h2>
        <div className="container">
          <div className="card-container">
            {data.map((item) => (
              <div key={item.id} className="job-card">
                <h5>{item.title}</h5>
                <p>Posted on {item.created}</p>
                <p>Salary: Approximately {item.salary_min ? `${item.salary_min}` : 'N/A'} a year</p>
                <p>{item.description.slice(0, 200)}...</p>
                <a href={item.redirect_url} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary">Click to View Job Description</button>
                </a>
                {item.tags && (
                  <div>
                    {item.tags.map(tag => (
                      <span key={tag} className="badge badge-secondary">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            disabled={page <= 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ForApplicants;
