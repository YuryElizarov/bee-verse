import {CSSProperties, ReactNode} from 'react';
import './styles.scss'
import {EParagraphVariant} from "./types";

function Index({children, variant, className, styles}: {children: ReactNode, variant?: EParagraphVariant, className?: string, styles?: CSSProperties}) {
  return (
    <p className={`paragraph ${variant ? `paragraph_${variant}` : ''} ${className || ''}`} style={styles}>
      {children}
    </p>
  );
}

export default Index;
