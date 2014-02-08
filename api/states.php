<?php
include_once('../config.php');
//http://world.mkgalaxy.com/api/states.php?id=223
$g = new world_Geography();
$country_id = !empty($_GET['id']) ? $_GET['id']: 0;
$r = $g->stateList($country_id);
if (empty($r)) {
	$r = array('error' => 1, 'msg' => 'Empty State List');
}
echo json_encode($r);
?>