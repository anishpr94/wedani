import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';
import { Card, Icon , Grid, Image} from 'semantic-ui-react'
import chottanikara from '@assets/images/chottanikara.png';
import fortkochi from '@assets/images/fortkochi.png';
import cherai from '@assets/images/cherai1.png';
import athirapilly from '@assets/images/athirapilly.png';
import lulu from '@assets/images/lulu.png';
import marine from '@assets/images/marine.png';
import './styles.css'

function InfoItem({ image, name, infoName, description, isActive, map }) {

  const renderItem = () => {
    return (
      <div className="item" css={styWrapperItem}>
        <div className='testimony-slide text-center active'>
          <figure>
            <img src={image} alt="user" loading="lazy" />
          </figure>
          <h4>{name}</h4>
          <span className="infoName">{infoName}</span>
          <blockquote>
            <p className="description">{description}</p>
          </blockquote>
          <blockquote>
            <p className="description">{map}</p>
          </blockquote>
        </div>
      </div>
    );
  };

  const renderItem1 = () => {
    return (
        <Card
            image={image}
            header={name}
            meta={description}
            description={description}
            extra={map}
        />
    );
  }


  return <div css={styWithAnimation(isActive)}>{renderItem1()}</div>;
}

InfoItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  infoName: string.isRequired,
  description: string.isRequired,
  map: string,
  isActive: bool.isRequired,
};

export default React.memo(InfoItem);

export const GridExampleDividedPhrase = () => (
    <Grid columns='two' celled>
      <Grid.Row>
        <Grid.Column>
          <h4>Cherai beach & Puthuvype beach</h4>
          <span className="infoName">One of the best beach in Ernakulam, <a href="https://goo.gl/maps/uoLjUTRG1jNLjcx37">Click to get location</a></span>
          <img src={cherai} alt="user" loading="lazy" />
            <p className="description">This charming beach is neatly nestled in the suburbs of Cherai, which is one of the most visited beaches due to its serenity and clean environ. The low tides and slow waves make it a highly recommended beach for swimming and other forms of water sports. It has an alluring walkway along the beach dotted with greens and sufficient places for seating. </p>
        </Grid.Column>
        <Grid.Column>
          <h4>Fort Kochi</h4>
          <span className="infoName">Get the european town feel, <a href="https://goo.gl/maps/a41KSWo82y86BzbU9">Click to get location</a></span>
          <img src={fortkochi} alt="user" loading="lazy" />
            <p className="description">A small fishing hamlet later converted to the first European township in India, today features amongst tourist places in Kochi due to the vibrancy of this place. The temperature is more or less pleasant round the year except for summer making it ideal to explore the place in a motorcycle to navigate the deepest history and beauty of this place.    </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <h4>Athirapally Falls</h4>
        <span className="infoName">Experience the bahubali waterfalls!, <a href="https://goo.gl/maps/aZjbvB4YMn6hn3MZ8">Click to get location</a></span>
        <img src={athirapilly} alt="user" loading="lazy" />
          <p className="description">At a height of 80m, this is the largest waterfall of Kerala and is often regarded as the“ Niagra of India”. The Athirapally Falls is a charming cascade of frothy waters emerging from the Anamudi mountains of the western ghats.</p>
      </Grid.Column>
        <Grid.Column>
          <h4>Chottanikara Bhagavathy Temple</h4>
          <span className="infoName">Spiritualize yourself, <a href="https://goo.gl/maps/yDsM6xCYKCoUfhE59">Click to get location</a></span>
          <img src={chottanikara} alt="user" loading="lazy" />
            <p className="description">This is the most visited and highly revered Hindu temple down south. The temple is believed to be 1500 year old where the goddess Chottanikkara Bhagavathy Amman and the Keezhu Kaavu Bhadrakali Amman are worshipped as healing goddesses. A continuous practice of worshipping the deities in this temple is believed to cure life-threatening diseases.
            </p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <h4>Marine Drive & Chathiyath</h4>
          <span className="infoName">For an evening walk!, <a href="https://goo.gl/maps/RzX1mcuB2xzLUCKe8">Click to get location</a></span>
          <img src={marine} alt="user" loading="lazy" />
          <p className="description">Marine drive is a quaint destination amongst the many Cochin tourist places the Kerala takes pride in. Exclusively built facing the backwaters, it offers a charming and a picturesque image especially during the evening hours attracting the locals and tourists alike. .</p>
        </Grid.Column>
        <Grid.Column>
          <h4>Lulu mall</h4>
          <span className="infoName">A visit to ernakulam would be incomplete without this, <a href="https://g.page/LuLuMall?share">Click to get location</a></span>
          <img src={lulu} alt="user" loading="lazy" />
          <p className="description">Lulu Mall is the largest mall in India regarding total retail space of 1.7 million square feet. Situated in Edapally, Kochi, the mall sprawls over an extensive area of 17 acres with 215 outlets of restaurants, multiplex, food courts, entertainment zones, bowling alley, money exchange centres, arcade games and 5D cinema.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)
