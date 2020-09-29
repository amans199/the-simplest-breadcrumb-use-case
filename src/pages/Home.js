import React from 'react';

function Home() {
  return (
    <div className="User">
      <header className="App-header">
        <p>This is the Home page</p>
        <p>{window.location.href}</p>
      </header>
    </div>
  );
}

export default Home;
