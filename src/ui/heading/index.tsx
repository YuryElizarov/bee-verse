import {ReactNode, useMemo} from 'react';
import './styles.scss'
import {EHeadingVariant} from "./types";

function Index({children, variant, className}:{children: ReactNode, variant: EHeadingVariant, className?: string}) {
  const styleClass = useMemo(() => `heading heading_variant-${variant} ${className || ''}`, [className, variant])
  switch (variant) {
    case EHeadingVariant.H2:
      return (<h2 className={styleClass}>{children}</h2>);
    case EHeadingVariant.H3:
      return (<h3 data-text={children} className={styleClass}>{children}</h3>);
    case EHeadingVariant.H4:
      return (<h4 className={styleClass}>{children}</h4>);
    default:
      return (<h5 className={styleClass}>{children}</h5>);
  }

}

export default Index;
