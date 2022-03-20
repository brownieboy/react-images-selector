import React, { FunctionComponent } from "react";

import "./styles.css";

import Image from "./image";
import type { ImageType } from "./image";

export type { ImageType as RISImageType };

export const calculateCurrentSelections = (
  toggledImage: string | ImageType,
  selectedImages: string[] | ImageType[]
) => {
  const valueToCheck =
    typeof toggledImage === "string" ? toggledImage : toggledImage?.value;

  const selectedImageValues = selectedImages.map((image) =>
    // @ts-ignore
    image.value ? image.value : image
  );

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
  availableImages: ImageType[];
  /**
   * An array of currently selected image values
   */
  selectedImages: string[];
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
   * If any `selectedImages` are passed that are not in `images`, then this
   * prop will decide if a message is shown
   */
  warnIfImagesUnavailable?: boolean;
}

/**
 * A React selector for images, single or multi-choice.
 */
export const ReactImageSelector: FunctionComponent<ReactImageSelectorProps> = ({
  availableImages = [],
  onPick,
  selectedImages = [],
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

  const availableValuesArray = availableImages?.map((image) => image.value);

  const selectedButUnavailable =
    selectedImages?.filter(
      (imageValue) => !availableValuesArray?.includes(imageValue)
    ) || [];

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
        isSelected={selectedImages?.includes(image.value) || false}
        onImageClick={() => handleImageClick(image)}
        key={i}
        multiple={multiple}
        imageStyles={imageStyles}
        SelectorControl={SelectorControl}
      />
    );
  };

  return availableImages ? (
    <>
      <div className="image_picker" data-testid="react-image-selector">
        {availableImages.map(renderImage)}
        <div className="clear" />
      </div>
      {renderUnavailable()}
    </>
  ) : (
    <div>Awaiting supplied images...</div>
  );
};

export default ReactImageSelector;
