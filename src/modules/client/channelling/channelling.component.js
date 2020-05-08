import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListDoctorsComponent from './listDoctors';
import BookDetailsComponent from './channellingDetails';
import { appActionSetBreadcrumb } from '../../application/app.action';
import { changeChannelStatus } from './channelling.action';
import { ChannelStatus } from './channelling.constants';
import { StepNaviComponent } from '../../common';

const ChannellingComponent = props => {
  const {
    appActionSetBreadcrumb,
    channellingReducer: { channelStatus },
    changeChannelStatus,
  } = props;
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/client/home',
      },
      {
        label: 'Channelling',
        path: '/client/channelling',
      },
    ]);
  }, []);

  const stepNavi = {
    steps: [
      {
        label: 'Select Doctors',
        status: ChannelStatus.CHANNEL_START,
      },
      {
        label: 'Channel',
        status: ChannelStatus.CHANNEL_SELECT_DOC,
      },
    ],
    onChange: changeChannelStatus,
    current: channelStatus,
  };

  const handleDocClick = (event, doc) => {
    setSelectedDoc(doc);
    changeChannelStatus(ChannelStatus.CHANNEL_SELECT_DOC);
  };

  const handleAddAnother = () => {
    changeChannelStatus(ChannelStatus.CHANNEL_START);
  };

  return (
    <div>
      <div>
        <StepNaviComponent {...stepNavi} />
      </div>
      {channelStatus === ChannelStatus.CHANNEL_START && (
        <ListDoctorsComponent handleSelectClick={handleDocClick} />
      )}
      {channelStatus === ChannelStatus.CHANNEL_SELECT_DOC && (
        <BookDetailsComponent selectedDoc={selectedDoc} />
      )}
      {channelStatus === ChannelStatus.CHANNEL_SUCCESS && (
        <div>
          <div>Channel Success</div>
          <div onClick={handleAddAnother}>Add another</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetBreadcrumb,
  changeChannelStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChannellingComponent);
