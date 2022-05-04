import BtnSelect1Svg from './assets/images/btn-select-1.svg';
import BtnSelect2Svg from './assets/images/btn-select-2.svg';
import BtnSelect3Svg from './assets/images/btn-select-3.svg';
import BtnSelect4Svg from './assets/images/btn-select-4.svg';
import BtnSelect5Svg from './assets/images/btn-select-5.svg';
import BtnSelect6Svg from './assets/images/btn-select-6.svg';
import StakeSvg from './assets/images/stake.svg';
import RebirthSvg from './assets/images/rebirth.svg';
import BurnSvg from './assets/images/burn.svg';

export const KANE_ITEMS = [
  {
    id: 0,
    title: 'Samurai',
    imgSrc: BtnSelect1Svg,
  },
  {
    id: 1,
    title: 'Wizard',
    imgSrc: BtnSelect2Svg,
  },
  {
    id: 2,
    title: 'Knight',
    imgSrc: BtnSelect3Svg,
  },
  {
    id: 3,
    title: 'Archer',
    imgSrc: BtnSelect4Svg,
  },
  {
    id: 4,
    title: 'Assassin',
    imgSrc: BtnSelect5Svg,
  },
  {
    id: 5,
    title: 'Enlightened',
    imgSrc: BtnSelect6Svg,
  },
];

export const PROTOCOL_ITEMS = [
  {
    id: 'stake',
    title: 'statke',
    imgSrc: StakeSvg,
    description:
      'Earn for holding. Utilizing the staking function will grant $SOULS in daily rewards, the amount received via staking will be calculated based on the rarity of your NFT(s).',
  },
  {
    id: 'burn',
    title: 'burn',
    imgSrc: BurnSvg,
    description:
      'Extinguish the light of The Tarnished in exchange for $SOULS.The amount you receive from the burn is calculated algorithmically based on rarity parameters of any given NFT.',
  },
  {
    id: 'rebirth',
    title: 'rebirth',
    imgSrc: RebirthSvg,
    description:
      'Rebirthing is a unique function designed to allow members more power over the customization of The Tarnished. You can rebirth and potentially turn your common into something rarer. Rebirthing is a dynamic function that will later allow further customization of traits in the future. ',
  },
];
