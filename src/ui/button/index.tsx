import {ReactNode, useMemo} from 'react';
import {Link} from "react-router-dom";
import './styles.scss'
import {EButtonSize, EButtonVariant} from "./types";

function Index({
                 children,
                 disabled,
                 href,
                 className,
                 variant = EButtonVariant.StoneDiamond,
                 size = EButtonSize.Default,
                 to,
                 icon,
                 onClick
               }: {
  children: ReactNode,
  icon?: ReactNode,
  disabled?: boolean,
  className?: string,
  variant?: EButtonVariant,
  size?: EButtonSize,
  href?: string,
  to?: string,
  onClick?: () => void | Promise<void>,
}) {
  const classStyle = useMemo(() => {
    const [border, bg] = variant.split('-')
    return `button button_${border} button_${bg} button_size-${size} ${className || ''}`
  }, [variant, className, size])
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classStyle}>
        <div className="button__inner">
          <div className="button__bg "></div>
          <div className="button__text">
            {children}
          </div>
          {icon}
        </div>
      </Link>
    );
  }
  if (href) {
    return (
      <a target='_blank' rel='noopener noreferrer' href={href} onClick={onClick} className={classStyle}>
        <span className="button__inner">
          <span className="button__bg"></span>
          <span className="button__text">
            {children}
          </span>
          {icon}
        </span>
      </a>
    );
  }
  return (
    <button className={classStyle} disabled={disabled} onClick={onClick} type='button'>
      <span className="button__inner">
        <span className="button__bg"></span>
        <span className="button__text">
          {children}
        </span>
        {icon}
      </span>
    </button>
  );
}

export default Index;
