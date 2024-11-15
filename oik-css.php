<?php
/*
Plugin Name: oik-css
Plugin URI: https://www.oik-plugins.com/oik-plugins/oik-css
Description: Implements CSS and GeSHi blocks for internal CSS styling and to help document source code examples
Version: 2.3.1
Author: bobbingwide
Author URI: https://bobbingwide.com/about-bobbing-wide
Text Domain: oik-css
Domain Path: /languages/
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

    Copyright 2013-2024 Bobbing Wide (email : herb@bobbingwide.com )

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

oik_css_plugin_loaded();

/**
 * Implement "oik_loaded" action for oik-css
 *
 * Regardless of whether there are any shortcodes
 * we apply our logic for filtering 'the_content'
 *
 * The call to bw_better_autop() takes a parameter to control whether
 * the bw_autop() function is called to perform wpautop logic or not.
 * When it's a block based theme the value is true when PHP is being run in the command line interface (CLI)
 * false otherwise. This is a pragmatic solution for PHPUnit testing.
 *
 * For classic themes the option field is a checkbox that is ticked when the wpautop() processing is to be disabled.
 * So we need to negate the value when calling bw_better_autop().
 *
 * Note: Most of the better autop logic applies regardless of the settting for bw_autop
 *Part
 */
function oik_css_oik_loaded() {
	$theme         =wp_get_theme();
	$is_block_theme=$theme->is_block_theme();
	if ( $is_block_theme ) {
		bw_better_autop( PHP_SAPI === 'cli' );
	} else {
		$bw_disable_autop=bw_get_option( "bw_autop", "bw_css_options" );
		$bw_autop        = ! $bw_disable_autop;
		bw_better_autop( $bw_autop );
	}
	add_action( "oik_add_shortcodes", "oik_css_init" );
}

/**
 * Implements "oik_add_shortcodes" action for oik-css.
 *
 * Note: If oik's not really loaded we can't use bw_background or bw_autop.
 */
function oik_css_init() {
  bw_add_shortcode( "bw_css", "oik_css", oik_path( "shortcodes/oik-css.php", "oik-css" ), false );
  bw_add_shortcode( "bw_geshi", "oik_geshi", oik_path( "shortcodes/oik-geshi.php", "oik-css" ), false );

  if ( class_exists( 'BW_') ) {
	  bw_add_shortcode( "bw_background", "bw_background", oik_path( "shortcodes/oik-background.php", "oik-css" ), false );
	  bw_add_shortcode( "bw_autop", "bw_autop", oik_path( "shortcodes/oik-autop.php", "oik-css" ), false );
  }
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
 * @param string $pee - the content with new lines to be converted to paragraphs.
 * @return string - the content with automatically generated paragraphs.
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
    //add_filter( 'option_blogname', 'oik_css_pesky_shortcodes');
    //add_filter( 'oembed_response_data')
  }
}

function oik_css_pesky_shortcodes( $name ) {
    //bw_trace2();
    //bw_backtrace();
    $name = str_replace( '[', '&#91;', $name );
    return $name;
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
 * Function to run when the plugin file is loaded
 */
function oik_css_plugin_loaded() {
  add_action( "oik_admin_menu", "oik_css_admin_menu" );
  add_action( "oik_loaded", "oik_css_oik_loaded" );
  add_action( 'init', 'oik_css_init_blocks', 100);
  //add_action( 'plugins_loaded', 'oik_css_plugins_loaded' );
  add_action( 'parse_request', 'oik_css_plugins_loaded' );
}

/**
 * This logic is expected to run independent of oik and oik-blocks
 */
function oik_css_init_blocks() {
	oik_css_plugins_loaded();
	$library_file = oik_require_lib( 'oik-blocks' );
	//oik\oik_blocks\oik_blocks_register_editor_scripts( 'oik-css', 'oik-css' );
	//oik\oik_blocks\oik_blocks_register_block_styles( 'oik-css' );
	oik_css_register_dynamic_blocks();
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
		add_filter( 'block_type_metadata', 'oik_css_block_type_metadata', 10 );
		/*
		register_block_type( 'oik-css/css',
			[
				'render_callback'=>'oik_css_dynamic_block_css',
				'attributes'     =>[
					'css' =>[ 'type'=>'string' ],
					'text'=>[ 'type'=>'string' ],
					'src' => ['type'=>'string']
				]
				, 'editor_script' => 'oik-css-blocks-js'
				, 'editor_style' => null
				, 'script' => null
				, 'style' => 'oik-css-blocks-css'
			] );
		*/
		$args = [ 'render_callback' => 'oik_css_dynamic_block_css'];
		$registered = register_block_type_from_metadata( __DIR__ .'/src/oik-css', $args );
		//bw_trace2( $registered, "registered", false);

 		$args = [ 'render_callback' => 'oik_css_dynamic_block_geshi'];
		$registered = register_block_type_from_metadata( __DIR__ .'/src/oik-geshi', $args );
		//bw_trace2( $registered, "registered", false);

		/**
		 * Localise the script by loading the required strings for the build/entry-point.js files
		 * from the locale specific .json file in the languages folder.
		 */
		$ok = wp_set_script_translations( 'oik-css-css-editor-script', 'oik-css' , __DIR__ .'/languages' );
		$ok = wp_set_script_translations( 'oik-css-geshi-editor-script', 'oik-css' , __DIR__ .'/languages' );
	}
}

