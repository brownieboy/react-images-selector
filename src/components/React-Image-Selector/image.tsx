import { FunctionComponent } from "react";

interface ImageProps {
  src: string;
  isSelected?: boolean;
  onImageClick: () => void;
  imageStyles?: any;
  SelectorControl: any;
  multiple?: boolean;
}

const Image: FunctionComponent<ImageProps> = ({
  src,
  isSelected,
  onImageClick,
  imageStyles,
  multiple,
  SelectorControl,
}) => {
  return (
    <div className={`responsive${isSelected ? " selected" : ""}`} onClick={onImageClick}>
      <img
        src={src}
        className={`thumbnail${isSelected ? " selected" : ""}`}
        style={{ objectFit: "cover", ...imageStyles }}
      />
      <div className="checkboxWrapper">
        {SelectorControl ? (
          <SelectorControl checked={isSelected} />
        ) : (
          <input type={multiple ? "checkbox" : "radio"} checked={isSelected} readOnly />
        )}
      </div>
    </div>
  );
};

export default Image;
