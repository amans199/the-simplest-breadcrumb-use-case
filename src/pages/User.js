import React from 'react';

function User() {
  return (
    <div className="User">
      <header className="App-header">
        <p>This is the user page</p>
        <p>{window.location.href}</p>
      </header>
    </div>
  );
}

export default User;
