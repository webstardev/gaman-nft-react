import Bg1Png from '../../../assets/images/bg1.png';
import BookAnimGif from '../../../assets/images/book.gif';
import { useState } from 'react';

const BOOK_STATS = {
  CLOSE: 0,
  OPENING: 1,
  OPENED: 2,
};

const BookSection = () => {
  const [openBook, setOpen] = useState(BOOK_STATS.CLOSE);

  const onBook = () => {
    setOpen(BOOK_STATS.OPENING);
    setTimeout(() => {
      setOpen(BOOK_STATS.OPENED);
    }, 2900);
  };
  return (
    <section id='section-two'>
      <img className='img-back' src={Bg1Png} alt='bg 1' />
      <div className='container'>
        {openBook === BOOK_STATS.CLOSE && (
          <div className='btn-book' onClick={onBook}></div>
        )}
        {openBook === BOOK_STATS.OPENING && <div className='anim-book'></div>}
        {openBook === BOOK_STATS.OPENED && (
          <>
            <div className='book-div'>
              <h3 className='title'>PROLOGUE</h3>
              “In the Age of the Forgotten, the earth was unformed, covered by
              an eerie mist. A land molded for a humanity left fragmented.
              <br />
              <br />
              Destruction and ruin brought by its inhabitants, Stone Giants and
              Elemental Dragons crush those beneath them.
              <br />
              <br />A world shrouded by darkness and evil, the shadows consume
              the light which once brought hope.
              <br />
              <br />
              Ebalees, a spirit forged from fire, banished from the heavens, the
              Dark Sorceress Baezil, and her Witches of Chaos, Phantos the King
              of the undead, harvesting the dead.
              <br />
              <br />
              Their mission to extinguish the flame of Souls
              <br />
              But then there was light, a rekindled flame, from darkness came
              light, from death came life,
            </div>
            <div className='book-div'>
              God’s light shared within the Souls, providing strength in their
              crusades,
              <br />
              <br />
              The Paladin’s lightning spears pierced through the fog, shimmers
              of hope.The Witches obeyed Ebalees, accumulating souls through
              black magic.
              <br />
              <br />
              As he feasted, his power grew and his army spread. Thus began the
              Age of Darkness, but soon the flames will grow, and only light
              will remain.
              <br />
              <br />
              Yet now, we see not light, but only endless nights, veiled in
              evil.
              <br />
              <br />
              On the brink of annihilation, we turn to the forgotten, the ones
              with purified Souls, For even in dark times, we cannot relinquish
              the things that make us human.
              <br />
              <br />
              Although broken & unspoken, God’s light guides you, within you,{' '}
              <br />… you are the Tarnished, this is your destiny.”
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BookSection;
