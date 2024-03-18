class FormuleMathematique {
  static get toolbox() {
    return {
      title: "Math",
      icon: '<svg viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: #1c1c1c; } .cls-2 { fill: none; } </style> </defs> <polygon points="26 18 24 18 22 21.897 20 18 18 18 20.905 23 18 28 20 28 22 24.201 24 28 26 28 23.098 23 26 18"></polygon> <path class="cls-1" d="M19,6V4H13.9133a1.9906,1.9906,0,0,0-1.9919,1.8188L11.2686,13H7v2h4.0867l-1,11H5v2h5.0867a1.9906,1.9906,0,0,0,1.9919-1.8188L13.0952,15H18V13H13.2769l.6364-7Z"></path> <rect id="_Transparent_Rectangle" data-name=" Transparent Rectangle" class="cls-2" width="32" height="32"></rect> </g></svg>',
    };
  }

  constructor({ math, data }) {
    this.wrapper = undefined;
    this.math = math;
    this.data = data;
  }
  render() {
    this.wrapper = document.createElement("div");
    // Initialize MathLive
    this.input = new MathfieldElement();
    this.input.value = this.data.math;
    this.input.id = "math1";
    this.wrapper.classList.add("simple-formule");
    this.wrapper.appendChild(this.input);
    console.log(this.wrapper);

    console.log(this.data.math);
    return this.wrapper;
  }

  save(blockContent) {
    return {
      math: this.input.value,
    };
  }
}
