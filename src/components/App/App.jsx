import React from 'react';
import Reader from '../Reader';
import publications from '../../publications.json';

const App = () => (
  <div className="App">
    <Reader publications={publications} />
  </div>
);

export default App;
