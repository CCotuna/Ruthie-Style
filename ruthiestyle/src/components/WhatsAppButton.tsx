"use client"
import { FaWhatsapp } from "react-icons/fa";
import PropTypes from "prop-types";

interface WhatsAppButtonProps {
  h?: number;
  w?: number;
  isWhite?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ h = 8, w = 8, isWhite = false }) => {
  const openWhatsAppChat = () => {
    const phoneNumber = "+40746930853";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}`;
    window.open(url, "_blank");
  };

  return (
<FaWhatsapp
      onClick={openWhatsAppChat}
      className={`h-${h} w-${w} mt-2 lg:mt-0 text-brand-darkcyan ${
        isWhite ? "hover:text-white" : "hover:text-brand-darkgreen"
      } cursor-pointer`}
    />  );
};

export default WhatsAppButton;
