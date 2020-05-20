import React, { useState, useEffect } from 'react';
import ListDoctorsComponent from './listDoctors';
import BookDetailsComponent from './channellingDetails';
import { changeChannelStatus } from './channelling.action';
import {
  ChannelStatus,
  HeaderInfo,
  StepNaviSteps,
} from './channelling.constants';
import { StepNaviComponent } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { commonHeaderChange } from '../../common/common.action';

const ChannellingComponent = props => {
  const dispatch = useDispatch();
  const {
    channellingReducer: { channelStatus },
  } = useSelector(state => state);

  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
  }, []);

  const stepChange = status => {
    dispatch(changeChannelStatus(status));
  };

  const handleDocClick = (event, doc) => {
    setSelectedDoc(doc);
    dispatch(changeChannelStatus(ChannelStatus.CHANNEL_SELECT_DOC));
  };

  const handleAddAnother = () => {
    dispatch(changeChannelStatus(ChannelStatus.CHANNEL_START));
  };

  const stepNavi = {
    steps: StepNaviSteps,
    onChange: stepChange,
    current: channelStatus,
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

export default ChannellingComponent;
