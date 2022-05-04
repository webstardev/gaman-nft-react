import styled from 'styled-components';
import TitleBg from '../../../assets/images/ttl5.png';
import BgPng from '../../../assets/images/bx2.png';

const ProtocolItem = ({ wrapperClass = '', protocolItem }) => {
  return (
    <ComponentContainer className={wrapperClass}>
      <div className='img-wrapper'>
        <img className='img-protocol-back' src={BgPng} alt='protocol bg' />
        <img
          className='img-protocol'
          src={protocolItem.imgSrc}
          alt='protocol'
        />
      </div>
      <div className='title-wrapper'>{protocolItem.title}</div>
      <p className='description'>{protocolItem.description}</p>
    </ComponentContainer>
  );
};

export default ProtocolItem;

const ComponentContainer = styled.div`
  position: relative;
  width: 429px;
  display: flex;
  flex-direction: column;
  padding-top: 25px;

  .title-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 254px;
    height: 107px;
    background: url('${TitleBg}') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Windlass';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    .img-protocol-back {
      width: 100%;
      height: auto;
    }

    .img-protocol {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      top: 7%;
      width: 86%;
    }
  }

  .description {
    font-family: 'Windlass';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 25px 0 0 0;
  }

  @media (max-width: 991px) {
    .description {
      font-size: 13px;
      line-height: 22px;
      margin-top: 19px;
    }
  }
`;
