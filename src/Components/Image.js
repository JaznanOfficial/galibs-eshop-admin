import React from 'react';
import { useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";

const dataSources = [
  {
    id: 1,
    dataURL: "https://picsum.photos/seed/1/600",
  },
  {
    id: 2,
    dataURL: "https://picsum.photos/seed/2/600",
  },
  {
    id: 3,
    dataURL: "https://picsum.photos/seed/3/600",
  },
  {
    id: 4,
    dataURL: "https://picsum.photos/seed/4/600",
  }
];

const Image = () => {

    const [visible, setVisible] = useState(false);
    const handleSetVisible = () => {
      setVisible(true);
    };
    const hideModal = () => {
      setVisible(false);
    };
    const onUpload = (data) => {
      console.log("Upload files", data);
    };
    const onSelect = (data) => {
      console.log("Select files", data);
    };
    const onRemove = (id) => {
      console.log("Remove image id", id);
    };

    return (
        <div>
      <button onClick={handleSetVisible}>Show Me</button>
      <RMIUploader
        isOpen={visible}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
      />
    </div>
            
        
    );
};

export default Image;