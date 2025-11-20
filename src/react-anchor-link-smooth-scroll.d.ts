declare module 'react-anchor-link-smooth-scroll' {
  import { Component, ReactNode } from 'react';

  export interface AnchorLinkProps {
    href: string;
    offset?: string | number | (() => number);
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
  }

  export default class AnchorLink extends Component<AnchorLinkProps> {}
}

