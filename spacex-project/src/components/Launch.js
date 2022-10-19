import React from "react";

const Launch = ({ launchName, launchId }) => {
  return (
    <article>
      <header>
        <h3>{ launchName }</h3>
      </header>
      <p>ID: { launchId }</p>
    </article>
  )
}

export default Launch;