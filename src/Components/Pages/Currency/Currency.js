import React from "react";
import "./Currency.scss";

const Currency = ({ isShowCurrency }) => {
  return (
    <>
      {isShowCurrency ? (
        <div className="container">
          <h2>SELECT A CURRENCY</h2>
          <div className="btn-wrapper">
            <button>IND</button>
            <button>USD</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Currency;
