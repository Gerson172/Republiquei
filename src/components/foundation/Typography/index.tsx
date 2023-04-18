import React from "react";
import PropTypes from "prop-types";

function Typography({ children }:any) {
    return (
        <p>
            {children}
        </p>
    )
}

Typography.propTypes = {
    children: PropTypes.node,
}

export default Typography;