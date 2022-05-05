import LogoPng from '../assets/images/logo.png';
import Logo3Png from '../assets/images/logo3.png';
import FacebookIconSvg from '../assets/images/icon-facebook.svg';
import TwitterIconSvg from '../assets/images/icon-twitter.svg';
import DiscordIconSvg from '../assets/images/icon-discord.svg';
import InstagramIconSvg from '../assets/images/icon-instagram.svg';
import YoutubeIconSvg from '../assets/images/icon-youtube.svg';
import Banner1Jpg from '../assets/images/banner_1.jpg';
import Banner2Jpg from '../assets/images/banner_2.jpg';
import Logo2Svg from '../assets/images/logo2.svg';
import BtnPlaySvg from '../assets/images/btn-knife-play.svg';
import BtnMoonSvg from '../assets/images/btn-moon.svg';
import BtnSunSvg from '../assets/images/btn-sun.svg';
import Bg2Png from '../assets/images/bg2.png';
import Bg3Jpg from '../assets/images/bg3.jpg';

import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { KANE_ITEMS, PROTOCOL_ITEMS } from '../contants';
import ProtocolItem from '../components/SharedComponents/ProtocolItem';
import AudioPlayer from '../components/Pages/Home/AudioPlayer';
import BookSection from '../components/Pages/Home/BookSection';

const Home = () => {
  const [bannerImg, setBannerImg] = useState(0);
  const [selectedKane, setKane] = useState(0);

  return (
    <>
      <Navbar id='gaman-navbar' bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>
            {/* <img src={LogoPng} alt='logo' /> */}
            <img className='logo3' src={Logo3Png} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            {/* <Nav>
              <Nav.Item>
                <Nav.Link href='#'>The Tarnished</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Souls</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Manifesto</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>Spirit Guide</Nav.Link>
              </Nav.Item>
            </Nav> */}
            <Nav className='social-nav'>
              {/* <Nav.Item>
                <Nav.Link href='#'>
                  <img src={FacebookIconSvg} alt='facebook' />
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link href='https://twitter.com/gamannft' target='_blank'>
                  <img src={TwitterIconSvg} alt='twitter' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href='https://twitter.com/gamannft'
                  target='_blank'
                  disabled
                >
                  <img
                    src={DiscordIconSvg}
                    alt='discord'
                    style={{ width: '100%' }}
                  />
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item>
                <Nav.Link href='#'>
                  <img src={InstagramIconSvg} alt='instagram' />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#'>
                  <img src={YoutubeIconSvg} alt='youtube' />
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        id='section-one'
        className={`${bannerImg === 0 ? 'day_banner' : 'night_banner'}`}
      >
        <img className='logo' src={Logo2Svg} alt='logo' />
        <div className='btn-play'>
          <img src={BtnPlaySvg} alt='play' />
        </div>
        <div className='day-count-selector'>
          <div
            className={`btn-select ${bannerImg === 1 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(1);
            }}
          >
            <img src={BtnMoonSvg} alt='moon' />
          </div>
          <div
            className={`btn-select ${bannerImg === 0 ? 'active' : ''}`}
            onClick={() => {
              setBannerImg(0);
            }}
          >
            <img src={BtnSunSvg} alt='sun' />
          </div>
        </div>
      </section>

      <BookSection />

      <section id='section-three'>
        <img className='img-back' src={Bg2Png} alt='bg 2' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 anim-wrapper'>
              <img src={KANE_ITEMS[selectedKane].animSrc} alt='anim' />
            </div>
            <div className='col-lg-6'>
              <h1 className='title'>MEET KANE</h1>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's.
              </p>
              <p className='description'>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's.
              </p>
              <div id='item-select-wrapper'>
                {KANE_ITEMS.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`btn-item-selector ${
                        item.id === selectedKane ? 'active' : ''
                      }`}
                      onClick={() => {
                        setKane(item.id);
                      }}
                    >
                      <img src={item.imgSrc} alt='select one' />
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section-four'>
        <img className='img-back' src={Bg3Jpg} alt='bg 3' />
        <div className='container'>
          <h1 className='title'>SOULS PROTOCOL</h1>
          <div className='protocol-wrapper'>
            {PROTOCOL_ITEMS.map((item) => {
              return (
                <ProtocolItem
                  key={item.id}
                  wrapperClass='protocol-item-wrapper'
                  protocolItem={item}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id='gaman-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 audio-wrapper'>
              <AudioPlayer />
            </div>
            <div className='col-lg-6 footer-text'>
              A PVP battle arena where players.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
