import H3 from "./H3";
import Image from "./Image";

interface Props {
  className?: string;
  heading: string;
  children: React.ReactNode;
  alt: string;
  src: string;
  ImgClass: string;
}

const StepImageComponent: React.FC<Props> = ({
  className,
  heading,
  children,
  alt,
  src,
  ImgClass,
}) => {
  return (
    <div className={"flex " + className}>
      <Image src={src} alt={alt} className={ImgClass}></Image>
      <div>
        <H3>{heading}</H3>
        <div className="pt-4 pb-8 text-sm">{children}</div>
      </div>
    </div>
  );
};

StepImageComponent.defaultProps = {
  className: "",
};

export default StepImageComponent;
