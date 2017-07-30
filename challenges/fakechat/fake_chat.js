function SelectLeftSide(){
  if(document.getElementById("message").value !=''){
    var Paragraph = document.createElement('p');
    var t = document.createTextNode(document.getElementById("message").value);
    Paragraph.appendChild(t);
    document.body.appendChild(Paragraph);
    Object.assign(document.body.appendChild(Paragraph).style,{margin: "2px 20% 2.5% 1%",
      padding: "1%",
      'border-top-right-radius': '2em',
      'border-top-left-radius': "2em",
      'border-bottom-right-radius': "2em",
      'border-bottom-left-radius': "2em",
      'word-wrap': 'break-word',
      'background-color':'#f5fffa',
      'color' : 'black'});
      window.scrollTo(0,document.body.scrollHeight);
      document.getElementById("message").value="";
  }
  else{
    alert("please type a message");
  }
}
function SelectRightSide(){
  if(document.getElementById("message").value !=''){
    var Paragraph = document.createElement('p');
    var t = document.createTextNode(document.getElementById("message").value);
    Paragraph.appendChild(t);
    document.body.appendChild(Paragraph);
    Object.assign(document.body.appendChild(Paragraph).style,{margin: "2px 1% 2.5% 20%",
      padding: "1%",
      'border-top-right-radius': '2em',
      'border-top-left-radius': "2em",
      'border-bottom-right-radius': "2em",
      'border-bottom-left-radius': "2em",
      'word-wrap': 'break-word',
      'background-color':'#dcf8c6'});
      window.scrollTo(0,document.body.scrollHeight);
      document.getElementById("message").value="";
    }
    else{
      alert("please type a message");
    }
}
function DeleteMessage(){
  var list = document.getElementById("deleteTarget");
  if(list.childNodes.length>16){
  list.removeChild(list.childNodes[list.childNodes.length-1]);
  //console.log(list.childNodes.length);
 }
}
