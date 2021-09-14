import React from "react";
import ContentLoader from "react-content-loader";

function ShawarmaBlockLoader() {
    return (
        <ContentLoader
            className="shawarma-block"
            speed={2}
            width={280}
            height={372}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="10" y="10" width="260" height="180" rx="25" ry="25" />
            <rect x="0" y="200" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="260" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="370" rx="6" ry="6" width="91" height="31" />
            <rect x="137" y="362" rx="25" ry="25" width="140" height="46" />
        </ContentLoader>
    );
}

export default ShawarmaBlockLoader;
