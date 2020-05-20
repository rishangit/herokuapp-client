import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import imglogo from '../../../scss/themes/theme_four/images/logfull.png';
import 'animate.css/animate.css';
import {
  commonMenuBarButtonChange,
  commonHeaderChange,
} from '../../common/common.action';
import { CommonMenuBarBtn, HeaderInfo } from './welcome.constants';

const WelcomeComponent = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
    dispatch(commonMenuBarButtonChange(CommonMenuBarBtn));
  }, []);

  return (
    <div className={'theme-welcome-wrp'}>
      <div className={'upper-wrp'}>
        <h1 className={'main-title'}>
          <div>
            <img alt={'asd'} src={imglogo} />
          </div>
          <span>MEDI</span>CLINIC
        </h1>
        <div className={'sub-title'}>
          <p>
            Welcome to the mediclinic, The easiest way to channel your family
            doctor.
          </p>
        </div>

        <section className={'deco-wrp youTubeLink'}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1416.99 174.01"
          >
            <path
              d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              transform="translate(0 -135.53)"
            />
          </svg>
        </section>
      </div>

      <div className={'lower-wrp'}>
        <div className={'message-wrp'}>
          <div className={'message'}>
            <p>Click Here to start</p>
            <ArrowDownward
              className={
                'animate__animated animate__bounce animate__slow animate__infinite'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
