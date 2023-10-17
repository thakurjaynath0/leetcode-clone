import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./AllProblems.css"

const AllProblemsPage = () => {
  const [problems, setProblems] = useState([]);

  const init = async () => {
    try {
      const response = await fetch("http://localhost:3000/problems", {
        method: "GET",
      });

      if (response.ok) {
        const json = await response.json();
        setProblems(json.problems);
      } else {
        // Handle the error here if needed
        console.error("Error fetching data");
      }
    } catch (error) {
      // Handle any network errors here
      console.error("Network error", error);
    }
  }

  useEffect(() => {
    init();
  }, []); // An empty dependency array means this effect will run once after the initial render



  return (
    <div id="allproblems">
      <table>
        <tbody>

          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob,index) => (
            <tr>
              <Link to={`/problems/:${prob.problemId}`}>
                <td>{prob.title}</td>
              </Link>
              <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
              <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default AllProblemsPage