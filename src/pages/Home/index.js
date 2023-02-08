import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/v1/partners', {
        headers: {
          Authorization: '67890'
        }
      });
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      { data ? <p>{ JSON.stringify(data) }</p> : <p>Loading...</p> }
    </div>
  );
};

export default Home;