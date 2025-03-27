import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

const LinkedIn = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      fill="#0A66C2"
      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.031.466 1.032 1.032c0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.88.88 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"
    />
  </svg>
);
export default LinkedIn;
