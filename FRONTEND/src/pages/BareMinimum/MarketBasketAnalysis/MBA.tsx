import React, { useState, useEffect } from 'react';


interface Data {
    insights: string;
    plot_url: string;
    status: string;
  }

function MBA() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('https://c241ps01mba-g463lwzijq-et.a.run.app/run_mba')
     .then(response => response.json())
     .then(data => setData(data))
     .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ width: '800px', height: '600px' }}>
      {data && data.insights? (
        <div>
          <h2>Insights:</h2>
          <p dangerouslySetInnerHTML={{ __html: data.insights }} />
        </div>
      ) : (
        <p>No insights available or Loading</p>
      )}
      {data && data.plot_url? (
        <div>
          <h2>Plot URL:</h2>
          <img src={'https://c241ps01mba-g463lwzijq-et.a.run.app/' + data.plot_url} alt="Girl in a jacket" width="500" height="600"></img>
        </div>
      ) : (
        <p>No plot URL available or Loading</p>
      )}
      {data && data.status? (
        <div>
          <h2>Status:</h2>
          <p>{data.status}</p>
        </div>
      ) : (
        <p>No status available or Loading</p>
      )}
    </div>
  );
}

export default MBA;