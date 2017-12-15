<?php // (C) Copyright Bobbing Wide 2017

/**
 * @package oik-css
 * 
 * Test the functions in shortcodes/oik-autop.php
 */
class Tests_shortcodes_oik_autop extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
		oik_require( "shortcodes/oik-autop.php", "oik-css" );
	}
	
	function test_bw_autop__help() {
		$this->switch_to_locale( "en_GB" );
		$html = bw_autop__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_autop__help_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		$html = bw_autop__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_autop__syntax() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_autop__syntax("bw_autop" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_autop__syntax_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_autop__syntax("bw_autop" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}

	/**
	 * Test [bw_autop on] shortcode expansion and filtering results
	 */
	function test_bw_autop_on() {
		$atts = array( "on" );
		$html = bw_autop( $atts );
		$this->assertNull( $html );
		$content = "testing oik-autop";
		$expected = "<p>testing oik-autop</p>\n";
		$html = apply_filters( 'the_content', $content );
		$this->assertEquals( $expected, $html );
	}
	
	/**
	 * Test [bw_autop off] shortcode expansion and filtering results
	 */
	function test_bw_autop_off() {
		$atts = array( "off" );
		$html = bw_autop( $atts );
		$this->assertNull( $html );
		$content = "testing oik-autop";
		$expected = "testing oik-autop";
		$html = apply_filters( 'the_content', $content );
		$this->assertEquals( $expected, $html );
	}
	
	/**
	 * Reloads the text domains
	 */
	function reload_domains() {
		$domains = array( "oik", "oik-css" );
		foreach ( $domains as $domain ) {
			$loaded = bw_load_plugin_textdomain( $domain );
			$this->assertTrue( $loaded, "$domain not loaded" );
		}
		oik_require_lib( "oik-l10n" );
		oik_l10n_enable_jti();
	}
	
}


