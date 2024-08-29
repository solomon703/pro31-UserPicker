// ! Getting Elements!
let color = document.getElementById("color");
let background = document.getElementById("background");
let border = document.getElementById("border");
let padding = document.getElementById("padding");
let height = document.getElementById("height");
let width = document.getElementById("width");
let apply1 = document.getElementById("apply");
// ! custome Button
let custome = document.getElementById("custome");
// ! Function Apply()
function apply(){
  // ! Apply Button Style 
  let Color = color.value;
  let Background = background.value;
  let Border = border.value;
  let Padding = padding.value;
  let Height = height.value;
  let Width = width.value;
  // ! custome button style
  custome.style.color = Color;
  custome.style.backgroundColor = Background;
  custome.style.borderRadius = Border;
  custome.style.padding = Padding;
  custome.style.height = Height;
  custome.style.width =Width;

}