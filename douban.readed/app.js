var cheerio = require('cheerio');
var superagent = require('superagent');




function hackhtml(text){
  var $ = cheerio.load(text);
    var items = [];
    $('.item-show').each(function (idx, element) {
      // if (idx ==1){
      if (true){
        var $element = $(element);
        var c = childBy2(element,'div','title')
        var d = childBy1(c,'a')
        // console.log(d.children[0].data.trim())            
        // console.log(d.attribs.href.trim())                 
        var e = childBy2(element,'div','date')
        // console.log(d)
        // console.log(joinData(e).trim())
        items.push({
          title:d.children[0].data.trim(),
          href:d.attribs.href.trim(),
          date:joinData(e).trim()
        })
      }
    });
    return items
}

function joinData(element){
  var r  =''
  for(var i=0;i<element.children.length;i++){
    var c =  element.children[i]
    if (c.type =='text' ){
      // console.log(c)
        r += c.data
    }    
  }
  return r;
  // return undefined
}


function childBy2(element,tag,class1){
  for(var i=0;i<element.children.length;i++){
    var c =  element.children[i]
    if (c.type =='tag' && c.name ==tag && c.attribs.class == class1)
        return c    
  }
  return undefined
}
function childBy1(element,tag){
  for(var i=0;i<element.children.length;i++){
    var c =  element.children[i]
    if (c.type =='tag' && c.name ==tag )
        return c    
  }
  return undefined
}
url = 'https://cnodejs.org/'
url = "http://book.douban.com/people/1830596/collect?sort=time&start=159&filter=all&mode=list&tags_sort=count"
superagent.get(url)
  .end(function (err, sres) {
    if (err) {
      return next(err);
    }
    console.log (hackhtml(sres.text))    
  });

