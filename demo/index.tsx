import * as React from "react";
import * as ReactDOM from "react-dom";

import PhotoCard from "../src/components/PhotoCard";

const comp = <PhotoCard width="100px" height = "200px" />;

ReactDOM.render(comp, document.getElementById("root") as HTMLElement);
