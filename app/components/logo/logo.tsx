// React
import * as React from "react";
const style: any = require("./logo.css");
/*
 * Import --------------------
 */

export class Logo extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
          <img src="./assets/mypos-logo.png" alt="myPos Logo" className={style.logo}/>
        );
    }
};
