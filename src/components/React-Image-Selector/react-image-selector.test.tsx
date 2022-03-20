import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ReactImageSelector,
  // calculateCurrentSelections,
} from "./react-image-selector";
// import type { RISImage } from "./React-Image-Selector/react-image-selector";

import { availableImages } from "./test-data/availableImages.js";

test("render a selector", () => {
  render(<ReactImageSelector />);

  const picker = screen.getByRole("select");
  expect(picker).toBeInTheDocument();
});

test("renders 4 images in selector", () => {
  render(<ReactImageSelector availableImages={availableImages} />);
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(4);
  expect(images[3]).toBeInTheDocument();
});

test("renders 4 checkboxes, 'emperor' & 'king' selected", () => {
  render(
    <ReactImageSelector
      availableImages={availableImages}
      multiple
      selectedImages={["emperor", "king"]}
    />
  );
  const checkboxes = screen.getAllByRole("checkbox");
  expect(checkboxes).toHaveLength(4);
  expect(checkboxes[1]).toBeChecked(); // Emperor is 2nd element
  expect(checkboxes[2]).toBeChecked(); // King is 3rd
  expect(checkboxes[0]).not.toBeChecked();
  expect(checkboxes[3]).not.toBeChecked();
});

test("renders 4 radios, 'emperor' selected", () => {
  render(
    <ReactImageSelector
      availableImages={availableImages}
      selectedImages={["emperor"]}
    />
  );
  const radios = screen.getAllByRole("radio");
  expect(radios).toHaveLength(4);
  expect(radios[1]).toBeChecked(); // Emperor is 2nd element
});

// test("Calls ", () => {
//   render(
//     <ReactImageSelector availableImages={availableImages} selectedImages={[]} />
//   );
//   const images = screen.getAllByRole("img");
//   expect (images).toHaveLength(4);
// });

/*
import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toBeDefined();
  });

  it('should call onClick', () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });

  it('should be disableable', () => {
    const wrapper = shallow(<Button disabled />);

    expect(wrapper.prop('disabled')).toBe(true);
  });

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    };
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper.hasClass(props.className)).toBe(true);
  });
});
*/
