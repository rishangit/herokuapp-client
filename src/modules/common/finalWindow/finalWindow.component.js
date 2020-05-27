import React from 'react';
import classNames from 'classnames';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';

const FinalWindowCompnent = ({ children, success = true }) => {
  const icon = props =>
    success ? <DoneIcon {...props} /> : <ErrorOutlineIcon {...props} />;
  return (
    <div className={'flx-c flx-cc-h image-con theme-final-window-wrp'}>
      <div className={'flx-c final-main-con'}>
        {
          <div
            className={classNames('flx-cc-v', success ? 'success' : 'error')}
          >
            {[...Array(7)].map((x, i) =>
              icon({ className: `icons main-icon${i}` }),
            )}
            Success
          </div>
        }
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FinalWindowCompnent;
