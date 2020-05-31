import { MainButtonStatus } from '../../common';

export const ChannelStatus = {
  CHANNEL_START: 0,
  CHANNEL_SELECT_DOC: 1,
  CHANNEL_SUCCESS: 2,
};

export const HeaderInfo = {
  showlocation: true,
  location: 'channelling',
  back: './home',
};

export const CommonMenuBarBtn_NotSelected = {
  mainButtonStatus: MainButtonStatus.BTN_REFRESH,
  mainButtonAction: '/client/channelling',
  showBackgroud: true,
};

export const CommonMenuBarBtn_Selected = {
  mainButtonStatus: MainButtonStatus.BTN_ARROW_FORWARD,
  mainButtonAction: '/client/channelling',
  showBackgroud: true,
};


export const StepNaviSteps = [
  {
    label: 'Select Doctors',
    status: ChannelStatus.CHANNEL_START,
  },
  {
    label: 'Channel',
    status: ChannelStatus.CHANNEL_SELECT_DOC,
  },
  {
    label: 'Completed',
    status: ChannelStatus.CHANNEL_SUCCESS,
  },
];
