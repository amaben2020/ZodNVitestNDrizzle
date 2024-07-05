import { userInfo } from '@/schema/parseAvailability';
import React from 'react';

const TestPage = () => {
  const userMockData = {
    firstName: 'Amala Ben',
    lastname: 'Benoski',
    email: 'ameabem@sa.sa',
  };

  const showUser = userInfo.parse(userMockData);
  return <div>TestPage {showUser.firstName}</div>;
};

export default TestPage;
