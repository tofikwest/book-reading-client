import React from "react";
import StatisticModalStyled from "./StatisticModalStyled";
import sprite from "./sprite.svg";

const StatisticModal = () => {
  return (
    <StatisticModalStyled>
      <div className="StatisticModalWrapper">
        <svg className="StatisticModalIcon">
          <use href={sprite + "#icon-hand"} width="45"></use>
        </svg>
        <p className="StatisticModalText">
          Ти молодчина, <br /> але потрібно швидше! <br /> Наступного разу тобі
          все вдасться)
        </p>
        <button
          type="button"
          className="StatisticModalButton"
          // onClick={onHandleClick}
        >
          Ok
        </button>
      </div>
    </StatisticModalStyled>
  );
};

export default StatisticModal;
