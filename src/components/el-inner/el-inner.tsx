import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'el-inner',
  shadow: true
})
export class ElInner {
  @Element()
  el: HTMLElement;

  componentDidLoad() {
    // Is there an Edge-equivalent to this?
    console.log("inner", this.el.shadowRoot.querySelector<HTMLSlotElement>("slot[name=header]").assignedElements().length);
  }

  render() {
    return (
      <Host>
        <p>-- inner start</p>
        <slot name="header"></slot>
        <p>-- inner stop</p>
      </Host>
    )
  }
}
