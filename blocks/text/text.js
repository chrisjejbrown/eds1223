export default function decorate(block) {
  var result = [];
  const regex = />([a-zA-Z \d\!]+)</gm;
  const str = block.querySelectorAll('body *:not(style,script)')[0].innerHTML;
  let m;
  
  while ((m = regex.exec(str)) !== null) {
    result.push(m[1]);
  }
  
 /* console.log(result);*/

  var myHTMLstart = "<h1>";
  var myHTMLend = "</h1>";

  block = myHTMLstart + m[1] +  myHTMLend;

  }
    