<?php // (C) Copyright Bobbing Wide 2017

/**
 * @package oik-css
 * 
 * Test the functions in shortcodes/oik-background.php
 */
class Tests_shortcodes_oik_background extends BW_UnitTestCase {

	function setUp() {
		parent::setUp();
		oik_require( "shortcodes/oik-background.php", "oik-css" );
	}
	
	
	function test_bw_background_no_thumbnail() {
		$this->setExpectedDeprecated( "bw_translate" );
	
		$post = $this->dummy_post( 1 );
		//$attachment = $this->dummy_attachment( $post->ID );
		$atts = array( "id" => $post->ID );
		$html = bw_background( $atts );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_background__help() {
		$this->switch_to_locale( "en_GB" );
		$html = bw_background__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
	}
	
	function test_bw_background__help_bb_BB() {
		$this->switch_to_locale( "bb_BB" );
		$html = bw_background__help();
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_background__syntax() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "en_GB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_background__syntax("bw_background" );
		$html = $this->arraytohtml( $array, true );
		//$this->generate_expected_file( $html );
		$this->assertArrayEqualsFile( $html );
		$this->switch_to_locale( "en_GB" );
	}
	
	function test_bw_background__syntax_bb_BB() {
		//$this->setExpectedDeprecated( "bw_translate" );
		$this->switch_to_locale( "bb_BB" );
		oik_require_lib( "oik-sc-help" );
		$array = bw_background__syntax("bw_background" );
		$html = $this->arraytohtml( $array, true );
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
	
	/**
	 * Create a dummy page 
	 */
	function dummy_post( $n ) {
		$args = array( 'post_type' => 'page', 'post_title' => "post title $n", 'post_excerpt' => 'Excerpt. No post ID' );
		$id = self::factory()->post->create( $args );
		$post = get_post( $id );
		return $post;
	}
	
	/**
	 * Create a dummy attachment
	 */
	function dummy_attachment( $parent ) {
		$args = array( 'post_type' => 'attachment'
								 , 'post_parent' => $parent
								 , 'post_content' => 'attachment content'
								 , 'file' => oik_path( '!.png' )
								 , 'post_title' => ' !'
								 );
		$id = self::factory()->attachment->create_upload_object( oik_path( "screenshot-1.jpg", "oik-css" ), $parent );
		$this->assertGreaterThan( 0, $id );
		$post = get_post( $id );
		//print_r( $post );
		return $post;
	}
	
}


