import React from 'react';
import FormError from '../../component/formError.component';
import classNames from 'classnames';
import styles from './textbox.module.scss';
import { Icon, listItemSize, listIconSize } from '../../component/icon';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import DoneIcon from '@material-ui/icons/Done';
const TextBoxElement = props => {
  let {
    name,
    placeholder,
    label,
    type = 'text',
    onChange,
    disabled,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  } = props;

  const handleElementChange = e => {
    handleChange(e);
    if (onChange) onChange(e);
  };

  return (
    <div className={classNames(styles.elementWrp, 'theme-element-wrp')}>
      <label className={classNames(styles.elementLabel, 'theme-element-label')}>
        {label}
      </label>
      <div
        className={
          touched[name] ? (errors[name] ? 'valid-error' : 'valid-success') : ''
        }
      >
        <div className={'item-v-c'}>
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleElementChange}
            value={values[name]}
            onBlur={handleBlur}
            disabled={disabled ? true : null}
            className={classNames(styles.elementText, 'theme-element-text')}
          />

          <span className={styles.icon}>
            {touched[name] ? (
              errors[name] ? (
                <ErrorOutlineIcon />
              ) : (
                <DoneIcon />
              )
            ) : (
              ''
            )}{' '}
          </span>
          {/* <Icon
            {...listIconSize}
            icon={touched[name] ? (errors[name] ? 'error' : 'correct') : ''}
            className={
              touched[name]
                ? errors[name]
                  ? styles.error
                  : styles.correct
                : ''
            }
          /> */}
        </div>
        <FormError touched={touched[name]} message={errors[name]}></FormError>
      </div>
    </div>
  );
};

export default TextBoxElement;
