import clsx from "clsx";

const Avatar = ({ src, alt, size = "md", className }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className={clsx(
        "rounded-full object-cover",
        sizes[size],
        className
      )}
    />
  );
};

export default Avatar;
