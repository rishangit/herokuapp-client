import React from 'react';
import classNames from 'classnames';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

const StepNaviComponent = ({ steps, current, onChange }) => {
  return (
    <div className={classNames('flx-c theme-step-navi-wrp')}>
      {steps.map(({ label, status }, index) => (
        <div key={index} className={'flx-rc-v'}>
          {index !== 0 && <ArrowForwardIos />}
          <div
            className={classNames(
              'step-navi',
              current === status
                ? 'active'
                : current > status
                ? ''
                : 'inactive',
            )}
            onClick={e => {
              current > status && onChange(status);
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};
export default StepNaviComponent;
