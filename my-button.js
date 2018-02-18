import { html, render } from '/node_modules/lit-html/lib/lit-extended.js';

const template = props => html`
  <style>
    :host {
      display: block;
    }
  </style>
  <div>
    <button on-click="${props.onClick}">${props.text}</button>
  </div>
`;

export default class MyButton extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(_attrName, _old, _new) {
    this.render();
  }
  render() {
    const text = this.getAttribute('text');
    render(template({
        text,
        onClick: this.onClick,
    }), this._shadowRoot);
  }
  onClick() {
    this.dispatchEvent(new CustomEvent("my-click", {bubbles: true, composed: true}));
  }
}

window.customElements.define('my-button', MyButton);