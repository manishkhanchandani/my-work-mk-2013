<?php

class world_Geography
{
	public function countryList()
	{
		global $connAdodb;
		$connAdodb->Execute("SET NAMES utf8");
		$sql = "select * from geo_countries order by name";
		$recordSet = $connAdodb->CacheExecute(_FUNC_TIME_YEAR, $sql);
		$return = array();
		while (!$recordSet->EOF) {
			$return[] = array('id' => $recordSet->fields['con_id'], 'country' => $recordSet->fields['name']);
			$recordSet->MoveNext();
		}
		return $return;
	}

	public function stateList($country_id)
	{
		global $connAdodb;
		$connAdodb->Execute("SET NAMES utf8");
		$sql = "select * from geo_states WHERE con_id = ".$connAdodb->qstr($country_id)." order by name";
		$recordSet = $connAdodb->CacheExecute(_FUNC_TIME_YEAR, $sql);
		$return = array();
		while (!$recordSet->EOF) {
			$return[] = array('id' => $recordSet->fields['sta_id'], 'con_id' => $recordSet->fields['con_id'], 'state' => $recordSet->fields['name']);
			$recordSet->MoveNext();
		}
		return $return;
	}

	public function cityList($state_id)
	{
		global $connAdodb;
		$connAdodb->Execute("SET NAMES utf8");
		$sql = "select * from geo_cities WHERE sta_id = ".$connAdodb->qstr($state_id)." order by name";
		$recordSet = $connAdodb->CacheExecute(_FUNC_TIME_WEEK, $sql);
		$return = array();
		while (!$recordSet->EOF) {
			$return[] = array('id' => $recordSet->fields['cty_id'], 'sta_id' => $recordSet->fields['sta_id'], 'con_id' => $recordSet->fields['con_id'], 'city' => $recordSet->fields['name']);
			$recordSet->MoveNext();
		}
		return $return;
	}
}

?>