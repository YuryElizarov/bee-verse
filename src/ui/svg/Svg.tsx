import { FunctionComponent } from 'react';
import {SvgProps} from "./types";

interface OwnProps extends SvgProps{}

type Props = OwnProps;

const Svg: FunctionComponent<Props> = ({width, height='31px', xmlns = 'http://www.w3.org/2000/svg', viewBox, fill, children}) => (
      <svg width={width} height={height} xmlns={xmlns} viewBox={viewBox} fill={fill} >
          {children}
      </svg>
  );

export default Svg;
