import React from 'react';
import styles from './stepNavi.module.scss';

const StepNaviComponent = ({ steps, current, onChange }) => {
  return (
    <div className={styles.stepNaviWrp}>
      {steps.map(({ label, status }, index) => (
        <span key={index}>
          {index !== 0 && <span> &gt;</span>}
          <span
            className={current === status ? styles.active : ''}
            onClick={e => {
              current > status && onChange(status);
            }}
          >
            {label}
          </span>
        </span>
      ))}
    </div>
  );
};
export default StepNaviComponent;
