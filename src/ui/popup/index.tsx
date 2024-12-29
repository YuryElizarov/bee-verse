import './styles.scss'
import Heading from "../heading";
import {EHeadingVariant} from "../heading/types";
import Paragraph from "../paragraph";
import {EParagraphVariant} from "../paragraph/types";
import {ReactNode, useEffect, useRef} from "react";

function Index({onClose, children, className, title, description, isCloseOnMissClick = true}: {
  title: string | ReactNode,
  description?: string | ReactNode,
  children?: ReactNode,
  className?: string,
  isCloseOnMissClick?: boolean,
  onClose: () => void
}) {
  const wrapper = useRef<HTMLDivElement | null>(null)
  useEffect(() => {

    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('overflow')
    }

    return () => {
      if (body) {
        body.classList.toggle('overflow')
      }
    };
  }, []);

  return (
    <div className='popup-wrapper' ref={wrapper} onClick={(event) => {
      if (event.target === wrapper.current && isCloseOnMissClick) {
        onClose()
      }
    }}>
      <div className={["popup", className || ''].join(' ')}>
        <Heading variant={EHeadingVariant.H2}>{title}</Heading>
        {description && <Paragraph variant={EParagraphVariant.default_1}>{description}</Paragraph>}
        <div className="popup__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Index;
