import React from 'react';
import classNames from 'classnames';
import styles from './userIcon.module.scss';

const UserIcon = ({ name, url }) => {
  const generateIcon = () => {
    const words = name.split(' ');
    return `${words[0] && words[1].charAt(0)}${words[1] && words[1].charAt(0)}`;
  };
  return (
    <div className={classNames(styles['user-icon-wrp'], 'theme-user-icon')}>
      {url ? <img src={url} alt={url} /> : generateIcon()}
    </div>
  );
};

export default UserIcon;
