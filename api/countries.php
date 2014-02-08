<?php
include_once('../config.php');
//http://world.mkgalaxy.com/api/countries.php
$g = new world_Geography();
$r = $g->countryList();
echo json_encode($r);
?>