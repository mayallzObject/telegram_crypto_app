interface NavItemImageProps {
  src: string;
  alt: string;
  isTextImage: boolean;
}

const NavItemImage = ({
  src,
  alt,
  isTextImage,
}: NavItemImageProps) => {
  const style = isTextImage
    ? { width: 'auto', height: '1.2rem' }
    : { width: 'auto', height: '3.3rem' };

  return <img src={src} alt={alt} style={style} />;
};

export default NavItemImage;
