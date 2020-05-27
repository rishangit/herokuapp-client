import React, { useState, useEffect } from 'react';
import ListDoctorsComponent from './listDoctors';
import BookDetailsComponent from './channellingDetails';
import { changeChannelStatus, clientSelectDoctor } from './channelling.action';
import {
  ChannelStatus,
  HeaderInfo,
  StepNaviSteps,
  CommonMenuBarBtn,
} from './channelling.constants';
import { StepNaviComponent, MainButtonStatus } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';
import FinalWindowCompnent from '../../common/finalWindow';

const ChannellingComponent = props => {
  const dispatch = useDispatch();
  const {
    channellingReducer: { channelStatus, selectedDoc },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(changeChannelStatus(ChannelStatus.CHANNEL_SUCCESS));
    dispatch(commonHeaderChange(HeaderInfo));
  }, []);

  useEffect(() => {
    dispatch(
      commonMenuBarButtonChange(
        !selectedDoc
          ? {
              mainButtonStatus: MainButtonStatus.BTN_REFRESH,
              mainButtonAction: '/client/channelling',
            }
          : {
              mainButtonStatus: MainButtonStatus.BTN_PLUS,
              mainButtonAction: () =>
                dispatch(changeChannelStatus(ChannelStatus.CHANNEL_SELECT_DOC)),
            },
      ),
    );
  }, [selectedDoc, dispatch]);

  const stepChange = status => {
    dispatch(changeChannelStatus(status));
  };

  const handleDocClick = (event, doc) => {
    dispatch(
      clientSelectDoctor(
        selectedDoc && selectedDoc._id === doc._id ? null : doc,
      ),
    );
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
        <ListDoctorsComponent
          handleSelectClick={handleDocClick}
          selectedDoc={selectedDoc}
        />
      )}
      {channelStatus === ChannelStatus.CHANNEL_SELECT_DOC && (
        <BookDetailsComponent selectedDoc={selectedDoc} />
      )}
      {channelStatus === ChannelStatus.CHANNEL_SUCCESS && (
        <FinalWindowCompnent success={true}>
          <div onClick={handleAddAnother}>Add another</div>
        </FinalWindowCompnent>
      )}
    </div>
  );
};

export default ChannellingComponent;
