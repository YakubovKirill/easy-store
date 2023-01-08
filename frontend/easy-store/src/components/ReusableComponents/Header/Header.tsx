import React, { memo } from "react";
import { BG_COLOR, WRAPPER_CONTAINER } from "../../../style";

const Header = (): JSX.Element => {
  return (
    <div className={`${BG_COLOR.PRIMARY_BG} px-2.5 py-2.5 text-slate-100 flex justify-center`}>
      <div className={`${WRAPPER_CONTAINER}`}>
        <span>Header</span>
      </div>
    </div>
  );
}

export default memo(Header);