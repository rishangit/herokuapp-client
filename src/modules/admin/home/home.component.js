import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { HeaderInfo, CommonMenuBarBtn } from './home.constants';
import {
  commonHeaderChange,
  commonMenuBarButtonChange,
} from '../../common/common.action';
const HomeComponent = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonHeaderChange(HeaderInfo));
    dispatch(commonMenuBarButtonChange(CommonMenuBarBtn));
  }, []);

  return <div>This is admin home</div>;
};

export default HomeComponent;
