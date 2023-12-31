import { useEffect } from "react";
import arrowIcon from "../../../assets/images/icons/accordion-arrow.svg";

const useSwiperStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .swiper-button-next,
      .swiper-button-prev {
        background-image: url(${arrowIcon});
        border: none;
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-color: transparent;
      }
      .swiper-button-next {
        margin-right: -40px; 
      }
      
      .swiper-button-prev {
        margin-left: -40px;
      }

      @media screen and (max-width: 750px) {
        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
          top: 40%;
        }

        .swiper-button-next {
          margin-right: -25px;
        }
        
        .swiper-button-prev {
          margin-left: -25px;
        }
      }

          .swiper-button-next.swiper-button-disabled, 
      .swiper-button-prev.swiper-button-disabled {
        opacity: 0;
      }

      .swiper-button-prev {
        background-image: url(${arrowIcon});
        transform: scaleX(-1);
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        content: "";
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

export default useSwiperStyles;
