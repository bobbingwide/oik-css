<?php // (C) Copyright Bobbing Wide 2017, 2020

/**
 * @package oik-css
 *
 * Test the functions in shortcodes/oik-css.php
 */
class Tests_shortcodes_oik_css extends BW_UnitTestCase {

	function setUp(): void {
		parent::setUp();
		oik_require( "shortcodes/oik-css.php", "oik-css" );
		remove_all_filters('render_block_');
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
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	/**
	 * Tests bw_geshi_it directly, for CSS
	 * Including a [ in the content
	 *
	 */
	function test_bw_geshi_it() {
		$content = ".entry-content code[class=\"fred\"] { font-size: 200%; content: '['; }";
		$html = bw_geshi_it( $content );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	/**
	 * Tests a leading space passed to GeSHi
	 *
	 * When I split bw_remove_unwanted_tags into two functions I suddenly got an extra space
	 * which was converted to &nbsp;
	 *
	 * When oik-ajax is activated then oika_oik_shortcode_content() would trim leading and trailing blanks.
	 * This test doesn't involve that filter function so we should expect the &nbsp; to be in the output.
	 * oik-ajax has now been updated so that leading and trailing blanks are only stripped when pagination is intended.
	 */
	function test_bw_geshi_it_leading_space() {
		$content = " td code b { color: darkblue; } ";
		$html = bw_geshi_it( $content );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	/**
	 * Test that unwanted tags are removed
	 */
	function test_bw_remove_unwanted_tags() {
		$content = "<br />1 <p>2 </p>3";
		$actual = bw_remove_unwanted_tags( $content );
		$expected = "1 2 3";
		$this->assertEquals( $expected, $actual );
	}

	/**
	 * Test that content is detexturized
	 */
	function test_bw_detexturize() {
		$content = "&#8216;' &#8217;' &#8220;\" &#8221;\" &#038;& &#8211;-";
		$actual = bw_detexturize( $content );
		$expected = "'' '' \"\" \"\" && --";
		$this->assertEquals( $expected, $actual );
	}

	/**
	 * Test [bw_css] shortcode expansion
	 */
	function test_oik_css() {
		$atts = array( "text" => "test bw_css shortcode" );
		$content = "testing oik-css";
		$html = oik_css( $atts, $content );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	function test_bw_css__help() {
		$this->switch_to_locale( "en_GB" );
		$html = bw_css__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	function test_bw_css__help_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		$html = bw_css__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}

	function test_bw_css__syntax() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_css__syntax("bw_css" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}

	function test_bw_css__syntax_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_css__syntax("bw_css" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}

	function test_bw_css__example() {
		$this->switch_to_locale( "en_GB" );
		bw_css__example( "bw_css" );
		$html = bw_ret();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}

	function test_bw_css__example_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		bw_css__example( "bw_css" );
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


