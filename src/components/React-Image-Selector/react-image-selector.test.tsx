import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ReactImageSelector,
  // calculateCurrentSelections,
} from "./react-image-selector";
// import type { RISImage } from "./React-Image-Selector/react-image-selector";

import { availableImages } from "./test-data/availableImages.js";

test("No props Renders an empty selector", () => {
  render(
    <ReactImageSelector />
  );

  const picker = screen.getByRole("select");
  expect(picker).toBeInTheDocument();
});

test("With props, renders a selector with 4 images", () => {
  render(
    <ReactImageSelector availableImages={availableImages} selectedImages={[]} />
  );

  const images = screen.getAllByRole("img");
  expect (images).toHaveLength(4);

});


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
