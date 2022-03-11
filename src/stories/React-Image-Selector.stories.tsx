import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import {
  ReactImageSelector,
  calculateCurrentSelections,
} from "react-image-selector";

import type { RISImageType } from "react-image-selector";

// import { ImageType } from "react-image-selector/types";

const logEvent = (evt: any) => {
  action(evt.type)(evt.detail);
};

// TODO - Move to API call, e.g. MirageJS
const availableImages = [
  { src: "./assets/chinstrap.jpg", value: "chinstrap" },
  { src: "./assets/emperor.jpg", value: "emperor" },
  { src: "./assets/king.jpg", value: "king" },
  { src: "./assets/little.jpg", value: "little" },
];

export default {
  title: "React Image Selector",
  component: ReactImageSelector,
} as ComponentMeta<typeof ReactImageSelector>;

const Template: ComponentStory<typeof ReactImageSelector> = ({
  multiple,
  imageStyles,
}) => {
  const [selectedImageValues, setSelectedImageValues] = useState([
    "emperor",
    "unknown",
  ]);
  const [materialControls, setMaterialControls] = useState(false);

  const SelectorControl = multiple ? Checkbox : Radio;

  const handleOnPick = (image: RISImageType) => {
    const newSelections = multiple
      ? calculateCurrentSelections(image, selectedImageValues)
      : [image?.value];
    setSelectedImageValues(newSelections);
    logEvent({
      type: "onPick",
      detail: { imageSelected: image, newSelections },
    });
  };

  const handleMaterialControls = () => {
    setMaterialControls(!materialControls);
  };

  return (
    <>
      <ReactImageSelector
        availableImages={availableImages}
        onPick={handleOnPick}
        selectedImageValues={selectedImageValues}
        imageStyles={imageStyles}
        multiple={multiple}
        SelectorControl={materialControls ? SelectorControl : undefined}
      />
      <div style={{ marginTop: "50px" }}>
        <label htmlFor="usematerial">
          <input
            type="checkbox"
            id="usematerial"
            checked={materialControls}
            onChange={handleMaterialControls}
          />
          Use Material {multiple ? "checkbox" : "radio button"} controls
        </label>
      </div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  multiple: true,
  imageStyles: {
    maxHeight: 300,
    maxWidth: 300,
    height: 150,
    width: 150,
  },
};
