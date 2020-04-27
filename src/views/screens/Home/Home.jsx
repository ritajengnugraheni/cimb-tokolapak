import React from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faMoneyBillWave,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

import ProductCard from "../../components/Cards/ProductCard.tsx";

import iPhoneX from "../../../assets/images/Showcase/iPhone-X.png";
import iPhone8 from "../../../assets/images/Showcase/iPhone-8.png";
import iPadPro from "../../../assets/images/Showcase/iPad-Pro.png";
import ButtonUI from "../../components/Button/Button";
import CarouselShowcaseItem from "./CarouselShowcaseItem.tsx";
import Colors from "../../../constants/Colors";

const dummy = [
  {
    productName: "iPhone X",
    image: iPhoneX,
    desc: `Visi Apple sejak awal adalah menciptakan iPhone yang
    sepenuhnya berisi layar. Yang begitu menghanyutkan sehingga
    tak ada lagi batasan antara perangkat dan pengalaman. Dan
    begitu cerdas sehingga dapat merespons dengan sekali sentuh,
    atau bahkan sekali pandang. Dengan iPhone X, visi ini menjadi
    kenyataan. Selamat datang, masa depan.`,
    id: 1,
  },
  {
    productName: "iPhone 8",
    image: iPhone8,
    desc: `iPhone 8 memperkenalkan desain kaca yang sepenuhnya baru. Kamera paling populer di dunia, kini lebih baik lagi. Chip yang paling andal dan cerdas di ponsel pintar. Pengisian daya nirkabel yang begitu mudah dilakukan. Dan pengalaman augmented reality yang tak pernah mungkin sebelumnya. iPhone 8. iPhone generasi baru.`,
    id: 2,
  },
  {
    productName: "iPad Pro Gen 3",
    image: iPadPro,
    desc: `
    iPad Pro baru telah didesain ulang seutuhnya dan dilengkapi dengan teknologi Apple yang paling canggih. Ini akan membuat Anda berpikir ulang apa yang iPad mampu lakukan`,
    id: 2,
  },
];

class Home extends React.Component {
  state = {
    activeIndex: 0,
    animating: false,
  };

  renderCarouselItems = () => {
    return dummy.map(({ image, productName, desc, id }) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={id.toString()}
        >
          <div className="carousel-item-home">
            <div className="container position-relative">
              <div className="row" style={{ paddingTop: "80px" }}>
                <div className="col-6 text-white position-relative">
                  <h2>{productName}</h2>
                  <p className="mt-4">{desc}</p>
                  <ButtonUI
                    type="outlined"
                    style={{
                      backgroundColor: "#CCEAD7",
                      borderColor: "#CCEAD7",
                      borderRadius: "16px",
                      fontWeight: "bolder",
                      position: "absolute",
                      bottom: 420,
                    }}
                  >
                    BUY NOW
                  </ButtonUI>
                </div>
                <div className="col-6 d-flex flex-row justify-content-center">
                  <img src={image} alt="" style={{ height: "750px" }} />
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    });
  };

  nextHandler = () => {
    if (this.state.animating) return;
    let nextIndex =
      this.state.activeIndex === dummy.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  prevHandler = () => {
    if (this.state.animating) return;
    let prevIndex =
      this.state.activeIndex === 0
        ? dummy.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: prevIndex });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center flex-row align-items-center my-3">
          <Link to="/" style={{ color: "inherit" }}>
            <h6 className="mx-4 font-weight-bold">PHONE</h6>
          </Link>
          <Link to="/" style={{ color: "inherit" }}>
            <h6 className="mx-4 font-weight-bold">LAPTOP</h6>
          </Link>
          <Link to="/" style={{ color: "inherit" }}>
            <h6 className="mx-4 font-weight-bold">TAB</h6>
          </Link>
          <Link to="/" style={{ color: "inherit" }}>
            <h6 className="mx-4 font-weight-bold">DESKTOP</h6>
          </Link>
        </div>
        <Carousel
          className="carousel-item-home-bg "
          next={this.nextHandler}
          previous={this.prevHandler}
          activeIndex={this.state.activeIndex}
        >
          {this.renderCarouselItems()}
          <CarouselControl
            directionText="Previous"
            direction="prev"
            onClickHandler={this.prevHandler}
          />
          <CarouselControl
            directionText="Next"
            direction="next"
            onClickHandler={this.nextHandler}
          />
        </Carousel>
        <div className="container">
          {/* BEST SELLER SECTION */}
          <h2 className="text-center font-weight-bolder mt-5">BEST SELLER</h2>
          <div className="row d-flex flex-wrap justify-content-center">
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
            <ProductCard className="m-2" />
          </div>
        </div>
        {/* ABOUT SECTION */}
        <div
          className="py-5"
          style={{ marginTop: "128px", backgroundColor: Colors.lightestGray }}
        >
          <div className="container">
            <div className="row">
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">FAST SHIPPING</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">100% REFUND</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
                </p>
              </div>
              <div className="col-4 text-center d-flex flex-column align-items-center">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ fontSize: 70, color: Colors.accentLight }}
                />
                <h3 className="font-weight-bolder mt-4">SUPPORT 24/7</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  impedit facilis nam vitae, accusamus doloribus alias
                  repellendus veniam voluptates ad doloremque sequi est, at
                  fugit pariatur quisquam ratione, earum sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
