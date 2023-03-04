import React, { useContext } from 'react';
import { companyContext } from '../../App';

function ComponentB() {
  const company = useContext(companyContext);
  return <>{company}</>;
}

export default ComponentB;