/**
 * Implements block_type_metadata filter to set the textdomain if not set.
 *
 * Note: $metadata['name'] will be set for each block with a prefix of oik-css
 *
 * @param $metadata
 * @return mixed
 */
function oik_css_block_type_metadata( $metadata ) {
	if ( !isset( $metadata['textdomain']) ) {
		$name = $metadata['name'];
		$name_parts = explode( '/', $name );
		$textdomain = $name_parts[0];
		if ( 'oik-css' === $textdomain ) {
			$metadata['textdomain'] = $textdomain;
		}
	}
	return $metadata;
}

/**
 * Server rendering dynamic CSS block with content
 *
 * Assumes that the oik-css plugin is installed.
 * The plugin doesn't need to be activated.
 *
 * @param array $attributes array of block attributes.
 * @return string generated HTML
 */
function oik_css_dynamic_block_css( $attributes ) {
	$html = \oik\oik_blocks\oik_blocks_check_server_func( 'shortcodes/oik-css.php', 'oik-css', 'oik_css' );
	if ( ! $html ) {
		$content = bw_array_get( $attributes, 'css', null );
		bw_trace2( $content, 'Content', false, BW_TRACE_VERBOSE );
		$html = oik_css( $attributes, $content );
		$html = oik_css_server_side_wrapper( $attributes, $html );
	}
	return $html;
}

/**
 * Renders the GeSHi block
 *
 * @param array $attributes lang, type, content.
 * @return string generated HTML
 */
function oik_css_dynamic_block_geshi( $attributes ) {
	$html = \oik\oik_blocks\oik_blocks_check_server_func( 'shortcodes/oik-geshi.php', 'oik-css', 'oik_geshi' );
	if ( ! $html ) {
		$lang = bw_array_get( $attributes, 'lang', null );
		if  ( empty( $lang ) ) {
			$attributes['lang'] = 'none';
		}

		$content = bw_array_get( $attributes, 'content', null );
		$html    = oik_geshi( $attributes, $content );
		if ( ! $html ) {
			$html = 'empty';
		}
		$html = oik_css_server_side_wrapper( $attributes, $html );
	}
	return $html;
}

function oik_css_server_side_wrapper( $attributes, $html ) {
	$align_class_name=empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$extra_attributes  =[ 'class'=>$align_class_name ];
	$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );
	$html=sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		$html
	);
	return $html;
}

/**
 * Implements 'parse_request' action for oik-css.
 *
 * Prepares use of shared libraries if this has not already been done.
 */
function oik_css_plugins_loaded() {
	oik_css_boot_libs();
	oik_require_lib( 'bwtrace' );
	oik_require_lib( 'bobbfunc' );
	if ( ! function_exists( 'bw_add_shortcode' ) ) {
		$oik_shortcodes_path = oik_path( 'oik-add-shortcodes.php' );
		if ( file_exists( $oik_shortcodes_path ) ) {
			/* Don't load oik-shortcodes library */
			require_once $oik_shortcodes_path;
		} else {
			oik_require_lib( 'oik-shortcodes' );
		}
	}
	bw_load_plugin_textdomain( "oik-css");
}

/**
 * Boot up process for shared libraries
 *
 * ... if not already performed
 */
function oik_css_boot_libs() {
	if ( ! function_exists( 'oik_require' ) ) {
		$oik_boot_file = __DIR__ . '/libs/oik_boot.php';
		$loaded        = include_once( $oik_boot_file );
	}
	oik_lib_fallback( __DIR__ . '/libs' );
}
