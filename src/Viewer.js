import React, { useState, useEffect } from "react";
import NewWindow from "react-new-window";

const Viewer = () => {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked times`;
  }, []);

  return (
    <NewWindow
    url="https://www.instagram.com/joel.f.engstrom/"
    center="parent"

      features={{
        outerHeight: "50vh",
        outerWidth: "50vw",
        height: "500px",
        width: "400px"
      }}
    >
     
    </NewWindow>
  );
};

export default Viewer;