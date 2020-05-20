export const ChannelStatus = {
  CHANNEL_START: 0,
  CHANNEL_SELECT_DOC: 1,
  CHANNEL_SUCCESS: 2,
};

export const HeaderInfo = {
  showlocation: true,
  location: 'watch',
  back: '/client/home',
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
];
