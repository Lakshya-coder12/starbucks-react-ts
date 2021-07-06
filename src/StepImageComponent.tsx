import H3 from "./H3";
import Image from "./Image";

interface Props {
  className?: string;
  heading: string;
  children: React.ReactNode;
  alt: string;
  src: string;
  ImgClass: string;
  applyMediaQueries: boolean;
}

const StepImageComponent: React.FC<Props> = ({
  className,
  heading,
  children,
  alt,
  src,
  ImgClass,
  applyMediaQueries,
}) => {
  let outerDiv = "";
  let innerDiv = "";
  let h3 = "";
  if (applyMediaQueries === true) {
    outerDiv = " md:flex-col md:items-center ";
    innerDiv = "md:text-center";
    h3 = "md:pt-6 md:text-center";
  }
  return (
    <div className={"flex " + outerDiv + className}>
      <Image src={src} alt={alt} className={ImgClass}></Image>
      <div>
        <H3 className={"md:text-19 " + h3}>{heading}</H3>
        <div className={"pt-4 pb-8 text-sm md:text-base " + innerDiv}>
          {children}
        </div>
      </div>
    </div>
  );
};

StepImageComponent.defaultProps = {
  className: "",
};

export default StepImageComponent;
