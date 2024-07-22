import React from 'react';

const TabContents = ({ id, activeTab, comps }) => {
  return activeTab === id ? <div className=''> {comps} </div> : '';
};

export default TabContents;
