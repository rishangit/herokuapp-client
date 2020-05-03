import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListDoctorsComponent from './listDoctors';
import BookDetailsComponent from './channellingDetails';
import { appActionSetBreadcrumb } from '../../application/app.action';

const ChannellingComponent = props => {
  const { appActionSetBreadcrumb } = props;
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'Channelling',
        path: '/channelling',
      },
    ]);
  }, []);

  const handleDocClick = (event, doc) => {
    setSelectedDoc(doc);
  };

  const handleRemoceClick = event => {
    setSelectedDoc(null);
  };

  return (
    <div>
      {!selectedDoc && (
        <ListDoctorsComponent handleSelectClick={handleDocClick} />
      )}
      {selectedDoc && (
        <BookDetailsComponent
          selectedDoc={selectedDoc}
          onRemove={handleRemoceClick}
        />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChannellingComponent);
