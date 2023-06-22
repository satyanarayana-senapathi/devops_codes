type ImageProps = {
  src: string;
  alt: string;
  width?:string;
  height?:string;
  onClick?:()=>void;
};
const Image = ({ src, alt, width,height,onClick}: ImageProps) => {
  return (
    <img src={src} alt={alt} width={width} height={height} onClick={onClick}/>
  );
};

export default Image;
