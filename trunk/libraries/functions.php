<?php

	/**
	 * pr function, debug function to output array
	 *
	 * @param string $value
	 * @return null
	 */
	function pr($value)
	{
		echo '<pre>';
		print_r($value);
		echo '</pre>';
		return true;
	}
	
	