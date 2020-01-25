import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'el-outer',
  shadow: true
})
export class ElOuter {
  @Element()
  el: HTMLElement;

  componentDidLoad() {
    // Is there an Edge-equivalent to this?
    console.log("outer", this.el.shadowRoot.querySelector<HTMLSlotElement>("slot[name=header]").assignedElements().length);
  }

  render() {
    return (
      <Host>
        <p>- outer start</p>
        <slot name="header"></slot>
        <slot></slot>
        <p>- outer stop</p>
      </Host>
    );
  }
}
