<?php // (C) Copyright Bobbing Wide 2013, 2014

/**
 * Validate the language for GeSHi
 *
 * Note: html5 is a special version which will also remove unwanted tags.
 *
 * @param string $lang - the required languange ( case insensitive )
 * @param string $text - alternative parameter for language ( case sensitive )
 * @return string - the validated language, or null
 * 
 */
function oik_css_validate_lang( $lang, &$text ) {
  bw_trace2();
  $lang = strtolower( $lang );
  $valid = bw_assoc( bw_as_array( "css,html,javascript,jquery,php,html5" ));
  $vlang = bw_array_get( $valid, $lang, null );
  if ( !$vlang ) {
    $vlang = bw_array_get( $valid, $text, null );
    if ( $vlang ) {
      $text = $lang; 
    }  
  }
  if ( !$vlang ) {
    p( "Invalid lang= parameter for bw_geshi shortcode. $lang" );
    p( "$vlang,$text" );
  } 
  return( $vlang );
}

/**
 * Format the content for the chosen language
 *
 * @param array $atts - array of parameters. The formal parameter name is "text" but ANY value will do the job
 * @param string $content - the CSS to be displayed
 */
function bw_format_content( $atts, $content ) {
  $lang = bw_array_get_from( $atts, "lang,0", null );
  $text = bw_array_get_from( $atts, "text,1", null );
  $lang = oik_css_validate_lang( $lang, $text );
  if ( $lang ) {
    if ( $text <> "." ) {
      e( $text );
    }
    if ( $lang <> "html" ) {
      $content = bw_remove_unwanted_tags( $content );
    } else {
      $lang = "html5"; 
      bw_trace2( $content, "html5-content" );
    } 
    e( bw_geshi_it( $content, $lang ) );
  }
}

/**
 * Implement the [bw_geshi] shortcode for source code syntax highlighting
 */
function oik_geshi( $atts=null, $content=null, $tag=null ) {
  //bw_backtrace();
  //bw_trace2( $content, "pre fiddled content" );
  if ( $content ) {
    oik_require( "shortcodes/oik-css.php", "oik-css" );
    bw_format_content( $atts, $content );
  }
  return( bw_ret() );
}

/** 
 * Help hook for the bw_geshi shortcode
 */ 
function bw_geshi__help( $shortcode="bw_geshi" ) {
  return( "Generic Syntax Highlighting" );
}

/**
 * Syntax hook for the bw_geshi shortcode
 */
function bw_geshi__syntax( $shortcode="bw_geshi" ) {
  $syntax = array( "lang" => bw_skv( null, "html|css|javascript|jquery|php", "Programming language" )
                 , "text" => bw_skv( null, "<i>text</i>", "Descriptive text to display" )
                 );
  return( $syntax );
}

/**
 * Implement example hook for the bw_geshi shortcode
 * 
 * We can't use bw_invoke_shortcode() since we need to call esc_html() against the sample HTML code
 * otherwise it just gets processed as normal output
 *
 * @param string $shortcode 
 */
function bw_geshi__example( $shortcode="bw_css" ) {
  $text = "Demonstrating the HTML to create a link to www.oik-plugins.com";
  p( $text );
  $example = "[$shortcode";
  $example .= ' html .]<a href="http://www.oik-plugins.com">Visit oik-plugins.com</a>[/bw_geshi';
  $example .= ']';
  sp();
  stag( "code" );
  e( esc_html( $example ) ); 
  etag( "code" ); 
  ep();
  $expanded = apply_filters( 'the_content', $example );
  e( $expanded );
}




  


