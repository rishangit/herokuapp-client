import React, { useEffect } from 'react';
import ListDoctorsComponent from './listDoctors';
import { useDispatch, useSelector } from 'react-redux';
import {
  listningClientRequest,
  currentNumberListRequest,
} from './watch.actions';
import { ListeningFor } from '../../../common/consts';
import { commonHeaderChange } from '../../common/common.action';
import { HeaderInfo } from './watch.constants';

const WatchComponent = props => {
  const dispatch = useDispatch();
  const {
    watchReducer: { listening },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
    dispatch(currentNumberListRequest());
  }, []);

  useEffect(() => {
    if (!listening) {
      dispatch(
        listningClientRequest({
          for: ListeningFor.CLINIC_UPDATE,
          from: 'CLIENT',
        }),
      );
    }
  }, [listening, listningClientRequest]);

  return (
    <div>
      <ListDoctorsComponent />
    </div>
  );
};

export default WatchComponent;
