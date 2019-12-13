<?php
/*
Plugin Name: oik-css
Plugin URI: https://www.oik-plugins.com/oik-plugins/oik-css
Description: Implements [bw_css] shortcode for internal CSS styling and to help document CSS examples and [bw_geshi] for other languages
Version: 1.0.0-alpha-20191213
Author: bobbingwide
Author URI: https://bobbingwide.com/about-bobbing-wide
Text Domain: oik-css
Domain Path: /languages/
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

    Copyright 2013-2019 Bobbing Wide (email : herb@bobbingwide.com )

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License version 2,
    as published by the Free Software Foundation.

    You may NOT assume that you can use any other version of the GPL.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    The license for this software can likely be found here:
    http://www.gnu.org/licenses/gpl-2.0.html

*/

use function oik\oik_blocks_boot_libs;

oik_css_plugin_loaded();

/** 
 * Implement "oik_loaded" action for oik-css
 * 
 * Regardless of whether or not there are any shortcodes
 * we apply our logic for filtering 'the_content' 
 * The option field is a checkbox that is ticked when the wpautop() processing is disabled
 * So we need to negate the value when calling bw_better_autop().
 * 
 * Note: Part of the better autop logic applies regardless of the settting for bw_autop 
 *
 */
function oik_css_oik_loaded() {
  $bw_disable_autop = bw_get_option( "bw_autop", "bw_css_options" );
  $bw_autop = !$bw_disable_autop; 
  bw_better_autop( $bw_autop );
}

/**
 * Implement "oik_add_shortcodes" action for oik-css
 * 
 */
function oik_css_init() {
  bw_add_shortcode( "bw_css", "oik_css", oik_path( "shortcodes/oik-css.php", "oik-css" ), false );
  bw_add_shortcode( "bw_geshi", "oik_geshi", oik_path( "shortcodes/oik-geshi.php", "oik-css" ), false );
  bw_add_shortcode( "bw_background", "bw_background", oik_path( "shortcodes/oik-background.php", "oik-css" ), false );
  bw_add_shortcode( "bw_autop", "bw_autop", oik_path( "shortcodes/oik-autop.php", "oik-css" ), false );
}

/**
 * Implement an intermediate trace filter to monitor what's happening with "the_content"
 */
function bw_tracef( $arg1, $arg2=null, $arg3=null ) {
  return( bw_trace2( $arg1 ) );
}

/**
 * Implement "no_texturize_shortcodes" for oik-css shortcodes
 * 
 * @param array $shortcodes - array of shortcodes that won't be texturized
 * @return array $shortcodes - updated array with our shortcodes added
 */
function bw_no_texturize_shortcodes( $shortcodes ) {
  //  bw_backtrace();
  $shortcodes[] = "bw_css";
  $shortcodes[] = "bw_geshi"; 
  //$shortcodes[] = "bw_related";
  return( $shortcodes );
}

/**
 * Implement 'the_content' filter using wpautop() without converting newlines to br tags
 * 
 * More often than not wpautop() can appear to be more trouble than it's worth.
 * When we do use it, the results are better if we don't allow newlines to be converted to br tags.
 *
 * 
 * @param string $pee - the content with new lines to be converted to paragraphs
 * @return string - the content with automatically generated paragraphs
 */
function bw_wpautop( $pee ) {
  return( wpautop( $pee, false ) ); 
}    
 
/**
 * Improve wpautop and shortcode_unautop processing
 * 
 * The purpose of this function is to defer wpautop filter processing until AFTER shortcodes are expanded 
 * 
 * By default the wpautop() filter is called at priority 10
 * and shortcode_unautop() is also called at priority 10 (see wp-include/default-filters.php )
 *
 * do_shortcode() is called at priority 11  ( see wp-includes/shortcodes.php )
 *
 * In certain circumstances wpautop() can really mess up the HTML that's generated by shortcodes
 * such as [bw_css] since it will convert new line characters to &lt;br /&gt; tags
 * 
 * I applied the suggestion from 
 * link http://stackoverflow.com/questions/5940854/disable-automatic-formatting-inside-wordpress-shortcodes
 * but that caused WooCommerce's [add_to_cart] shortcode to fail since it created new line characters
 * during the expansion which were then converted to unwanted paragraph end and start tags.
 * 
 * I tried moving shortcode_unautop as well but that didn't help.
 *
 * A pragmatic solution for [add_to_cart] was to alter the WooCommerce code so that it doesn't create unnecessary new lines.
 * That worked BUT the wpautop() processing still had problems with textarea tags with embedded new line characters.
 *
 * So the latest solution ( 2013/09/03) is to disable both wpautop() and shortcode_unautop().
 * and replace wpautop() by bw_wpautop() where newlines are NOT converted to breaks, performed AFTER shortcode expansion.
 *
 * 2014/03/26 - And that still doesn't work when block tags (e.g div) are embedded within non-block tags ( e.g. a )
 * 2014/07/03 - Nor does it work when they are embedded within h3 tags!  
 *
 * 2014/08/26 - To allow DIY-oik shortcodes to work nicely the latest solution is that we initially disable wpautop processing
 * and allow it to be re-introduced by using the [bw_autop] shortcode.
 * 
 * @param bool $autop - true if you want the bw_wpautop() filter to be run after shortcode expansion
 *                      false if you want it to be removed again.
 * 
 */
