import React from 'react';
import { SHOWTYPE } from '.';
import { Container } from 'reactstrap';
import classNames from 'classnames';

const RoomName = ({ name, active, type, children }) => {
  if (!name) return;

  return (
    <>
      {type === SHOWTYPE.DOCNAME_GRID ? (
        <Container
          className={classNames(
            'flx-c flx-cc-v doc-name-grid-wrp',
            active && 'active',
          )}
        >
          <div className={'doc-name'}>{name}</div>
        </Container>
      ) : (
        <div>{name}</div>
      )}
    </>
  );
};
export default RoomName;
