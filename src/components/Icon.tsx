import * as SVGIcon from "../resources/Icons";

type IconName =
  | "arrow"
  | "close"
  | "communication"
  | "exercise"
  | "food"
  | "github"
  | "gmail"
  | "link"
  | "modalGithub"
  | "velog";

export interface IconProps extends React.SVGAttributes<SVGAElement> {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "arrow":
      return <SVGIcon.Arrow {...props} />;
    case "close":
      return <SVGIcon.Close {...props} />;
    case "communication":
      return <SVGIcon.Communication {...props} />;
    case "exercise":
      return <SVGIcon.Exercise {...props} />;
    case "food":
      return <SVGIcon.Food {...props} />;
    case "github":
      return <SVGIcon.Github {...props} />;
    case "gmail":
      return <SVGIcon.Gmail {...props} />;
    case "link":
      return <SVGIcon.Link {...props} />;
    case "modalGithub":
      return <SVGIcon.ModalGithub {...props} />;
    case "velog":
      return <SVGIcon.Velog {...props} />;
    default:
      return null;
  }
}
