import { fireEvent, render, screen } from "@testing-library/react";
import {
  ReactImageSelector,
  calculateCurrentSelections,
} from "./react-images-selector";

import { availableImages } from "./test-data/availableImages.js";

test("renders a selector", () => {
  render(<ReactImageSelector availableImages={[]} selectedImages={[]} />);

  const picker = screen.getByRole("select");
  expect(picker).toBeInTheDocument();
});

test("renders 4 images in selector", () => {
  render(
    <ReactImageSelector availableImages={availableImages} selectedImages={[]} />
  );
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
  expect(radios[0]).not.toBeChecked();
  expect(radios[2]).not.toBeChecked();
  expect(radios[3]).not.toBeChecked();
});

test("clicking 'emperor' returns it to onPick handler", () => {
  let selectedImage: string = "";
  const handlePick = jest.fn((image: any) => {
    selectedImage = image.value;
  });
  render(
    <ReactImageSelector
      availableImages={availableImages}
      multiple
      selectedImages={[]}
      onPick={handlePick}
    />
  );

  const checkboxes = screen.getAllByRole("checkbox");
  fireEvent.click(checkboxes[0]);
  expect(handlePick).toHaveBeenCalledTimes(1);
  expect(selectedImage).toBe("chinstrap");
});

test("calculateCurrentSelections helper func adds 'king' image", () => {
  expect(
    calculateCurrentSelections("king", ["chinstrap", "emperor"])
  ).toStrictEqual(["chinstrap", "emperor", "king"]);
});

test("calculateCurrentSelections helper func removes 'emperor' image", () => {
  expect(
    calculateCurrentSelections("emperor", ["chinstrap", "emperor", "king"])
  ).toStrictEqual(["chinstrap", "king"]);
});
