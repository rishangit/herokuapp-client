import React from 'react';
import classNames from 'classnames';
import styles from './userIcon.module.scss';

const UserIcon = ({ name, url }) => {
  const generateIcon = () => {
    const words = name.split(' ');
    return `${words[0] && words[0].charAt(0).toUpperCase()}${
      words[1] ? words[1].charAt(0).toUpperCase() : ''
    }`;
  };
  return (
    <div className={classNames(styles['user-icon-wrp'], 'theme-user-icon')}>
      {url ? <img src={url} alt={url} /> : generateIcon()}
    </div>
  );
};

export default UserIcon;
