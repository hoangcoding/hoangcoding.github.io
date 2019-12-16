declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module 'giphy-js-sdk-core';
declare module 'remark';
declare module 'remark-react';
declare module 'remark-parse';
declare module 'remark-html';
declare module 'remark-breaks';
