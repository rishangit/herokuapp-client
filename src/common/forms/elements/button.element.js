import React from "react";
import classNames from "classnames";
import styles from './button.module.scss';

const ButtonElement = props => {
  let { label, disabled } = props;
  return (
    <div className={classNames(styles.elementWrp, "theme-element-wrp")}>
      <button className={classNames(styles.elementButton,"theme-element-button")} disabled={disabled ? true : null}>{label}</button>
    </div>
  );
};

export default ButtonElement;
