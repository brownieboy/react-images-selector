import { FunctionComponent } from "react";
interface ImageProps {
  image: ImageType;
  isSelected?: boolean;
  onImageClick: () => void;
  imageStyles?: any;
  SelectorControl: any;
  multiple?: boolean;
}

export type ImageType = {
  value: string;
  src: string;
};

const Image: FunctionComponent<ImageProps> = ({
  image,
  isSelected,
  onImageClick,
  imageStyles,
  multiple,
  SelectorControl,
}) => {
  const { value, src } = image;
  return (
    <div
      className={`responsive${isSelected ? " selected" : ""}`}
      onClick={onImageClick}
    >
      <img
        src={src}
        className={`thumbnail${isSelected ? " selected" : ""}`}
        style={{ objectFit: "cover", ...imageStyles }}
        alt={value}
      />
      <div className="checkboxWrapper">
        {SelectorControl ? (
          <SelectorControl checked={isSelected} />
        ) : (
          <input
            type={multiple ? "checkbox" : "radio"}
            checked={isSelected}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default Image;
