import * as React from "react";
import "./index.scss";
import { CommonProps } from "../common_types";
export interface PhotoCardProps extends CommonProps {
}
declare function PhotoCard(props: PhotoCardProps): React.ReactElement;
declare namespace PhotoCard {
    var defaultProps: Partial<PhotoCardProps>;
}
export default PhotoCard;
