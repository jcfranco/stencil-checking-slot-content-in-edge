/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ElInner {}
  interface ElOuter {}
}

declare global {


  interface HTMLElInnerElement extends Components.ElInner, HTMLStencilElement {}
  var HTMLElInnerElement: {
    prototype: HTMLElInnerElement;
    new (): HTMLElInnerElement;
  };

  interface HTMLElOuterElement extends Components.ElOuter, HTMLStencilElement {}
  var HTMLElOuterElement: {
    prototype: HTMLElOuterElement;
    new (): HTMLElOuterElement;
  };
  interface HTMLElementTagNameMap {
    'el-inner': HTMLElInnerElement;
    'el-outer': HTMLElOuterElement;
  }
}

declare namespace LocalJSX {
  interface ElInner {}
  interface ElOuter {}

  interface IntrinsicElements {
    'el-inner': ElInner;
    'el-outer': ElOuter;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'el-inner': LocalJSX.ElInner & JSXBase.HTMLAttributes<HTMLElInnerElement>;
      'el-outer': LocalJSX.ElOuter & JSXBase.HTMLAttributes<HTMLElOuterElement>;
    }
  }
}


