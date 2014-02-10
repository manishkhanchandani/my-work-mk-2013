<?php
try {
$g = new world_Geography();
$r = $g->countryList();
} catch (Exception $e) {
	$r = array();
}
?>
<script type="text/javascript">
var DHTML_SUITE_THEME = 'blue';	// SPecifying gray theme
var DHTML_SUITE_THEME_FOLDER = '<?php echo THEME_DIR; ?>/themes/';
var DHTML_SUITE_JS_FOLDER = '<?php echo THEME_DIR; ?>/js/separateFiles/';
</script>

<script type="text/javascript" src="<?php echo THEME_DIR; ?>/js/ajax.js"></script>    
<script type="text/javascript" src="<?php echo THEME_DIR; ?>/js/separateFiles/dhtmlSuite-common.js"></script> 
<script tpe="text/javascript">
DHTMLSuite.include("chainedSelect");
</script>

<div id="mainContent">
	<div>
		<select id="country"> 
			<option value="0">select a country</option>
			<?php if (!empty($r)) { ?>
			<?php foreach ($r as $k => $v) { ?>
			<option value="<?php echo $v['id']; ?>"><?php echo $v['country']; ?></option>
			<?php } ?>
			<?php } ?>
		</select> 
	</div>
	<div>
		<select id="state"> 
		</select> 
	</div>
	<div>
		<select id="city">
		</select> 
	</div>
</div>

<script type="text/javascript"> 
chainedSelects = new DHTMLSuite.chainedSelect();   // Creating object of class DHTMLSuite.chainedSelects 
chainedSelects.addChain('country','state','/api/statesTxt.php'); 
chainedSelects.addChain('state','city','/api/citiesTxt.php'); 
chainedSelects.init(); 

</script> 