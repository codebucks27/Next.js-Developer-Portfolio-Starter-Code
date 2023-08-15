
import React from 'react';
import UnderConstruction from "./UnderConstruction";

const Layout = ({ children, className = "", underConstruction }) => {
  return (
    <>
      {underConstruction ? (
        <div>
          <UnderConstruction />
        </div>
      ) : (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};
export default Layout;
