import React, { FunctionComponent } from "react";

import "./styles.css";

import Image from "./image";
import type { ImageType } from "./image";

export type { ImageType as RISImageType };

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
  /**
   * If any `selectedImageValues` are passed that are not in `images`, then this
   * prop will decide if a message is shown
   */
  warnIfImagesUnavailable?: boolean;
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
  warnIfImagesUnavailable = false,
}) => {
  const handleImageClick = (image: ImageType) => {
    if (typeof onPick === "function") {
      onPick(image);
    }
  };

  const availableValuesArray = images?.map((image) => image.value);

  const selectedButUnavailable = selectedImageValues.filter(
    (imageValue) => !availableValuesArray?.includes(imageValue)
  );

  const renderUnavailable = () => {
    if (!warnIfImagesUnavailable || selectedButUnavailable.length === 0) {
      return null;
    }
    return (
      <div>
        <p>
          The following selected values were not in the available images list:
          <span>
            {" "}
            {selectedButUnavailable.map((value) => `"${value}"`).join(", ")}.
          </span>
        </p>
      </div>
    );
  };

  const renderImage = (image: ImageType, i: React.Key) => {
    return (
      <Image
        image={image}
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
    <>
      <div className="image_picker">
        {images.map(renderImage)}
        <div className="clear" />
      </div>
      {renderUnavailable()}
    </>
  ) : (
    <div>Awaiting supplied images...</div>
  );
};

export default ReactImageSelector;
