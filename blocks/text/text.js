export default function decorate(block) {
  var result = [];
  const regex = />([a-zA-Z \d\!]+)</gm;
  const str = block.querySelectorAll('body *:not(style,script)')[0].innerHTML;
  let m;
  
  while ((m = regex.exec(str)) !== null) {
    result.push(m[1]);
  }
  
 /* console.log(result);*/

  delete block.outerHTML;
  var myHTMLstart = "<h1>";
  var myHTMLend = "</h1>";

  var video = '<video src="https://reebok.bynder.com/m/4f85f9f282e0f0ae/original/24SS_Create-What-Makes-You_HP-Masthead_DT.mp4" preload="auto" autoplay="" loop="" playsinline="" webkit-playsinline="" x5-playsinline="" style="width: 100%; height: 100%;"></video>';

  block.outerHTML = video;
  console.log(block.outerHTML);
  }
    