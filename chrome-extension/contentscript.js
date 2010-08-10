

function showBooks(responseText) {
  parser=new DOMParser();
  responseXML=parser.parseFromString(responseText,"text/xml");
  var books = responseXML.getElementsByTagName("book");

  for (var i = 0, book; (book = books[i]) && i < 5; i++) {
    var a = document.createElement("a");
    a.innerText = book.getAttribute("price") + ' TL, ' + book.getAttribute("name");
    a.href = book.getAttribute("link");
    document.body.appendChild(a);
    document.body.appendChild(document.createElement("br"));
    alert(a.innerText);
  }
  
}

var re = /ISBN.*[0-9]{10}/g;
isbn = document.body.innerHTML.match(re)[0].slice(-10)
alert(isbn);
chrome.extension.sendRequest({'action' : 'fetchBooks', 'selectedText' : isbn}, showBooks);

