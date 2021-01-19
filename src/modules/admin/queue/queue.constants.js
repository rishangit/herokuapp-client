export const BookingStatus = {
  SEACRCH_BOOKING: 0,
  LIST_BOOKING: 1,
  CONFIRM_BOOKING: 2,
};

export const QueueStatus = {
  LIST_REQUEST:0,
  LIST_RECEIVED:1
}


export const HeaderInfoList = {
  showlocation: true,
  location: 'Queue',
  sublocation: 'list',
  back: '/admin/home',
};

export const HeaderInfoAddNew = {
  showlocation: true,
  location: 'Queue',
  sublocation: 'Add new one to queue',
  back: '/admin/queue/list',
};