<?php // (C) Copyright Bobbing Wide 2016-2017, 2020

/**
 * @package oik-css
 * 
 * Test the functions in admin/oik-css.php
 */
class Tests_admin_oik_css extends BW_UnitTestCase {

	function setUp(): void {
		parent::setUp();
		oik_require( "admin/oik-css.php", "oik-css" );
		oik_require_lib( "oik_plugins" );
	}
	
	/**
	 * Tests oik_css_options with bw_autop enabled
	 */
	function test_oik_css_options_bw_autop_enabled() {
		bw_update_option( "bw_autop", "on", "bw_css_options" );
		$this->switch_to_locale( "en_GB" );
		
		ob_start();   
		oik_css_options();
		
		$html = ob_get_contents();
		ob_end_clean();
		$html .= bw_ret();
		$html_array = $this->tag_break( $html );
		$html_array = $this->replace_nonce_with_nonsense( $html_array );
		//$this->generate_expected_file( $html_array );
		$this->assertArrayEqualsFile( $html_array );
	}
	
	/**
	 * Tests oik_css_options with bw_autop enabled language bb_BB
	 */
	function test_oik_css_options_bw_autop_enabled_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		bw_update_option( "bw_autop", "on", "bw_css_options" );
		$this->switch_to_locale( "bb_BB" );
		
		ob_start();   
		oik_css_options();
		
		$html = ob_get_contents();
		ob_end_clean();
		$html .= bw_ret();
		$html_array = $this->tag_break( $html );
		$html_array = $this->replace_nonce_with_nonsense( $html_array );
		//$this->generate_expected_file( $html_array );
		$this->assertArrayEqualsFile( $html_array );
		
		$this->switch_to_locale( "en_GB" );
	}
	
	/**
	 * Tests oik_menu_box and oik_css_options with bw_autop disabled
	 */
	function test_oik_css_lazy_oik_menu_box() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		bw_update_option( "bw_autop", "0", "bw_css_options" );
		ob_start();   
		oik_css_lazy_oik_menu_box();
		$html = ob_get_contents();
		ob_end_clean();
		$html .= bw_ret();
		//$html = $this->replace_oik_url( $html );
		$html_array = $this->tag_break( $html );
		$html_array = $this->replace_nonce_with_nonsense( $html_array );
		//$this->generate_expected_file( $html_array );
		$this->assertArrayEqualsFile( $html_array );
	}
	
	/**
	 * Tests oik_menu_box and oik_css_options with bw_autop disabled language bb_BB
	 */
	function test_oik_css_lazy_oik_menu_box_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		bw_update_option( "bw_autop", "0", "bw_css_options" );
		ob_start();   
		oik_css_lazy_oik_menu_box();
		$html = ob_get_contents();
		ob_end_clean();
		$html .= bw_ret();
		//$html = $this->replace_oik_url( $html );
		$html_array = $this->tag_break( $html );
		$html_array = $this->replace_nonce_with_nonsense( $html_array );
		//$this->generate_expected_file( $html_array );
		$this->assertArrayEqualsFile( $html_array );
		$this->switch_to_locale( "en_GB" );
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
