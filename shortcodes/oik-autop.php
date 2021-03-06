<?php // (C) Copyright Bobbing Wide 2014-2017
/**
 * Implement [bw_autop] shortcode
 * 
 * @param array $atts - shortcode parameters
 * @param string $content - not expected
 * @param string $tag - not expected
 * @return string - filtered HTML 
 */
function bw_autop( $atts=null, $content=null, $tag=null ) {
  $autop = bw_array_get_from( $atts, "autop,0", true );
  $autop = bw_validate_torf( $autop );
  //bw_trace2( $autop, "autop" );
  bw_better_autop( $autop );
  return( bw_ret());
} 

/**
 * Help hook for [bw_autop]
 *
 */
function bw_autop__help( $shortcode="bw_autop" ) {
  return( __( "Dynamically re-enable/disable automatic paragraph generation", "oik-css" ) );
}

/**
 * Syntax hook for [bw_autop]
 *
 */
function bw_autop__syntax( $shortcode="bw_autop" ) {
  $syntax = array( "autop,0" => BW_::bw_skv( "true", "false", __( "Re-enable/disable automatic paragraph generation", "oik-css" ) )
                 );
  return( $syntax );
}
