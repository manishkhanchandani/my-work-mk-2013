if(!window.DHTMLSuite)var DHTMLSuite=new Object();DHTMLSuite.listModel=function(inputArray){var options;this.options=new Array()}
DHTMLSuite.listModel.prototype =
{addElement:function(value,text){var index=this.options.length;this.options[index]=new Object();this.options[index].value=value;this.options[index].text=text},deleteAll:function(){this.options.length=0},deleteOptionByValue:function(value){for(var no=0;no<this.options.length;no++){if(this.options[no].value==value){this.options.splice(no,1);return}}},createFromMarkupSelect:function(elId){var obj=document.getElementById(elId);if(obj&&obj.tagName.toLowerCase()!='select')obj=false;if(!obj){alert('Error in listModel.createFromMarkupSelect-cannot create elements from select box with id '+elId);return}
for(var no=0;no<obj.options.length;no++){var index=this.options.length;this.options[index]=new Object();this.options[index].value=obj.options[no].value;this.options[index].text=obj.options[no].text}
obj.style.display='none'},createFromMarkupUlLi:function(elId){var obj=document.getElementById(elId);if(obj&&obj.tagName.toLowerCase()!='ul')obj=false;if(!obj){alert('Error in listModel.createFromMarkupSelect-cannot create elements from select box with id '+elId);return}
var lis=obj.getElementsByTagName('LI');for(var no=0;no<lis.length;no++){var index=this.options.length;this.options[index]=new Object();this.options[index].value=lis[no].getAttribute('title');if(!this.options[index].value)this.options[index].value=lis[no].title;this.options[index].text=lis[no].innerHTML}
obj.style.display='none'}}