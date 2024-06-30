// src/App.tsx
// import React, { useEffect, useState } from 'react';
// import { fetchDocumentById } from './firestore/users.store';
// import { DocumentData } from 'firebase/firestore';

import React from 'react';

const App: React.FC<{ userId: number | null }> = ({ userId }) => {
  return (
    <div>
      <h1>User Data</h1>
      <pre>{JSON.stringify(userId, null, 2)}</pre>
    </div>
  );
};

export default App;
