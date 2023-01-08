import React, { memo } from "react";
import { WRAPPER_CONTAINER } from "../../../../style";

const GalleryWrapper = () => {
  return (
    <div className='flex min-h-full justify-center'>
      <div className={`px-4 py-4 ${WRAPPER_CONTAINER}`}>
        <span>Hello</span>
      </div>
    </div>
  );
}

export default memo(GalleryWrapper);
