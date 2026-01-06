<?php

/**
 * @package oik-css
 * @copyright (C) Copyright Bobbing Wide 2023
 *
 * Unit tests to load all the PHP files for PHP 8.2
 */
class Tests_load_php extends BW_UnitTestCase
{

	/**
	 * set up logic
	 *
	 * - ensure any database updates are rolled back
	 * - we need oik-googlemap to load the functions we're testing
	 */
	function setUp(): void 	{
		parent::setUp();
	}

	function test_load_admin_php() {
		oik_require( 'admin/oik-css.php', 'oik-css');
		$this->assertTrue( true );
	}

	function test_load_includes_php() {
		oik_require( 'includes/formatting-later.php', 'oik-css');
		oik_require( 'includes/shortcodes-earlier.php', 'oik-css');
		$this->assertTrue( true );
	}

	function test_load_geshi_php() {
		oik_require( 'geshi/geshi.php', 'oik-css');
		oik_require( 'geshi/geshi/css.php', 'oik-css');
		oik_require( 'geshi/geshi/html5.php', 'oik-css');
		oik_require( 'geshi/geshi/javascript.php', 'oik-css');
		oik_require( 'geshi/geshi/jquery.php', 'oik-css');
		oik_require( 'geshi/geshi/mysql.php', 'oik-css');
		oik_require( 'geshi/geshi/php.php', 'oik-css');
		$this->assertTrue( true );
	}

	function test_load_shortcodes_php() {
		oik_require( 'shortcodes/oik-autop.php', 'oik-css');
		oik_require( 'shortcodes/oik-background.php', 'oik-css');
		oik_require( 'shortcodes/oik-css.php', 'oik-css');
		oik_require( 'shortcodes/oik-geshi.php', 'oik-css');
		$this->assertTrue( true );
	}

	function test_load_plugin_php() {
		oik_require( 'oik-css.php', 'oik-css');
		$this->assertTrue( true );
	}
}