function bw_better_autop( $autop=false ) {
  remove_filter( 'the_content', 'wpautop' );
  remove_filter( 'the_content', 'shortcode_unautop' );
	remove_filter( 'the_content', 'wptexturize' );
	remove_filter( 'the_content', 'gutenberg_wpautop', 8 );
	//remove_filter( 'the_content', 'do_blocks', 9 );
	if ( !function_exists( "do_shortcode_earlier" ) ) {
		oik_require( "includes/shortcodes-earlier.php", "oik-css" );
	}
	oik_require( "includes/oik-filters.inc" );
	bw_replace_filter( "the_content", "do_shortcode", 11, "do_shortcode_earlier" );
  
  //add_filter( 'the_content', 'bw_tracef', 99 );
  if ( $autop ) {
    add_filter( 'the_content', 'bw_wpautop', 99);
  } else {
    remove_filter( 'the_content', 'bw_wpautop', 99 );
  } 
  //add_filter( 'the_content', 'bw_tracef', 100 );
  //add_filter( 'the_content', 'shortcode_unautop',100 );
	add_filter( 'no_texturize_shortcodes', "bw_no_texturize_shortcodes" );
  //add_filter( 'the_content', "bw_pre_texturize" );
  
  
	/**
	 * Filter whether to skip running wptexturize().
	 *
	 * Passing false to the filter will effectively short-circuit wptexturize().
	 * returning the original text passed to the function instead.
	 *
	 * The filter runs only once, the first time wptexturize() is called.
	 *
	 * @since 4.0.0
	 *
	 * @see wptexturize()
	 *
	 * @param bool $run_texturize Whether to short-circuit wptexturize().
	 */
  $run_texturize = true; 
	$run_texturize = apply_filters( 'run_wptexturize', $run_texturize );
  if ( $run_texturize ) {
    if ( !function_exists( "wptexturize_blocks" ) ) {
      oik_require( "includes/formatting-later.php", "oik-css" );
    }  
    add_filter( 'the_content', "wptexturize_blocks", 98 );
  }
}

    

/**
 * Implement "oik_admin_menu" filter for oik-css
 * 
 * oik-css provides an additional box for the oik options page where the user selects whether or not wpautop() processing
 * should be globally enabled or disabled. 
 * 
 * Setting the plugin server is not necessary for a plugin on WordPress.org
 */
function oik_css_admin_menu() {
  //  oik_register_plugin_server( __FILE__ );
  register_setting( 'oik_css_options', 'bw_css_options', 'oik_options_validate' );
  add_action( "oik_menu_box", "oik_css_oik_menu_box" );
}

/**
 * Display the oik-css menu box
 */
function oik_css_oik_menu_box() {
  oik_require( "admin/oik-css.php", "oik-css" );
  oik_css_lazy_oik_menu_box();
}

/**
 * Implement "admin_notices" for oik-css to check plugin dependency
 * 
 * Version | Dependent on
 * ------- | ------------
 * 0.1     | v2.0-beta
 * 0.2     | v2.0
 * 0.3     | v2.0
 * 0.4     | v2.0
 * 0.5     | v2.1
 * 0.6     | v2.1
 * 0.7     | v2.3 
 * 0.8.0   | v2.3
 * 0.8.1   | v2.5
 * 0.8.2   | v2.5
 * 0.9.0   | v3.2.3
 * 1.0.0   | The new block logic is not dependent upon oik
 */ 
function oik_css_activation() {
  static $plugin_basename = null;
  if ( !$plugin_basename ) {
    $plugin_basename = plugin_basename(__FILE__);
    add_action( "after_plugin_row_oik-css/oik-css.php", "oik_css_activation" );
    if ( !function_exists( "oik_plugin_lazy_activation" ) ) { 
      require_once( "admin/oik-activation.php" );
    }
  }  
  $depends = "oik:3.2.3";
  oik_plugin_lazy_activation( __FILE__, $depends, "oik_plugin_plugin_inactive" );
}

/**
 * Function to run when the plugin file is loaded 
 */
function oik_css_plugin_loaded() {
  // add_action( "admin_notices", "oik_css_activation", 11 );
  add_action( "oik_admin_menu", "oik_css_admin_menu" );
  add_action( "oik_loaded", "oik_css_oik_loaded" );
  add_action( "oik_add_shortcodes", "oik_css_init" );
  add_action( 'init', 'oik_css_init_blocks');
  add_action( 'plugins_loaded', 'oik_css_plugins_loaded' );
}

/**
 * This logic is expected to run independent of oik and oik-blocks
 */
function oik_css_init_blocks() {
	//oik_require_lib( 'oik-blocks');
	oik_css_register_editor_scripts();
	oik_css_register_block_styles();
	oik_css_register_dynamic_blocks();

}

