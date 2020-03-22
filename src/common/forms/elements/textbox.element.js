import React from "react";
import FormError from "../../component/formError.component";
import classNames from "classnames";
import styles from './textbox.module.scss';

const TextBoxElement = props => {
  let {
    name,
    placeholder,
    label,
    onChange,
    disabled,
    values,
    errors,
    touched,
    handleBlur,
    handleChange
  } = props;

  const handleElementChange = e => {
    handleChange(e);
    if (onChange) onChange(e);
  };

  return (
    <div className={classNames(styles.elementWrp,"theme-element-wrp")}>
      <label className={classNames(styles.elementLabel,"theme-element-label")}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleElementChange}
        value={values[name]}
        onBlur={handleBlur}
        disabled = {disabled ? true:null}
        className={classNames(styles.elementText,"theme-element-text")}
      />
      <FormError touched={touched[name]} message={errors[name]}></FormError>
    </div>
  );
};

export default TextBoxElement;
