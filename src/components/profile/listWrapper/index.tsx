import './styles.scss'
import {ReactNode, useRef, useState} from "react";
import Backing from "../../genereal/backing";
import {EBacking} from "../../genereal/backing/types.ts";

function Index({children, header, data, baseTop = -60, maxTop = -200, className}: {className?: string, header?: ReactNode, children?: ReactNode, data: ReactNode, baseTop?: number, maxTop?: number }) {
  const [top, setTop] = useState<number>(baseTop)
  const [startY, setStartY] = useState<number | null>(null)
  const listRef = useRef<null | HTMLDivElement>(null)

  const onTouchStartHandler = (e: any) => {
    const touch = e?.touches[0] || e.changedTouches[0];
    setStartY(touch.clientY);
  }
  const onTouchEndHandler = () => {
    setStartY(null);
  }
  const onTouchMoveHandler = (e: any) => {
    const touch = e?.touches[0] || e.changedTouches[0];
    const currentY = touch.clientY;
    const deltaY = startY - currentY;

    setTop(prevState => {
      let newTop = prevState - deltaY;

      if (newTop < maxTop) newTop = maxTop;
      if (newTop > baseTop) newTop = baseTop;
      return newTop
    });
  }
  const handleChildClick = (e) => {
    e.stopPropagation(); // Останавливаем распространение события
  };

  return (
    <div
      style={{top: `${top}px`, paddingBottom: `${280 + top < 0 ? 0 : 280 + top}px`}} className={`list-wrapper ${className || ''}`}
      onTouchStart={onTouchStartHandler}
      onTouchEnd={onTouchEndHandler}
      onTouchMove={onTouchMoveHandler}
    >
      <div className="list-wrapper__header">
        {header}
      </div>
      <div className="list-wrapper__content" ref={listRef}
           onTouchStart={handleChildClick}
           onTouchMove={handleChildClick}>
        <Backing variant={EBacking.Stone}>
          {children}
          <div className="list-wrapper__list">
            {data}
          </div>
        </Backing>
      </div>
    </div>
  );
}

export default Index;
