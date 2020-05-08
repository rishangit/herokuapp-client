import React from 'react';

const WelcomeComponent = props => {
  return (
    <div className={'theme-welcome-wrp'}>
      <div className={'upper-wrp'}>
        <div>Welcome 2</div>
        <section className={'deco-wrp youTubeLink'}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1416.99 174.01"
          >
            <path
              fill="#ffffff"
              d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              transform="translate(0 -135.53)"
            />
          </svg>
        </section>
      </div>

      <div className={'lower-wrp'}>
        <div className={'button-wrp'}>
          <div className={'c-btn'}></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
