import React from 'react';
import Helmet from 'react-helmet';
import full01 from '../assets/images/fulls/01.jpg';
import full02 from '../assets/images/fulls/02.jpg';
import full03 from '../assets/images/fulls/03.jpg';
import full04 from '../assets/images/fulls/04.jpg';
import full05 from '../assets/images/fulls/05.jpg';
import full06 from '../assets/images/fulls/06.jpg';
import thumb01 from '../assets/images/thumbs/01.jpg';
import thumb02 from '../assets/images/thumbs/02.jpg';
import thumb03 from '../assets/images/thumbs/03.jpg';
import thumb04 from '../assets/images/thumbs/04.jpg';
import thumb05 from '../assets/images/thumbs/05.jpg';
import thumb06 from '../assets/images/thumbs/06.jpg';
import Gallery from '../components/Gallery';
import Layout from '../components/layout';

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
];

const HomeIndex = () => {
  const siteTitle = 'Jona Schlegel - landscape archaeologist';
  const siteDescription = 'Portfolio and Blog';

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <section id="one">
        <header className="major">
          <h2>Welcome to a presentation of my work, skills and life.</h2>
        </header>
        <p>
          Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
          lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
          tortor primis integer massa adipiscing id nisi accumsan pellentesque
          commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
          faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque
          cubilia.
        </p>
        <ul className="actions">
          <li>
            <a href="/portfolio" className="button">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/cv" className="button">
              CV and Skills
            </a>
          </li>
        </ul>
      </section>

      {/* <section id="two">
          <h2>Blog</h2>

          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a href="/blog" className="button">
                Read more
              </a>
            </li>
          </ul>
        </section> */}
    </Layout>
  );
};

export default HomeIndex;
