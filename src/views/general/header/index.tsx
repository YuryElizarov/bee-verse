import './styles.scss'
import Heading from "../../../ui/heading";
import {EHeadingVariant} from "../../../ui/heading/types.ts";
import Paragraph from "../../../ui/paragraph";
import {EParagraphVariant} from "../../../ui/paragraph/types.ts";
import IconButton from "../../../ui/iconButton";
import {BackIcon} from "../../../ui/svg";
import {EHeaderVariant} from "./types.ts";
import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";

function Index({variant, text, title, widgets}: {title: string, text?: string, variant: EHeaderVariant, widgets?: ReactNode}) {
  const navigate = useNavigate()
  return (
    <div className={`header header_${variant}`}>
      <div className="header__nav">
        <div className="header__nav__back">
          <IconButton onClick={() => navigate('/village')}><BackIcon/></IconButton>
        </div>
        <div className="header__nav__title-block">
          <Heading variant={EHeadingVariant.H2}>{title}</Heading>
          {text && <Paragraph variant={EParagraphVariant.default_1}>{text}</Paragraph>}
        </div>
      </div>
      {widgets && <div className="header__widgets">
        {widgets}
      </div>}
    </div>
  );
}

export default Index;
