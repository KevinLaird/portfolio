import React from 'react';

export default function Loading(props) {

    if (props.error) {
        return ( 
        <div className="loading loading__box">
          <div className="loading__box--right"></div>
          <div className="loading__box--left"></div>
              <div className="loading loading__content-box">
                <div className="loading__error-box">
                  <div className="loading loading__error">Something went wrong...</div>
                </div>
                  <div className="loading__button-box">
                    <button className="loading loading__button" onClick={ props.retry }>
                        Retry
                    </button> 
                  </div>
              </div>
          </div>
        )
    } else if (props.timedOut) {
        return (
            <div className="loading loading__box">
              <div className="loading loading__content-box">
                <div className="loading__error-box">
                    <div className="loading loading__error"><i className="fas fa-atom loading__spinner"></i>Taking a long time... </div>
                </div>
                <div className="loading__button-box">
                    <button className="loading loading__button" >Retry</button>
                </div>
              </div>
            </div>
            )
    } else if (props.pastDelay) {
        return (
            <div className="loading loading__box">
                <div className="loading loading__content-box">
                    <div className="loading loading__load">
                      <i className="fas fa-atom loading__spinner"></i>
                      Loading...
                      </div>
                </div>
            </div>
            )
    } else {
        return null;
    }
}