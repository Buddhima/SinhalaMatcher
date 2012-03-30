<?php

/** * Discription 
* 
* @author Buddhima Wijeweera
* University of Moratuwa
* Sri Lanka
*
* This is a plug-in for joomla helps to find similar meaning of Sinhala word. 
* 
*
* PHP version 5.2.4  
* 
* @version $Id$ 
* @package Joomla 
* @copyright Copyright (C) 2005 - 20012 Open Source Matters. All rights reserved. 
* @license GNU/GPL, see LICENSE.php */

defined ('_JEXEC') or die ('Restricted access');
jimport ('joomla.plugin.plugin');

class plgSystemSinhalaMatcher extends JPlugin
{
	function onAfterDispatch(){
		
	
		echo "<script type='text/javascript'>";
		echo "window.open ('http://localhost/EnglishToSinhala/wordFinder.html', '_blank')";
		echo "</script>";
		
		return true;
	
	}


}







