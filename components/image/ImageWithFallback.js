const ImgWithFallback = ({
  src,
  fallback,
  type = "image/webp",
  className,
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src.src} type={type} className={className} />
      <img src={fallback.src} alt="" className={className} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;
