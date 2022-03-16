import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import "./App.css";
import Card from "./components/Card/Card";
import Property from './components/Property/Property';

function App() {
  const url = "https://talent.ender.com/fe-challenge/properties";
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [loadingProperty, setLoadingProperty] = useState(true);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${url}`, { token: 'dde70fd6-b600-43cd-b1d9-33250337b31a'});
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const getProperty = useCallback(async(id) => {
    try {
      const res = await axios.post(`${url}/${id}/leases`, { token: 'dde70fd6-b600-43cd-b1d9-33250337b31a'});
      setProperty(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoadingProperty(false);
  }, [])

  return (
    <div className="App">
      {loading && <div>Loading</div>}
      {!loading && (
        <div className='card_container'>
          {
            properties.map((obj, index) => (
              <Card data={obj} onClick={getProperty} key={index}/>
            ))
          }
        </div>
      )}
      {!loadingProperty && (
        <Property data={property} />
      )}
    </div>
  );
}

export default App;
