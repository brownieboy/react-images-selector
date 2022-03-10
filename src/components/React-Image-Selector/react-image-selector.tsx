import React, { FunctionComponent } from "react";

import "./styles.css";

import Image from "./image";

export type ImageType = {
  value: string;
  src: string;
};

export const calculateCurrentSelections = (
  toggledImage: string | ImageType,
  selectedImageValues: string[]
) => {
  const valueToCheck =
    typeof toggledImage === "string" ? toggledImage : toggledImage?.value;

  if (selectedImageValues.includes(valueToCheck)) {
    return selectedImageValues.filter(
      (member: string) => member !== valueToCheck
    );
  } else {
    return [...selectedImageValues, valueToCheck];
  }
};

export interface ReactImageSelectorProps {
  /**
   * An array of the images available for selection.
   */
  images?: ImageType[];
  /**
   * An array of currently selected image values
   */
  selectedImageValues: string[];
  /**
   * If true, use checkboxes multi-select, otherwise radio single-select
   */
  multiple?: boolean;
  /**
   * Function handler, called when image is clicked
   */
  onPick?(image: ImageType): void;
  /**
   * Styles object to override styles for the individual images
   */
  imageStyles?: any;
  /**
   * React control to pass in place of the standard HTML checkbox or radio
   * controls
   */
  SelectorControl?: any;
}

/**
 * A React selector for images, single or multi-choice.
 */
export const ReactImageSelector: FunctionComponent<ReactImageSelectorProps> = ({
  images,
  onPick,
  selectedImageValues,
  imageStyles,
  multiple = false,
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
