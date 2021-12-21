import React, { useCallback } from "react";
import Viewer from "react-viewer";
import { photos } from "./photo";
import Gallery from "react-photo-gallery";

const Viewerjs = () => {
  const [visible, setVisible] = React.useState(false);
  const [imgNo, setImgNo] = React.useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setVisible(true);
    setImgNo(index);
  }, []);

  return (
    <>
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          images={photos}
          activeIndex={imgNo}
          zoomSpeed="0.6"
          downloadable={true}
        />
      </div>
    </>
  );
};

export default Viewerjs;
