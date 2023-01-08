import React, { memo } from "react";
import { BG_COLOR, WRAPPER_CONTAINER } from "../../../style";

const Footer = (): JSX.Element => {
  return (
    <div className={`${BG_COLOR.PRIMARY_BG} px-3 py-3 text-slate-100 flex justify-center`}>
      <div className={`${WRAPPER_CONTAINER}`}>
        <span>Footer</span>
      </div>
    </div>
  );
}

export default memo(Footer);