import React, { FunctionComponent } from "react";

import "./styles.css";

import Image from "./image";

export type ImageType = {
  value: string;
  src: string;
};

export const calculateCurrentSelections = (toggledImage: string | ImageType, selectedImageValues: string[]) => {
  const valueToCheck = typeof toggledImage === "string" ? toggledImage : toggledImage?.value;

  if (selectedImageValues.includes(valueToCheck)) {
    return selectedImageValues.filter((member: string) => member !== valueToCheck);
  } else {
    return [...selectedImageValues, valueToCheck];
  }
};

export interface ReactImageSelectorProps {
  /*
   * Array of images
   */
  images?: ImageType[];
  multiple?: boolean;
  onPick?(image: ImageType): void;
  selectedImageValues: string[];
  imageStyles?: any;
  SelectorControl?: any;
}

const ReactImageSelector: FunctionComponent<ReactImageSelectorProps> = ({
  images,
  onPick,
  selectedImageValues,
  imageStyles,
  multiple,
  SelectorControl,
}) => {
  const handleImageClick = (image: ImageType) => {
    if (typeof onPick === "function") {
      onPick(image);
    }
  };

  const renderImage = (image: ImageType, i: React.Key) => {
    return (
      <Image
        src={image.src}
        isSelected={selectedImageValues.includes(image.value)}
        onImageClick={() => handleImageClick(image)}
        key={i}
        multiple={multiple}
        imageStyles={imageStyles}
        SelectorControl={SelectorControl}
      />
    );
  };

  return images ? (
    <div className="image_picker">
      {images.map(renderImage)}
      <div className="clear" />
    </div>
  ) : (
    <div>Awaiting supplied images...</div>
  );
};

export default ReactImageSelector;
