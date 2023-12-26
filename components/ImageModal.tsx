"use client";

import {
  Backdrop,
  Box,
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
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => {
        setInverted(false);
        handleClose();
      }}
      closeAfterTransition
      disableAutoFocus
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 700,
        },
      }}
      className="flex flex-col justify-center h-full p-2"
    >
      <>
        <Fade in={open} timeout={700}>
          <ImageListItem className="w-full h-full flex justify-center align-middle">
            <ImageListItemBar
              sx={{
                zIndex: 0,
                background: `${actionBarBGStyle}`,
                fontSize: "10rem",
                ".MuiImageListItemBar-actionIcon": {
                  display: "flex",
                  margin: "1rem",
                  alignItems: "flex-start",
                  background: "none",
                  ":hover": {
                    background: "none",
                  },
                },
                ".MuiImageListItemBar-title": {
                  fontSize: "1.5rem",
                  overflow: "visible",
                  textWrap: "wrap",
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
              width={780}
              height={780}
              style={{ objectFit: "contain" }}
              className={`z-50 ${inverted ? "filter invert" : ""}`}
            />
          </ImageListItem>
        </Fade>
      </>
    </Modal>
  );
};

export default ImageModal;
