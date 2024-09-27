import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setcount] = useState(1);

  return (
    <div className="content">
      <h1>Single Page Application</h1>

      <button onClick={() => setcount(count + 1)}>Click me {count}</button>
    </div>
  );
};

export default App;
