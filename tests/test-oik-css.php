<?php // (C) Copyright Bobbing Wide 2016-2017

/**
 * @package oik-bob-bing-wide
 * 
 * Test the functions in oik-css.php
 */
class Tests_oik_css extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
	}

	/**
	 * Unit test of bw_better_autop() 
	 * 
	 * Testing bw_replace_filter() in WordPress 4.7
	 * 
	 * In WordPress 4.7, with oik v3.0.3 or less we get
	 * `
	 * Notice: Indirect modification of overloaded element of WP_Hook has no effect in 
	 * C:\apache\htdocs\wpit\wp-content\plugins\oik\includes\oik-filters.inc on line 67
	 * `
	 * 
	 * and what happens in WordPress 4.6 if we're using oik v3.0.3 or less
	 *
	 *
	 */
	function test_bw_better_autop() {
		bw_better_autop( false );
		$expected_output = "Test to be written";
		$html = $expected_output;
		$this->assertEquals( $expected_output, $html );
		$this->assertTrue( true );
	}
	
	function trimmed_parm_returned( $content ) {
		$content = trim( $content );
		return( $content );
	}
	
	function test_trimmed_parm_returned() {
		$actual = $this->trimmed_parm_returned( " eh? " );
		$this->assertEquals( "eh?", $actual );
	}
		
	
}

