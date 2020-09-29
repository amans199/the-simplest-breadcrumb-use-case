import React from 'react';

function UserList() {
  return (
    <div className="User">
      <header className="App-header">
        <p>This is the user list page</p>
        <p>{window.location.href}</p>
      </header>
    </div>
  );
}

export default UserList;
