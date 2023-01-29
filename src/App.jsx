import React, { useEffect, useState } from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import './App.scss';
import axios from 'axios';
import Footer from './components/Footer/Footer';

function App() {

  const url = 'https://api.github.com/repos/facebook/react';
  const [repoStats, setRepoStats] = useState({});
  const [error, setError] = useState({ status: false, message: '' });

  useEffect(() => {
    axios.get(url).then(res => {
      if (res.status === 200) {
        setRepoStats(res.data);
      }
    }).catch((err) => {
      setError((prevErr) => ({ status: true, message: err.response.data.message }));
    });
  }, []);

  return (
    <div className="App">
      <Header data={repoStats} />
      {
        error.status ? <span className={styles.error}>{error.message}</span> : <Body data={repoStats} />
      }
      <Footer />
    </div>
  )
}

export default App
