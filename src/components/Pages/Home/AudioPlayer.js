import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import AvatarImg from '../../../assets/images/audio-avatar-wrapper.svg';
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
    </ComponentContainer>
  );
};

export default AudioPlayer;

const ComponentContainer = styled.div`
  display: flex;
`;
