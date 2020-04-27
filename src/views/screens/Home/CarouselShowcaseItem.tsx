import React from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import "./Home.css";

import iPhoneX from "../../../assets/images/Showcase/iPhone-X.png";
import ButtonUI from "../../components/Button/Button";

type ShowcaseItemProps = {
  id: number;
  desc: string;
  productName: string;
  key?: React.Key;
  image: string;
  onExiting: Function;
  onExited: Function;
};

const CarouselShowcaseItem = ({
  id,
  desc,
  productName,
  image,
  onExited,
  onExiting,
}: ShowcaseItemProps) => {
  return (
    <CarouselItem>
      <div className="carousel-item-home-bg carousel-item-home">
        <div className="container position-relative">
          <div className="row" style={{ paddingTop: "128px" }}>
            <div className="col-6 text-white">
              <h2>iPhone X</h2>
              <p className="mt-4">
                Visi Apple sejak awal adalah menciptakan iPhone yang sepenuhnya
                berisi layar. Yang begitu menghanyutkan sehingga tak ada lagi
                batasan antara perangkat dan pengalaman. Dan begitu cerdas
                sehingga dapat merespons dengan sekali sentuh, atau bahkan
                sekali pandang. Dengan iPhone X, visi ini menjadi kenyataan.
                Selamat datang, masa depan.
              </p>
              <ButtonUI
                type="outlined"
                className="mt-5"
                style={{
                  backgroundColor: "#CCEAD7",
                  borderColor: "#CCEAD7",
                  borderRadius: "16px",
                  fontWeight: "bolder",
                }}
              >
                BUY NOW
              </ButtonUI>
            </div>
            <div className="col-6 d-flex flex-row justify-content-center">
              <img src={iPhoneX} alt="" style={{ height: "750px" }} />
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default CarouselShowcaseItem;
