"use client";

import {
  Backdrop,
  IconButton,
  Fade,
  Modal,
  ImageListItemBar,
  ImageListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContrastIcon from "@mui/icons-material/Contrast";
import Image from "next/image";
import { useState } from "react";

type ImageModalProps = {
  open: boolean;
  handleClose: () => void;
  imgUrl: string;
  title: string;
};

const ImageModal = ({ open, handleClose, imgUrl, title }: ImageModalProps) => {
  const [inverted, setInverted] = useState(false);
  const buttonStyle =
    "z-50 bg-black text-white w-6 h-6 text-sm mx-2 hover:bg-gray-300 hover:text-black transition duration-500 ease-in-out";
  const actionBarBGStyle =
    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)";
  return (
    <Modal
      aria-labelledby="image-modal"
      aria-describedby={`${title}`}
      open={open}
      onClose={() => {
        setInverted(false);
        handleClose();
      }}
      closeAfterTransition
      disableAutoFocus
      disableScrollLock
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      sx={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        margin: "auto",
        width: "520px",
      }}
    >
      <Fade in={open} timeout={500}>
        <ImageListItem
        // style={{ height: "75%" }}
        // className="absolute top-0 right-0 w-svw h-3/4 max-h-dvh"
        >
          <ImageListItemBar
            sx={{
              zIndex: 1,
              background: `${actionBarBGStyle}`,
              fontFamily: "inherit",
              ".MuiImageListItemBar-title": {
                fontSize: "1.5rem",
                overflow: "visible",
                textWrap: "wrap",
              },
              ".MuiImageListItemBar-actionIcon": {
                display: "flex",
                margin: "1rem",
                alignItems: "flex-start",
                background: "none",
                ":hover": {
                  background: "none",
                },
              },
            }}
            title={title}
            position="top"
            actionIcon={
              <>
                <IconButton
                  onClick={() => setInverted(!inverted)}
                  className={`${buttonStyle}`}
                >
                  <ContrastIcon
                    fontSize="inherit"
                    className={`${inverted ? "rotate-180" : ""}`}
                  />
                </IconButton>
                <IconButton
                  onClick={handleClose}
                  className={`${buttonStyle} hover:rotate-90`}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </>
            }
            actionPosition="right"
          />
          <Image
            src={imgUrl}
            alt={title}
            width={520}
            height={840}
            style={{ objectFit: "contain" }}
            className={`z-1 ${inverted ? "filter invert" : ""}`}
          />
        </ImageListItem>
      </Fade>
    </Modal>
  );
};

export default ImageModal;
