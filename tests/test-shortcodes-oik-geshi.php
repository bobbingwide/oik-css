<?php // (C) Copyright Bobbing Wide 2017

/**
 * @package oik-css
 * 
 * Test the functions in shortcodes/oik-geshi.php
 */
class Tests_oik_css extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
	}

	/**
	 *
	 */
	function test_() {
		bw_better_autop( false );
		$expected_output = "Test to be written";
		$html = $expected_output;
		$this->assertEquals( $expected_output, $html );
		$this->assertTrue( true );
	}
	
	
	function test_oik_css_validate_lang( $lang, &$text ) {
	 $actual = oik_css_validate_lang( $lang, &$text );
	}
	
	
	function test_bw_format_content() {
		bw_format_content( $atts, $content ) {
	
	}
	
	function test_oik_geshi() {
	
		oik_geshi( $atts=null, $content=null, $tag=null ) {
	
	}
	
	function test_bw_geshi_help() {
	
	
		// bw_geshi__help( $shortcode="bw_geshi" ) {
	}
	
	function test_bw_geshi__syntax() {
		bw_geshi__syntax("bw_geshi" );
	}
	
	function test_bw_geshi__example() {
		bw_geshi__example( "bw_css" );
	}


