const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  className,
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} className={className} />
      <img src={fallback} alt="" className={className} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;
