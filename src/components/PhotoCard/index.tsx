import * as React from "react";
import "./index.scss";
import Minimal from "../Minimal";
import { CommonProps } from "../common_types";

export interface PhotoCardProps extends CommonProps {}

function PhotoCard(props: PhotoCardProps): React.ReactElement {
  const { imageSrc, title, subtext, width, height } = props;
  return (
    <div
      className="photo-card-container invisible"
      style={
        {
          "--image-url": `url(${imageSrc})`,
          width: width,
          height: height
        } as React.CSSProperties
      }
    >
      <Minimal imageSrc={imageSrc} title={title} />
    </div>
  );
}

PhotoCard.defaultProps = {
  width: "200px",
  height: "200px",
  title: "Sample",
  imageSrc: "https://picsum.photos/200/300",
  theme: "minimal"
} as Partial<PhotoCardProps>;

export default PhotoCard;
