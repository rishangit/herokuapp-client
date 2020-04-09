import React, { useEffect } from 'react';
import styles from './subHeader.module.scss';
import { ButtonElement } from '../../../common/forms';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SubHeader = (props) => {
  const {
    appReducer: {
      subHeader: {
        newButton: { showNew, newPath },
        breadcrumb,
      },
    },
  } = props;

  return (
    <div className={styles.subHeaderWrp}>
      <div>
        {breadcrumb.map(({ path, label }, index) => (
          <span key={index}>
            {path ? (<>{index !== 0 && <span> &gt;</span>} <Link  to={path}>{label}</Link></>)
            :<span>{label}</span>}
          </span>
        ))}
      </div>
      {showNew && (
        <div className={styles.addNew}>
          <Link to={newPath}>
            <ButtonElement label="New" />
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(SubHeader);
