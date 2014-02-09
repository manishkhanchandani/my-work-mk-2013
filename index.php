<?php
include_once('config.php');
$title = 'My Home';
if (!empty($_GET['p'])) {
	$page = $_GET['p'];
}
ob_start();
if (!file_exists($page.'.php')) $page = 'home';
include_once($page.'.php');
$content_for_layout = ob_get_clean();
?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/main.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="UTF-8">
<!-- InstanceBeginEditable name="doctitle" -->
<title><?php echo $title; ?></title>
<!-- InstanceEndEditable -->
<link href="styles/main.css" rel="stylesheet" type="text/css">
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]--></head>

<body>
  <!-- InstanceBeginEditable name="EditRegion3" -->
<?php echo $content_for_layout; ?>
  <!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>
