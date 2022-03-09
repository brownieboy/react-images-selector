import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";

import {
  ReactImageSelector,
  calculateCurrentSelections,
  ImageType,
} from "../components/React-Image-Selector/react-image-selector";

const logEvent = (evt: any) => {
  action(evt.type)(evt.detail);
};

// TODO - Move to API call, e.g. MirageJS
const availableImages = [
  { src: "/assets/200.jpg", value: "200" },
  { src: "/assets/201.jpg", value: "201" },
  { src: "/assets/202.jpg", value: "202" },
  { src: "/assets/203.jpg", value: "203" },
];

export default {
  title: "React Image Selector",
  component: ReactImageSelector,
} as ComponentMeta<typeof ReactImageSelector>;

const Template: ComponentStory<typeof ReactImageSelector> = ({
  multiple,
  imageStyles,
}) => {
  const [selectedImageValues, setSelectedImageValues] = useState(["203"]);
  const [materialControls, setMaterialControls] = useState(false);

  const SelectorControl = multiple ? Checkbox : Radio;

  const handleOnPick = (image: ImageType) => {
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
        images={availableImages}
        onPick={handleOnPick}
        selectedImageValues={selectedImageValues}
        imageStyles={imageStyles}
        multiple={multiple}
        SelectorControl={materialControls ? SelectorControl : undefined}
      />
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="usematerial">
          <input
            type="checkbox"
            id="usematerial"
            checked={materialControls}
            onChange={handleMaterialControls}
          />
          Pass in Material controls
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
