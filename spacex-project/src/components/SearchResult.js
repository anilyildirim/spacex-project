import React from "react";

const SearchResult = ({ launchId, name, date, success, error }) => {
  if (launchId) {
    return (
      <article className="search-result">
        <h2>Search Result</h2>
        <div className="search-result__inner">
          <header>
            <h3>{ name }</h3>
            <span className={`search-result__success-indicator ${success ? 'search-result__success-indicator--successful-launch' : ''}`} aria-hidden="true"></span>
            <span className="sr-only">{ `${success ? 'green colored indicator for the success of the launch' : 'red colored indicator for the failure of the launch'}`}</span>
          </header>
          <div className="search-result__content">
            <div className="search-result__time-info">
              <h4>Elapsed time since launch</h4>
              <time>{ date }</time>
            </div>
            <p>ID: { launchId }</p>
          </div>
        </div>
      </article>
    )
  } 

  return (
    <article className="search-result">
      <h2>Search Result</h2>
      <div className="search-result__inner">
        <strong>{error}</strong>
        <p>This means that the query that you entered was invalid. Please try again with a valid ID.</p>
      </div>
    </article>
  );
}

export default SearchResult;