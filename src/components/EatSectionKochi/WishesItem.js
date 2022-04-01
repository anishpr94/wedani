import React from 'react';
import {Item} from 'semantic-ui-react'
import arippa from '@assets/images/arippa.png';
import littlesoi from '@assets/images/littlesoi.png';
import brindavan from '@assets/images/brindavan.png';
import dheputt from '@assets/images/dheputt.png';
import kashi from '@assets/images/kashi.png';
import paragon from '@assets/images/paragon.png';
import cocoatree from '@assets/images/cocoatree.png';
import './styles.css'

export const ItemExampleDescriptions = () => (
    <Item.Group divided>
      <Item>
        <Item.Image size='small' src={brindavan} />

        <Item.Content>
          <Item.Header as='a'>Brindavan</Item.Header>
          <Item.Description>
            <p>
                <blockquote>"The meal served is so scrumptious 😋 well mannered disciplined staffs.👍"</blockquote>
                <a href="https://g.page/Brindhavan_restaurant_NH?share">Click to get location</a>
            </p>
          </Item.Description>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='small' src={arippa} />

        <Item.Content>
          <Item.Header as='a'>Arippa</Item.Header>
            <Item.Description>
                <p>
                    <blockquote>"One of the popular place to enjoy South Indian cuisines in Cochin. You have to wait when it’s crowded
                        We tried local South Indian meal, served in banana leaf with 20 different items and it was absolutely amazing. It's worth trying if you are not from South India. They do serve other Indian dishes too.
                        Staffs are super friendly and amazing. Worth visiting multiple time."</blockquote>
                    <a href="https://goo.gl/maps/wdZTZDWs6b1bLjrY8">Click to get location</a>
                </p>
            </Item.Description>
        </Item.Content>
      </Item>

        <Item>
            <Item.Image size='small' src={paragon} />

            <Item.Content>
                <Item.Header as='a'>Paragon</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"It's a must visit place if you are at Lulu Mall, Edappally. Located in first, second and third floors. Very good dine-in experience. Excellent service. Rates are higher compared to other paragon restaurants as this one is inside Lulu Mall. But the rates are justified with their service and quality food. Waiting time is normal compared to the rush and they manage the crowd very well. Paragon chicken 65, beef roast and grilled fish tawa are must try."</blockquote>
                        <a href="https://goo.gl/maps/1g3XN2Nu5T528tFq5">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={littlesoi} />

            <Item.Content>
                <Item.Header as='a'>Little Soi</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"It offers an expansive menu of Asian food like Thai,Singapore,Chinese etc."</blockquote>
                        <a href="https://goo.gl/maps/3MZaqG4jAfDf6jui7">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={kashi} />

            <Item.Content>
                <Item.Header as='a'>Kashi Art Café</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"True to its name, the interiors of this café have been done with some eclectic artwork that enhances the historical building which houses this restaurant in Fort Cochin. Since the restaurant also dons the role of an art gallery, you will find many artists flocking here."</blockquote>
                        <a href="https://goo.gl/maps/X2xa8SwPUynAdZCs7">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='small' src={cocoatree} />

            <Item.Content>
                <Item.Header as='a'>Cocoa Tree</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"Cocoa Tree is your ideal place to chill with your people (if your plans don't include drinking i.e.)"</blockquote>
                        <a href="https://goo.gl/maps/sSxyKtAJBbmZdwwc8">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>
            <Item>
                <Item.Image size='small' src={dheputt} />
            <Item.Content>
                <Item.Header as='a'>Dhe Puttu</Item.Header>
                <Item.Description>
                    <p>
                        <blockquote>"A 5 Our Of Five . Last 5 years having food from dhe Puttu the authentic taste remains the same . Very fast service . Hot and tasty food . Decent price and cordial staff . What else you want . Thanks to all the management who are behind this "</blockquote>
                        <a href="https://g.page/dhe-puttu-kochi?share">Click to get location</a>
                    </p>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
)
