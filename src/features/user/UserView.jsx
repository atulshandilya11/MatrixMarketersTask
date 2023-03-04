import React from 'react';
import { FetchUser } from './FetchUser';

const UserView = () => {
  const [display, setDisplay] = React.useState(false);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Fetch Users
      </button>
      {display && <FetchUser />}
    </div>
  );
};

export default UserView;
