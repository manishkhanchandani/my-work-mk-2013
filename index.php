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
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title><?php echo $title; ?></title>
<link rel="stylesheet" href="styles/main.css" media="screen" type="text/css">
</head>

<body>
</body>
<div>
<?php echo $content_for_layout; ?>
</div>
</html>