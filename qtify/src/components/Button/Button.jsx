import React from "react";
import styles from "./Button.module.css"

function Button({ children }) {
    return <button className="{styles.button}>{children}" />
}

export default Button;