/**
 * Registers the scripts we'll need     for the editor
 *
 * Not sure why we'll need Gutenberg scripts for the front-end.
 * But we might need Javascript stuff for some things, so these can be registered here.
 *
 * Dependencies were initially
 * `[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ]`
 *
 * why do we need the dependencies?
 */
function oik_css_register_editor_scripts() {
	//bw_trace2();
	//bw_backtrace();

	$scripts=array(
		'oik_css-blocks-js'=>'blocks/build/js/editor.blocks.js'
	);
	foreach ( $scripts as $name=>$blockPath ) {
		wp_register_script( $name,
			plugins_url( $blockPath, __FILE__ ),
			// [],
			[ 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'wp-i18n', 'wp-data' ],
			filemtime( plugin_dir_path( __FILE__ ) . $blockPath )
		);
		wp_set_script_translations( $name, 'oik-css' );
	}

}

function oik_css_register_block_styles() {
	$stylePath='blocks/build/css/blocks.style.css';
	// Enqueue frontend and editor block styles
	wp_enqueue_style(
			'oik_css-blocks-css',
			plugins_url( $stylePath, __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . $stylePath )
		);
}

/**
 * Registers action/filter hooks for oik-css's dynamic blocks
 *
 * We have to do this during init, which comes after _enqueue_ stuff
 *
 * script, style, editor_script, and editor_style
 */
function oik_css_register_dynamic_blocks() {
	if ( function_exists( "register_block_type" ) ) {
		//oik_blocks_register_editor_scripts();
		//oik_blocks_boot_libs();


		register_block_type( 'oik-css/css',
			[
				'render_callback'=>'oik_css_dynamic_block_css',
				'attributes'     =>[
					'css' =>[ 'type'=>'string' ],
					'text'=>[ 'type'=>'string' ]
				]
				, 'editor_script' => 'oik_css-blocks-js'
				, 'editor_style' => null
				, 'script' => null
				, 'style' => 'oik_css-blocks.css'
			] );

		register_block_type( 'oik-css/geshi',
			[
				'render_callback'=>'oik_css_dynamic_block_geshi',
				'attributes'     =>[
					'lang'   =>[ 'type'=>'string' ],
					'text'   =>[ 'type'=>'string' ],
					'content'=>[ 'type'=>'string' ]
				]
				, 'editor_script' => 'oik_css-blocks-js'
				, 'editor_style' => null
				, 'script' => null
				, 'style' => 'oik_css-blocks.css'
			]
		);


	}
}



/**
 * Server rendering dynamic CSS block with content
 *
 * Assumes that the oik-css plugin is installed.
 * The plugin doesn't need to be activated.
 *
 * @param array $attributes
 *
 * @return string generated HTML
 */
function oik_css_dynamic_block_css( $attributes ) {

	//bw_backtrace();
	$html=oik_css_check_server_func( "shortcodes/oik-css.php", "oik-css", "oik_css" );
	if ( ! $html ) {
		$content=bw_array_get( $attributes, "css", null );
		bw_trace2( $content, "Content" );
		//$content = oik_blocks_fetch_dynamic_content( "wp:oik-blocks/css" );
		$html=oik_css( $attributes, $content );
	}

	return $html;
}

/**
 * Renders the GeSHi block
 *
 * @param array $attributes lang, type, content
 */
function oik_css_dynamic_block_geshi( $attributes ) {
	$html=oik_css_check_server_func( "shortcodes/oik-geshi.php", "oik-css", "oik_geshi" );
	if ( ! $html ) {
		$content=bw_array_get( $attributes, "content", null );
		$html   =oik_geshi( $attributes, $content );
		if ( ! $html ) {
			$html="empty";
		}
	}
	return $html;
}

/**
 * Checks if the server function is available
 *
 * Returns null if everything is OK, HTML if there's a problem.
 *
 * @TODO Check if the implementing plugin is actually activated!
 *
 * @param $filename - relative path for the file to load
 * @param $plugin - plugin name
 * @param $funcname - required function name
 *
 * @return string| null
 */

function oik_css_check_server_func( $filename, $plugin, $funcname ) {
	$html=null;
	if ( is_callable( $funcname ) ) {
		return $html;
	}

	if ( $filename && $plugin ) {
		$path=oik_path( $filename, $plugin );
		if ( file_exists( $path ) ) {
			require_once $path;
		}
	}
	if ( ! is_callable( $funcname ) ) {
		$html="Server function $funcname not available. <br />Check $plugin is installed and activated.";
	}

	return $html;
}

/**
 * Implements 'plugins_loaded' action for oik-blocks
 *
 * Prepares use of shared libraries if this has not already been done.
 */
function oik_css_plugins_loaded() {
	oik_css_boot_libs();
	oik_require_lib( 'bwtrace' );
	oik_require_lib( 'bobbfunc');
}

/**
 * Boot up process for shared libraries
 *
 * ... if not already performed
 */
function oik_css_boot_libs() {
	if ( ! function_exists( "oik_require" ) ) {
		$oik_boot_file=__DIR__ . "/libs/oik_boot.php";
		$loaded       =include_once( $oik_boot_file );
	}
	oik_lib_fallback( __DIR__ . "/libs" );
}

