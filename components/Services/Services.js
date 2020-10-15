import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { withTranslation } from '../../i18n';

import {
  Box,
  ServicesContainer,
  Content,
  SecContent,
  TitleWrapper,
  Title,
  ImageWrapper,
  Scroll,
} from './Services.styles';

class Services extends Component {
  componentDidMount() {
    window.addEventListener('wheel', (e) => {
      this.slide(e.wheelDelta);
    });
  }

  slide = (y) => {
    if (this.slider) {
      if (y > 0) {
        this.slider.slickPrev();
      } else {
        this.slider.slickNext();
      }
    } else {
      return false;
    }
  };

  render() {
    const { items, t } = this.props;

    return (
      <Box>
        <Slider
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          easing
          focusOnSelect={false}
          vertical
          verticalSwiping
          // eslint-disable-next-line no-return-assign
          ref={(slider) => (this.slider = slider)}
        >
          {items.map((item) => {
            return (
              <div key={item.key3}>
                <ServicesContainer>
                  <Content>
                    <div>
                      <TitleWrapper>
                        <Title>{t(item.heading)}</Title>
                      </TitleWrapper>
                      <ImageWrapper>
                        <img src={item.img} alt={t(item.imgAlt)} />
                      </ImageWrapper>
                      <h3>{t(item.subHeading)}</h3>
                      {item.content.map((paragraph) => {
                        return <p key={paragraph}>{t(paragraph)}</p>;
                      })}
                    </div>
                  </Content>
                  <SecContent>
                    {item.secContent.map((paragraph) => {
                      return <p key={paragraph}>{t(paragraph)}</p>;
                    })}
                  </SecContent>
                </ServicesContainer>
              </div>
            );
          })}
        </Slider>
        <Scroll src="assets/svg/icon-scroll.svg" alt="Scroll down" />
      </Box>
    );
  }
}

Services.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
  secContent: PropTypes.string,
  items: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

Services.defaultProps = {
  heading: '',
  subHeading: '',
  img: '',
  imgAlt: '',
  content: '',
  secContent: '',
};

export default withTranslation('services')(Services);
