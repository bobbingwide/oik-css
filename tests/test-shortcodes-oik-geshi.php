<?php // (C) Copyright Bobbing Wide 2017, 2020

/**
 * @package oik-css
 * 
 * Test the functions in shortcodes/oik-geshi.php
 */
class Tests_shortcodes_oik_geshi extends BW_UnitTestCase {

	function setUp(): void {
		parent::setUp();
		oik_require( "shortcodes/oik-geshi.php", "oik-css" );
	}

	/**
	 * In shortcodes/oik-css.php there was an 
	 */
	function test_no_unexpected_side_effects_in_setUp() {
		$this->assertTrue( true );
	}
	
	/**
	 * Tests oik_css_validate_lang
	 * 
	 * - Deals with some weirdness with $lang and $text parameters
	 */
	function test_oik_css_validate_lang() {
		$languages = array( "css", "html", "javascript", "jquery", "php", "html5", "none", "mysql" );
		foreach ( $languages as $lang ) {
			$text = null;
			$actual = oik_css_validate_lang( $lang, $text );
			$this->assertEquals( $lang, $actual );
			$this->assertNull( $text );
		}
		
		foreach ( $languages as $lang ) {
			$saved = $lang;
			$actual = oik_css_validate_lang( "OOPS", $lang );
			$this->assertEquals( $saved, $actual );
			$this->assertEquals( "oops", $lang );
		}
		
		 
	}
	
	/**
	 * Tests invalid language - when user forgets it in the shortcode
	 */
	function test_oik_css_validate_lang_en_GB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		$text = null;																										
		$actual = oik_css_validate_lang( null, $text );
		$this->assertNull( $actual );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	/**
	 * Tests invalid language - when user forgets it in the shortcode
	 */
	function test_oik_css_validate_lang_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		$text = null;																										
		$actual = oik_css_validate_lang( null, $text );
		$this->assertNull( $actual );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	/**
	 * 
	 */
	function test_oik_geshi() {
		$atts = array( "lang" => "none", "text" => "Testing lang=none" );
		$content = '[bw_css] and [bw_geshi] are provided by oik-css';
		$html = oik_geshi( $atts, $content );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	
	}
	
	/**
	 * Test bw_format_content for lang=php
	 * 
	 * We'll test a valid lang and content
	 *
	 * This requires bw_remove_unwanted_tags so we need to test oik_geshi first
	 * since that loads the required file.
	 */
	function test_bw_format_content_lang_php() {
		$atts = array( "lang" => "php", "text" => "Testing lang=php" );
		$content = 'echo "Hello World!";';
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	/**
	 * Test bw_format_content for lang=css
	 * 
	 */
	function test_bw_format_content_lang_css() {
		$atts = array( "lang" => "css", "text" => "Testing lang=css" );
		$content = ".entry-content code { font-size: 200%; }";   
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	/**
	 * Test bw_format_content for lang=html
	 * 
	 */
	function test_bw_format_content_lang_html() {
		$atts = array( "lang" => "html", "text" => "Testing lang=html" );
		$content = "<p>This is <b>HTML</b>.</p>";   
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	/**
	 * Test bw_format_content for lang=html5
	 * 
	 */
	function test_bw_format_content_lang_html5() {
		$atts = array( "lang" => "html5", "text" => "Testing lang=html5" );
		$content = "<p>This is <b>HTML5</b>.</p>";   
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	
	/**
	 * Test bw_format_content for lang=javascript
	 * 
	 */
	function test_bw_format_content_lang_javascript() {
		$atts = array( "lang" => "javascript", "text" => "Testing lang=javascript" );
		$content = "var canvas = document.createElement( 'canvas' );";   
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	
	/**
	 * Test bw_format_content for lang=jquery
	 * 
	 */
	function test_bw_format_content_lang_jquery() {
		$atts = array( "lang" => "jquery", "text" => "Testing lang=jquery" );
		$content = "$('.edd-no-js').hide();\n$('a.edd-add-to-cart').addClass('edd-has-js');";
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	
	/**
	 * Test bw_format_content for lang=mysql
	 * 
	 */
	function test_bw_format_content_lang_mysql() {
		$atts = array( "lang" => "mysql", "text" => "Testing lang=mysql" );
		$content = "SELECT option_name,  option_value FROM wp_options WHERE autoload = 'yes'";
		bw_format_content( $atts, $content );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_geshi_help() {
		$this->switch_to_locale( "en_GB" );
		$html = bw_geshi__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_geshi__help_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		$html = bw_geshi__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_geshi__syntax() {
		$this->switch_to_locale( "en_GB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_geshi__syntax("bw_css" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_geshi__syntax_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_geshi__syntax("bw_css" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_geshi__example() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		bw_geshi__example();
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_geshi__example_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		bw_geshi__example();
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
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


