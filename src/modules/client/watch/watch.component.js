import React, { useEffect } from 'react';
import ListDoctorsComponent from './listDoctors';
import { connect } from 'react-redux';
import { appActionSetBreadcrumb } from '../../application/app.action';

const WatchComponent = props => {
  const { appActionSetBreadcrumb } = props;
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
  }, []);

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
};
export default connect(mapStateToProps, mapDispatchToProps)(WatchComponent);
