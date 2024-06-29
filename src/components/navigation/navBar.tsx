import { NavItem } from './navItem';
import { items } from './items';
import NavItemImage from './navItemImage';

import playImage from '../../assets/character-counting-dollars.png';
import earnImage from '../../assets/coins-small.png';
import boostImage from '../../assets/flash.png';

import playText from '../../assets/play-text.png';
import earnText from '../../assets/earn-text.png';
import boostText from '../../assets/boost-text.png';

interface Item {
  path: string;
}

const pathToImagesMap: {
  [key: string]: { images: string[]; textImages: string[] };
} = {
  '/': { images: [playImage], textImages: [playText] },
  '/earn': { images: [earnImage], textImages: [earnText] },
  '/boost': { images: [boostImage], textImages: [boostText] },
};

const NavBar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul
        style={{
          display: 'flex',
          minHeight: '6rem',
          justifyContent: 'space-around',
        }}
      >
        {items.map(({ path }: Item) => {
          const imageGroup = pathToImagesMap[path];

          if (!imageGroup) return null;

          const { images, textImages } = imageGroup;

          return (
            <NavItem key={path} path={path}>
              {images.map((src, i) => (
                <NavItemImage
                  key={`${path}-image-${i}`}
                  src={src}
                  alt={`${path}-image-${i}`}
                  isTextImage={false}
                />
              ))}
              {textImages.map((src, i) => (
                <NavItemImage
                  key={`${path}-text-${i}`}
                  src={src}
                  alt={`${path}-text-${i}`}
                  isTextImage={true}
                />
              ))}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
