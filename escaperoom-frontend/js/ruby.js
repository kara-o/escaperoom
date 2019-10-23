class Ruby {
  constructor(id, className, image, leftPosition, topPosition) {
    this.id = id;
    this.className = className;
    this.image = image;
    this.leftPosition = leftPosition;
    this.topPosition = topPosition;
  }

  newRubyOnPage(parentContainer) {
    const newRuby = document.createElement('img');
    newRuby.id = this.id
    newRuby.class = this.className;
    newRuby.src = this.image;
    newRuby.style.left = this.leftPosition;
    newRuby.style.top = this.topPosition;
    newRuby.style.display = "none";
    parentContainer.appendChild(newRuby)
  }

  throwRuby(newClass) {
    let ruby = document.getElementById(this.id);
    ruby.className = newClass;
    ruby.style.display = "block";
  }
}
//     .box {
//   display: block;
//   background: lightblue;
//   margin-bottom: 1em;
// }
//
//
// #spin-in {
//   opacity: .2;
//   height: 50px;
//   width: 50px;
//   transform: translateX(0) rotate(0deg);
//   transition: all .75s ease;
// }
//
// #spin-in.show2 {
//   transform: translateX(450px) rotate(720deg);
//   opacity: 1;
// }
