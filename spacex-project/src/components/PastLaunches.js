import React from "react";
import Launch from "./Launch";

const PastLaunches = ({ launches }) => {
  return (
    <section aria-labelledby="past-launches-title" className="past-launches">
      <header>
        <h2 id="past-launches-title">Past Launches</h2>
      </header>
      <ul>
        { launches.map(launch => {
          return (
            <li key={launch.id}>
              <Launch 
                launchName= { launch.name }
                launchId= { launch.id }
              />
            </li>
          )})
        }
      </ul>
    </section>
  )
}

export default PastLaunches;