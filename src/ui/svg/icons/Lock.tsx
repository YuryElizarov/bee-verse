import {FunctionComponent} from 'react';
import {Svg, SvgProps} from "..";

const Icon: FunctionComponent<SvgProps> = (props) => (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props} >
      <path d="M3.64766 8.4034V8.48602L3.40308 8.4858C3.00938 8.4858 2.72916 8.70236 2.55614 8.95926C2.39538 9.19795 2.30804 9.49292 2.25517 9.76332C2.14838 10.3094 2.14709 10.9565 2.14709 11.3786C2.14709 14.5078 5.29415 16.9117 9.00007 16.9117C12.7059 16.9117 15.853 14.5078 15.853 11.3786C15.853 11.3217 15.8534 11.2597 15.8538 11.1934C15.8565 10.792 15.8602 10.238 15.7788 9.76854C15.7315 9.49536 15.6467 9.19082 15.474 8.94506C15.2829 8.67332 14.9844 8.47914 14.5875 8.48587C14.5396 8.48668 14.4602 8.48741 14.3523 8.48805V8.4034V6.15083C14.3523 3.39278 11.9286 1.08813 8.99997 1.08813C6.07108 1.08813 3.64766 3.32423 3.64766 6.1508V8.4034ZM11.7111 8.49205C10.041 8.49222 7.95743 8.49046 6.2889 8.48877V8.4034V6.25012C6.2889 4.88121 7.47565 3.72134 8.99997 3.72134C10.5202 3.72134 11.7111 4.91514 11.7111 6.25009V8.4034V8.49205ZM9.08502 12.6702L10.1365 14.7099H7.94028L8.92174 12.6567L8.99696 12.4993L9.08502 12.6702ZM9.34437 11.9766L9.00008 12.1138L8.65567 11.9766C8.43875 11.8902 8.25817 11.792 8.1301 11.6518C8.01517 11.5259 7.9118 11.333 7.9118 10.9871C7.9118 10.5447 8.23922 10.0293 8.99997 10.0293C9.60036 10.0293 9.96284 10.5173 9.96284 10.9871C9.96284 11.4742 9.63906 11.8592 9.34437 11.9766Z" fill="#E9FAFF" stroke="#521A0C"/>
    </Svg>
);

export default Icon;