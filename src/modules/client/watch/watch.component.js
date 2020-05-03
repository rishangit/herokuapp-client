import React, { useEffect } from 'react';
import ListDoctorsComponent from './listDoctors';
import { connect } from 'react-redux';
import { appActionSetBreadcrumb } from '../../application/app.action';
import {
  listningClientRequest,
  currentNumberListRequest,
} from './watch.actions';
import { ListeningFor } from '../../../common/consts';

const WatchComponent = props => {
  const {
    appActionSetBreadcrumb,
    listningClientRequest,
    displayReducer: { listening },
    currentNumberListRequest,
  } = props;

  useEffect(() => {
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'watch',
        path: '/watch',
      },
    ]);
    currentNumberListRequest();
  }, []);

  useEffect(() => {
    if (!listening) {
      listningClientRequest({
        for: ListeningFor.CLINIC_UPDATE,
        from: 'CLIENT',
      });
    }
  }, [listening, listningClientRequest]);

  return (
    <div>
      <ListDoctorsComponent />
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = {
  appActionSetBreadcrumb,
  listningClientRequest,
  currentNumberListRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(WatchComponent);
