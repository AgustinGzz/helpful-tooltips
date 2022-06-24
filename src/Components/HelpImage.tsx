import React, { useState } from "react";
import { Fade, IconButton, Popper } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const HelpImage = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleHover = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElement(event.currentTarget);
  };
  const handleMouseAway = (): void => setAnchorElement(null);
  return (
    <>
      <IconButton onMouseOver={handleHover} onMouseLeave={handleMouseAway}>
        <HelpOutlineIcon />
      </IconButton>
      <Popper
        id="simple-popper"
        placement="bottom-end"
        open={!!anchorElement}
        anchorEl={anchorElement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={0}>
            <img
              src="https://images.unsplash.com/photo-1509239129736-8c395375220d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="something helpful"
              className="image-standard"
            />
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default HelpImage;
