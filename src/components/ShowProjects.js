import React, { useState, useEffect} from 'react';
import axios from 'axios';

const ShowProjects = () => {

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:4000/api/projects')
    .then(response => {
      setProjects(response.data);
    })
  }, [])

  return (
    <div className="App">
      {projects.map(element => {
        return (
          <div key={element.id} style={{ width: '500px', margin: 'auto' }} className="card">
            <div className="card-content">
              <p className="title">
                {element.name}
              </p>
              <p className="subtitle">
                {element.description}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <a href={`/${element.id}`}>View Actions</a>
                </span>
              </p>
            </footer>
          </div>
        )
      })}
    </div>
  );
}

export default ShowProjects;