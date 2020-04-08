import * as React from "react";
import "./index.scss";
import { CommonProps } from "../common_types";
interface MinimalProps extends CommonProps {}

function Minimal(props: MinimalProps): React.ReactElement {
  const { title } = props;

  return (
    <div className="photo-card-minimal">
      <div className="photo-card-minimal-image" style={{}}>
        <div className="photo-card-minimal-text">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Minimal;
