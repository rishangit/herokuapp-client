import React, { useEffect } from 'react';
import {
  appActionSetAddNew,
  appActionSetBreadcrumb,
} from '../../application/app.action';
import { connect } from 'react-redux';
const HomeComponent = (props) => {
  let { appActionSetAddNew,appActionSetBreadcrumb } = props;
  useEffect(() => {
    appActionSetAddNew({
      showNew: false,
      newPath: '',
    });
    appActionSetBreadcrumb([
      {
        label: 'Home',
        path: '/admin/home',
      },
    ]);
  }, []);

  return <div>This is admin home</div>;
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  appActionSetAddNew,
  appActionSetBreadcrumb,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
