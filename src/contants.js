import BtnSelect1Svg from './assets/images/btn-select-1.svg';
import BtnSelect2Svg from './assets/images/btn-select-2.svg';
import BtnSelect3Svg from './assets/images/btn-select-3.svg';
import BtnSelect4Svg from './assets/images/btn-select-4.svg';
import BtnSelect5Svg from './assets/images/btn-select-5.svg';
import BtnSelect6Svg from './assets/images/btn-select-6.svg';
import StakeSvg from './assets/images/stake.svg';
import RebirthSvg from './assets/images/rebirth.svg';
import BurnSvg from './assets/images/burn.svg';

import BoBuSuzukiPng from './assets/images/bobu-szuki.png';
import BurnningGif from './assets/images/Burning.gif';
import StakingGif from './assets/images/Staking.gif';
import RebirthGit from './assets/images/Rebirth.gif';
import AnimGif1 from './assets/images/Animations1.gif';
import AnimGif2 from './assets/images/Animations2.gif';
import AnimGif3 from './assets/images/Animations3.gif';
import AnimGif4 from './assets/images/Animations4.gif';
import AnimGif5 from './assets/images/Animations5.gif';
import AnimGif6 from './assets/images/Animations6.gif';

export const KANE_ITEMS = [
  {
    id: 0,
    title: 'Samurai',
    imgSrc: BtnSelect1Svg,
    animSrc: AnimGif1,
  },
  {
    id: 1,
    title: 'Wizard',
    imgSrc: BtnSelect2Svg,
    animSrc: AnimGif2,
  },
  {
    id: 2,
    title: 'Knight',
    imgSrc: BtnSelect3Svg,
    animSrc: AnimGif3,
  },
  {
    id: 3,
    title: 'Archer',
    imgSrc: BtnSelect4Svg,
    animSrc: AnimGif4,
  },
  {
    id: 4,
    title: 'Assassin',
    imgSrc: BtnSelect5Svg,
    animSrc: AnimGif5,
  },
  {
    id: 5,
    title: 'Enlightened',
    imgSrc: BtnSelect6Svg,
    animSrc: AnimGif6,
  },
];

export const PROTOCOL_ITEMS = [
  {
    id: 'stake',
    title: 'statke',
    imgSrc: StakingGif,
    description:
      'Earn for holding. Utilizing the staking function will grant $SOULS in daily rewards, the amount received via staking will be calculated based on the rarity of your NFT(s).',
  },
  {
    id: 'burn',
    title: 'burn',
    imgSrc: BurnningGif,
    description:
      'Extinguish the light of The Tarnished in exchange for $SOULS.The amount you receive from the burn is calculated algorithmically based on rarity parameters of any given NFT.',
  },
  {
    id: 'rebirth',
    title: 'rebirth',
    imgSrc: RebirthGit,
    description:
      'Rebirthing is a unique function designed to allow members more power over the customization of The Tarnished. You can rebirth and potentially turn your common into something rarer. Rebirthing is a dynamic function that will later allow further customization of traits in the future. ',
  },
];
