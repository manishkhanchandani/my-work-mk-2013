<?
/*
Example file - this file receives GET variables from the DHTMLSuite.textEdit widget

variables sent:

saveTextEdit	- which is set to 1
textEditElementId		- The id of the element
textEditValue - 		- Value of the element
*/


if(isset($_GET['saveTextEdit']) && isset($_GET['textEditElementId'])){
	
	$_GET['textEditValue'] = str_replace("'","",$_GET['textEditValue']);	// Stripping quotes
	$_GET['textEditElementId'] = str_replace("'","",$_GET['textEditElementId']);	// Stripping quotes
	
	/* I have disabled the line below because I don't have any db connection for this at the moment - The line below shows you an example on how to save changes from the textEdit widget */
	// mysql_query("update myTable set value='".$_GET['textEditValue']."' where column='".$_GET['textEditElementId']."'")or die(mysql_error());
	
	echo "OK";	// Everything went fine
	
	
	
}else echo "saveTextEdit variable not defined";

?>