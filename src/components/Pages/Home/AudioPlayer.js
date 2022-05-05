import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import AvatarImg from '../../../assets/images/audio-avatar-wrapper.svg';
import BtnPlaySvg from '../../../assets/images/btn-play.svg';
import BtnPrevSvg from '../../../assets/images/btn-audio-prev.svg';
import BtnNextSvg from '../../../assets/images/btn-audio-next.svg';

const AudioPlayer = () => {
  return (
    <ComponentContainer>
      <div className='avatar-wrapper'>
        <img src={AvatarImg} alt='avatar' />
      </div>
      <div className='content'>
        <h6>TRACE1</h6>
        <p>Junoflo E G2</p>
      </div>
      <div className='ctrl-wrapper'>
        <div className='btn-prev'>
          <img src={BtnPrevSvg} alt='prev' />
        </div>
        <div className='btn-play'>
          <img src={BtnPlaySvg} alt='play' />
        </div>
        <div className='btn-next'>
          <img src={BtnNextSvg} alt='next' />
        </div>
      </div>
    </ComponentContainer>
  );
};

export default AudioPlayer;

const ComponentContainer = styled.div`
  display: flex;
  align-items: center;

  .avatar-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-contents: center;
    margin-left: 11px;

    h6 {
      font-family: 'Breathe Fire';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 29px;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      color: #FFFFFF;
      margin: 0 0 11px 0;
    }

    p {
      font-family: 'Windlass';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 11px;
      display: flex;
      align-items: center;
      color: #9C9C9C;
      margin: 0;
    }
  }

  .ctrl-wrapper {
    display: flex;
    align-items: center;
    margin-left: 40px;
    div {
      display: inline-flex;
      cursor: pointer;
      &:hover {
        filter: brightness(0.75);
      }
      &.btn-play {
        margin-left: 37px;
        margin-right: 37px;
      }
    }
  }
`;
