<?php
include_once('../config.php');
//http://world.mkgalaxy.com/api/cities.php?id=3469
$g = new world_Geography();
$id = !empty($_GET['id']) ? $_GET['id']: 0;
$r = $g->cityList($id);
if (empty($r)) {
	$r = array('error' => 1, 'msg' => 'Empty City List');
}
echo json_encode($r);
?>