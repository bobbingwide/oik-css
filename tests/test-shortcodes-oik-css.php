<?php // (C) Copyright Bobbing Wide 2017

/**
 * @package oik-css
 * 
 * Test the functions in shortcodes/oik-css.php
 */
class Tests_oik_css extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
		oik_require( "shortcodes/oik-css.php", "oik-css" );
	}

	/**
	 * Tests the inline style for bw_css shortcode
	 */
	function test_bw_enqueue_style() {
		$atts = array();
		$content = "dummy CSS content";   
		bw_enqueue_style( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	/**
	 * Tests bw_format_style which calls bw_geshi_it for CSS
	 */
	function test_bw_format_style() {
		$atts = array( '.' );
		$content = ".entry-content code { font-size: 200%; }";   
		bw_format_style( $atts, $content );
		$html = bw_ret();
		$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_geshi_it() {
	// ( $content, $language="CSS" ) {
	$this->assertTrue();
	}
	function test_bw_remove_unwanted_tags( $content ) {
	
		//function bw_remove_unwanted_tags( $content ) {
		$this->assertTrue();
	}
	
	
	
	function test_oik_css() {
	
		//oik_css( $atts=null, $content=null, $tag=null )
		 
		$this->assertTrue();
		
	
	}
	
	function test_bw_css_help() {
	
		$this->assertTrue();
	
	
		// bw_css__help( $shortcode="bw_css" ) {
	}
	
	function test_bw_css__syntax() {
		bw_css__syntax("bw_css" );
		
		$this->assertTrue();
	}
	
	function test_bw_css__example() {
		bw_css__example( "bw_css" );
		
		$this->assertTrue();
	}
	
}


