import React, { useEffect, useState } from 'react';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import './App.scss';
import axios from 'axios';

function App() {

  const url = 'https://api.github.com/repos/facebook/react';

  const [repoStats, setRepoStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then(res => {
      if (res.status === 200) {
        setRepoStats(res.data);
      }
      else {
        console.log('Something went Wrong');
      }
    });
  }, []);

  return (
    <div className="App">
      <Header data={repoStats} />
      <Body data={repoStats} />
    </div>
  )
}

export default App
