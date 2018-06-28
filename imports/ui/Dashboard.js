import React from 'react';

import Editor from './Editor';
import NoteList from './NoteList';
import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        <NoteList/>
        <Editor />
      </div>
    </div>
  );
};
