if(!window.DHTMLSuite)var DHTMLSuite=new Object();if(!window.DHTMLSuite)var DHTMLSuite=new Object();/************************************************************************************************************
var refToTabViewObjects=new Array();DHTMLSuite.tabView=function(){var textPadding;var strictDocType ;var DHTMLSuite_tabObj;var activeTabIndex;var initActiveTabIndex;var ajaxObjects;var tabView_countTabs;var tabViewHeight;var tabSetParentId;var tabTitles;var width;var height;var layoutCSS;var outsideObjectRefIndex;var maxNumberOfTabs;var dynamicContentObj;var closeButtons;var refActiveTabContent;var callbackOnTabSwitch;this.initActiveTabIndex=0;this.callbackOnTabSwitch='';this.refActiveTabContent='';this.textPadding=3;this.strictDocType=true;this.ajaxObjects=new Array();this.tabTitles=new Array();this.layoutCSS='tab-view.css';this.maxNumberOfTabs=6;this.dynamicContentObj=false;this.closeButtons=new Array();this.width='100%';this.height='500';try{if(!standardObjectsCreated)DHTMLSuite.createStandardObjects()}catch(e){alert('Include the dhtmlSuite-common.js file')}}
DHTMLSuite.tabView.prototype={init:function(){DHTMLSuite.commonObj.loadCSS(this.layoutCSS);this.outsideObjectRefIndex=refToTabViewObjects.length;refToTabViewObjects[this.outsideObjectRefIndex]=this;try{this.dynamicContentObj=new DHTMLSuite.dynamicContent()}catch(e){alert('Include DHTMLSuite-dynamicContent.js')}
this.__initializeAndParseTabs(false,false)},setCallbackOnTabSwitch:function(callbackOnTabSwitch){this.callbackOnTabSwitch=callbackOnTabSwitch},getMaximumNumberOfTabs:function(){return this.maxNumberOfTabs},setMaximumTabs:function(maximumNumberOfTabs){this.maxNumberOfTabs=maximumNumberOfTabs},setParentId:function(idOfParentHTMLElement){this.tabSetParentId=idOfParentHTMLElement;this.DHTMLSuite_tabObj=document.getElementById(idOfParentHTMLElement)},setWidth:function(newWidth){this.width=newWidth},setHeight:function(newHeight){this.height=newHeight},setIndexActiveTab:function(indexOfNewActiveTab){this.initActiveTabIndex=indexOfNewActiveTab},setTabTitles:function(titleOfTabs){this.tabTitles=titleOfTabs},setCloseButtons:function(closeButtons){this.closeButtons=closeButtons},getReferenceToDivElementByTitle:function(tabTitle){var index=this.getTabIndexByTitle(tabLabel);if(index!=-1){var obj=document.getElementById('tabView'+this.tabSetParentId+'_'+index);return obj}
return false},getReferenceToDivElementById:function(idOfTab){var divs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');for(var no=0;no<divs.length;no++){var attr=divs[no].getAttribute('originalId');if(!attr)attr=divs[no].originalid;if(attr==idOfTab)return divs[no]}
return false},createNewTab:function(parentId,tabTitle,tabContent,tabContentUrl,closeButton){var index=this.getTabIndexByTitle(tabTitle);if(index!=-1){this.displayATab(tabTitle,index);return false}
if(this.tabView_countTabs>=this.maxNumberOfTabs)return;var div=document.createElement('DIV');div.className='DHTMLSuite_aTab';this.DHTMLSuite_tabObj.appendChild(div);var tabId=this.__initializeAndParseTabs(true,tabTitle,closeButton);if(tabContent)div.innerHTML=tabContent;if(tabContentUrl){this.dynamicContentObj.loadContent('tabView'+parentId+'_'+tabId,tabContentUrl)}
this.tabTitles[tabId]=tabTitle;return true},deleteTab:function(tabLabel,tabIndex){if(tabLabel){var index=this.getTabIndexByTitle(tabLabel);if(index!=-1){this.deleteTab(false,index)}}else if(tabIndex>=0){if(document.getElementById('tabTab'+this.tabSetParentId+'_'+tabIndex)){var obj=document.getElementById('tabTab'+this.tabSetParentId+'_'+tabIndex);var id=obj.parentNode.parentNode.id;DHTMLSuite.discardElement(obj);var obj2=document.getElementById('tabView'+this.tabSetParentId+'_'+tabIndex);DHTMLSuite.discardElement(obj2);this.__resetTabIds(this.tabSetParentId);this.initActiveTabIndex=-1;var newIndex=0;if(refToTabViewObjects[this.outsideObjectRefIndex].activeTabIndex==tabIndex)refToTabViewObjects[this.outsideObjectRefIndex].activeTabIndex=-1;this.__showTab(this.tabSetParentId,newIndex,this.outsideObjectRefIndex)}}},addContentToTab:function(tabLabel,filePath){var index=this.getTabIndexByTitle(tabLabel);if(index!=-1){this.dynamicContentObj.loadContent('tabView'+this.tabSetParentId+'_'+index,filePath)}},displayATab:function(tabLabel,tabIndex){if(tabLabel){var index=this.getTabIndexByTitle(tabLabel);if(index!=-1){this.initActiveTabIndex=index}else return false}else{this.initActiveTabIndex=tabIndex}
this.__showTab(this.tabSetParentId,this.initActiveTabIndex,this.outsideObjectRefIndex)
},getTabIndex:function(){var divs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');var tabIndex=0;for(var no=0;no<divs.length;no++){if(divs[no].id.indexOf('tabTab')>=0){if(divs[no].className!='tabInactive')return tabIndex;tabIndex++}}
return tabIndex},getActiveTabContentObj:function(){var divs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');var tabIndex=0;for(var no=0;no < divs.length;no++){if(divs[no].className=='DHTMLSuite_aTab'&&divs[no].style.display=='block'){return divs[no]}}
return null},loadContent:function(url){this.dynamicContentObj.loadContent(this.refActiveTabContent.id,url)},__setPadding:function(obj,padding){var span=obj.getElementsByTagName('SPAN')[0];span.style.paddingLeft=padding+'px';span.style.paddingRight=padding+'px'},__showTab:function(parentId,tabIndex,objectIndex){var parentId_div=parentId+"_";if(!document.getElementById('tabView'+parentId_div+tabIndex)){return}
if(refToTabViewObjects[objectIndex].activeTabIndex>=0){if(refToTabViewObjects[objectIndex].activeTabIndex==tabIndex){return}
var obj=document.getElementById('tabTab'+parentId_div+refToTabViewObjects[objectIndex].activeTabIndex);if(!obj){refToTabViewObjects[objectIndex].activeTabIndex=0;var obj=document.getElementById('tabTab'+parentId_div+refToTabViewObjects[objectIndex].activeTabIndex)}
obj.className='tabInactive';obj.style.backgroundImage='url(\''+DHTMLSuite.configObj.imagePath+'tab-view/tab_left_inactive.gif'+'\')';var imgs=obj.getElementsByTagName('IMG');var img=imgs[imgs.length-1];img.src=DHTMLSuite.configObj.imagePath+'tab-view/tab_right_inactive.gif';document.getElementById('tabView'+parentId_div+refToTabViewObjects[objectIndex].activeTabIndex).style.display='none'}
var thisObj=document.getElementById('tabTab'+parentId_div+tabIndex);thisObj.className='tabActive';thisObj.style.backgroundImage='url(\''+DHTMLSuite.configObj.imagePath+'tab-view/tab_left_active.gif'+'\')';var imgs=thisObj.getElementsByTagName('IMG');var img=imgs[imgs.length-1];img.src=DHTMLSuite.configObj.imagePath+'tab-view/tab_right_active.gif';document.getElementById('tabView'+parentId_div+tabIndex).style.display='block';refToTabViewObjects[objectIndex].refActiveTabContent=document.getElementById('tabView'+parentId_div+tabIndex);refToTabViewObjects[objectIndex].activeTabIndex=tabIndex;refToTabViewObjects[objectIndex].__handleCallback('tabSwitch');var parentObj=thisObj.parentNode;var aTab=parentObj.getElementsByTagName('DIV')[0];countObjects=0;var startPos=2;var previousObjectActive=false;while(aTab){if(aTab.tagName=='DIV'){if(previousObjectActive){previousObjectActive=false;startPos-=2}
if(aTab==thisObj){startPos-=2;previousObjectActive=true;refToTabViewObjects[objectIndex].__setPadding(aTab,refToTabViewObjects[objectIndex].textPadding+1)}else{refToTabViewObjects[objectIndex].__setPadding(aTab,refToTabViewObjects[objectIndex].textPadding)}
aTab.style.left=startPos+'px';countObjects++;startPos+=2}
aTab=aTab.nextSibling}
return},__handleCallback:function(action){var callbackString='';switch(action){case "tabSwitch":callbackString=this.callbackOnTabSwitch;break}
if(callbackString){callbackString=callbackString+'(this.refActiveTabContent,this)';eval(callbackString)}},__tabClick:function(inputObj,index){var idArray=inputObj.id.split('_');var parentId=inputObj.getAttribute('parentRefId');if(!parentId)parentId=inputObj.parentRefId;this.__showTab(parentId,idArray[idArray.length-1].replace(/[^0-9]/gi,''),index)},__rolloverTab:function(){if(this.className.indexOf('tabInactive')>=0){this.className='inactiveTabOver';this.style.backgroundImage='url(\''+DHTMLSuite.configObj.imagePath+'tab-view/tab_left_over.gif'+'\')';var imgs=this.getElementsByTagName('IMG');var img=imgs[imgs.length-1];img.src=DHTMLSuite.configObj.imagePath+'tab-view/tab_right_over.gif'}},__rolloutTab:function(){if(this.className== 'inactiveTabOver'){this.className='tabInactive';this.style.backgroundImage='url(\''+DHTMLSuite.configObj.imagePath+'tab-view/tab_left_inactive.gif'+'\')';var imgs=this.getElementsByTagName('IMG');var img=imgs[imgs.length-1];img.src=DHTMLSuite.configObj.imagePath+'tab-view/tab_right_inactive.gif'}},__initializeAndParseTabs:function(additionalTab,nameOfAdditionalTab,additionalCloseButton){this.DHTMLSuite_tabObj.className=' DHTMLSuite_tabWidget';window.refToThisTabSet=this;if(!additionalTab||additionalTab=='undefined'){this.DHTMLSuite_tabObj=document.getElementById(this.tabSetParentId);this.width=this.width+'';if(this.width.indexOf('%')<0)this.width= this.width+'px';this.DHTMLSuite_tabObj.style.width=this.width;this.height=this.height+'';if(this.height.length>0){if(this.height.indexOf('%')<0)this.height= this.height+'px';this.DHTMLSuite_tabObj.style.height=this.height}
var tabDiv=document.createElement('DIV');var firstDiv=this.DHTMLSuite_tabObj.getElementsByTagName('DIV')[0];this.DHTMLSuite_tabObj.insertBefore(tabDiv,firstDiv);tabDiv.className='DHTMLSuite_tabContainer';this.tabView_countTabs=0;var tmpTabTitles=this.tabTitles}else{var tabDiv=this.DHTMLSuite_tabObj.getElementsByTagName('DIV')[0];var firstDiv=this.DHTMLSuite_tabObj.getElementsByTagName('DIV')[1];this.initActiveTabIndex=this.tabView_countTabs;var tmpTabTitles=Array(nameOfAdditionalTab)}
for(var no=0;no<tmpTabTitles.length;no++){var aTab=document.createElement('DIV');aTab.id='tabTab'+this.tabSetParentId+"_"+(no+this.tabView_countTabs);aTab.onmouseover=this.__rolloverTab;aTab.onmouseout=this.__rolloutTab;aTab.setAttribute('parentRefId',this.tabSetParentId);aTab.parentRefId=this.tabSetParentId;var numIndex=window.refToThisTabSet.outsideObjectRefIndex+'';aTab.onclick=function(){window.refToThisTabSet.__tabClick(this,numIndex)};DHTMLSuite.commonObj.__addEventEl(aTab);aTab.className='tabInactive';aTab.style.backgroundImage='url(\''+DHTMLSuite.configObj.imagePath+'tab-view/tab_left_inactive.gif'+'\')';tabDiv.appendChild(aTab);var span=document.createElement('SPAN');span.innerHTML=tmpTabTitles[no];aTab.appendChild(span);if((!additionalTab&&this.closeButtons[no])||(additionalTab&&additionalCloseButton)){var closeButton=document.createElement('IMG');closeButton.src=DHTMLSuite.configObj.imagePath+'tab-view/tab-view-close.gif';closeButton.style.position='absolute';closeButton.style.top='4px';closeButton.style.right='2px';closeButton.onmouseover=this.__mouseOverEffectCloseButton;closeButton.onmouseout=this.__mouseOutEffectForCloseButton;DHTMLSuite.commonObj.__addEventEl(closeButton);span.innerHTML=span.innerHTML+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';var deleteTxt=span.innerHTML+'';closeButton.onclick=function(){refToTabViewObjects[numIndex].deleteTab(this.parentNode.innerHTML)};span.appendChild(closeButton)}
var img=document.createElement('IMG');img.valign='bottom';img.src=DHTMLSuite.configObj.imagePath+'tab-view/tab_right_inactive.gif';if((DHTMLSuite.clientInfoObj.navigatorVersion&&DHTMLSuite.clientInfoObj.navigatorVersion<6)||(DHTMLSuite.clientInfoObj.isMSIE&&!this.strictDocType)){img.style.styleFloat='none';img.style.position='relative';img.style.top='4px'
span.style.paddingTop='4px';aTab.style.cursor='hand'}
aTab.appendChild(img)}
var tabs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');var divCounter=0;for(var no=0;no<tabs.length;no++){if(tabs[no].className=='DHTMLSuite_aTab'&&tabs[no].parentNode==this.DHTMLSuite_tabObj){if(this.height.length>0){if(this.height.indexOf('%')==-1){var tmpHeight=(this.height.replace('px','')/1-22);tabs[no].style.height=tmpHeight+'px'}else
tabs[no].style.height=this.height}
tabs[no].style.display='none';if(tabs[no].id){tabs[no].setAttribute('originalId',tabs[no].id);tabs[no].originalId=tabs[no].id}
tabs[no].id='tabView'+this.tabSetParentId+"_"+divCounter;divCounter++}}
if(additionalTab){this.tabView_countTabs++}else{this.tabView_countTabs=this.tabView_countTabs+this.tabTitles.length}
this.__showTab(this.tabSetParentId,this.initActiveTabIndex,this.outsideObjectRefIndex);return this.activeTabIndex},__mouseOutEffectForCloseButton:function(){this.src=this.src.replace('close-over.gif','close.gif')},__mouseOverEffectCloseButton:function(){this.src=this.src.replace('close.gif','close-over.gif')},__fillTabWithContentFromAjax:function(ajaxIndex,objId,tabId){var obj=document.getElementById('tabView'+objId+'_'+tabId);obj.innerHTML=this.ajaxObjects[ajaxIndex].response},__resetTabIds:function(parentId){var tabTitleCounter=0;var tabContentCounter=0;var divs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');for(var no=0;no<divs.length;no++){if(divs[no].className=='DHTMLSuite_aTab'&&divs[no].parentNode==this.DHTMLSuite_tabObj){divs[no].id='tabView'+parentId+'_'+tabTitleCounter;tabTitleCounter++}
if(divs[no].id.indexOf('tabTab')>=0&&divs[no].parentNode.parentNode==this.DHTMLSuite_tabObj){divs[no].id='tabTab'+parentId+'_'+tabContentCounter;tabContentCounter++}}
this.tabView_countTabs=tabContentCounter},getTabIndexByTitle:function(tabTitle){tabTitle=tabTitle.replace(/(.*?)&nbsp.*$/gi,'$1');var divs=this.DHTMLSuite_tabObj.getElementsByTagName('DIV');for(var no=0;no<divs.length;no++){if(divs[no].id.indexOf('tabTab')>=0){var span=divs[no].getElementsByTagName('SPAN')[0];var spanTitle=span.innerHTML.replace(/(.*?)&nbsp.*$/gi,'$1');if(spanTitle==tabTitle){var tmpId=divs[no].id.split('_');return tmpId[tmpId.length-1].replace(/[^0-9]/g,'')/1}}}
return-1},getTabTitle:function(){return(this.tabTitles[this.activeTabIndex])}}