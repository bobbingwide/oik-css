=== oik-css ===
Contributors: bobbingwide, vsgloik
Donate link: https://www.oik-plugins.com/oik/oik-donate/
Tags: CSS, GeSHi, blocks, shortcodes, [bw_css], [bw_geshi], [bw_autop], [bw_background], oik, lazy, smart
Requires at least: 5.0
Tested up to: 5.5.1
Gutenberg compatible: Yes
Stable tag: 1.1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==
Allows internal CSS styling to be included in the content of the page.

- Use the CSS block to add custom CSS.
- Use the GeSHi block to syntax highlight: CSS, HTML, JavaScript, jQuery, PHP, MySQL or None.

For backward compatibility: 

- Use the [bw_css] shortcode to add custom CSS as and when you need it.

For designers, developers and documentors [bw_css] supports echoing of the custom CSS, allowing you to document the CSS you are using.
For readability, the CSS is processed using the Generic Syntax Highlighter (GeSHi) processing.

- Use the [bw_geshi] shortcode for syntax highlighting of: CSS, HTML(5), JavaScript and jQuery, PHP and MySQL. 
Also supports language: none.

If the oik base plugin is activated

- Use the [bw_autop] shortcode to disable or re-enable WordPress's wpautop() logic.

- Use the experimental [bw_background] shortcode to display an attached image in the background.


== Installation ==
1. Upload the contents of the oik-css plugin to the `/wp-content/plugins/oik-css' directory
1. Activate the oik-css plugin through the 'Plugins' menu in WordPress
1. Use the CSS and GeSHi blocks within your content.

== Frequently Asked Questions ==

= What are the dependencies? =
 
This code is no longer dependent upon the oik base plugin; it uses shared libraries.
If you want to use the shortcodes then using oik v3.3.7 or higher is still recommended.

= What is the syntax? =
`
[bw_css] your CSS goes here [/bw_css] 
`

Note: The ending shortcode tag [/bw_css] is required

= How do I get the GeSHi output? =
Either
`
[bw_css .] your CSS goes here[/bw_css]
`

or
`
[bw_css text="Annotation to the CSS that will follow"] your CSS goes here[/bw_css]
`

= How do I get GeSHi output for other languages? =

Use the [bw_geshi] shortcode.
e.g. 
[bw_geshi html]&lt;h3&gt;[bw_css], [bw_geshi] &amp; [bw_background]&lt;/h3&gt;&lt;p&gt;Cool, lazy smart shortcodes from oik-plugins.&lt;/p&gt;
[/bw_geshi]

Supported languages are: 

* CSS 
* HTML(5)
* JavaScript and jQuery 
* PHP
* MySQL
* none 

If you want to display syntax highlighted CSS without affecting the current display use [bw_geshi css].


= What version of GeSHi does oik-css use? =
oik-css delivers a subset of GeSHi version 1.0.9.0, which was released in May 2017, with modifications to support PHP 7.2

Only a small selection of the languages are supported by oik-css. These are the languages primarily used by WordPress.

Note: oik-css will only load the GeSHi code if it is not already loaded.

= What about Gutenberg? =
oik-css has been tested with the Gutenberg plugin and some problems were detected.
For details see [github bobbingwide oik-css issues 9].
Changes have been made to undo the unwanted wpautop processing that affected the output of the bw_geshi shortcode.

In the future you may want to convert your shortcodes to blocks. 
We are developing a new plugin for this... [github bobbingwide oik-block].
This new plugin depends on Gutenberg, the oik base plugin and oik-css.


== Screenshots ==
1. CSS block example
2. GeSHi block example
3. [bw_css] - syntax and examples
4. [bw_geshi] - examples 
5. oik-CSS options - available when oik is active


== Upgrade Notice ==
= 1.1.0 = 
Upgrade to resolve a problem when embedding content from WordPress sites.

= 1.0.0 = 
Upgrade to use the CSS and GesHi blocks in the block editor. 

= 1.0.0-beta-20200109 =
Improved version for backward compatibility with oik and uk-tides. Needed on herbmiller.me

= 1.0.0-beta-20200105 = 
Version for testing backward compatibility with oik and uk-tides, both of which now use the oik-shortcodes shared library. 

= 1.0.0-beta-20191215 = 
Updates after testing on cwiccer.com

= 1.0.0-alpha-20191214 = 
Now delivers two blocks which are not dependent upon oik.

= 0.9.2 = 
For the GesHi block in oik-blocks accept default lang=none

= 0.9.1 = 
Upgrade for improved compatibility with the Gutenberg plugin.

= 0.9.0 = 
Upgrade for improvements to the [bw_geshi] shortcode. Now depends on oik v3.2.3. Available in US English. Localized in UK English. 

= 0.8.2 = 
[bw_geshi] shortcode now supports lang=mysql

= 0.8.1 =
Tested with WordPress 4.4. Now depends on oik v2.5 or higher

= 0.8.0 = 
Required for oik-plugins use of [bw_geshi none] for documenting oik-bwtrace output

= 0.7 = 
Required for better control over Automatic paragraph creation. Now dependent on oik v2.3 or higher.

= 0.6 = 
Tested with WordPress 3.9 to 4.0, including WPMS

= 0.5 = 
Now dependent upon oik v2.1 or higher. Tested with WordPress 3.9

= 0.4 = 
Tested with WordPress 3.8 

= 0.3 = 
Upgrade if you are finding problems with other plugins. e.g. All In One Events Calendar ( [ai1ec] shortcode )

= 0.2 =
Dependent upon the oik base plugin v2.0 (or higher)

= 0.1 =
Dependent upon the oik base plugin 

== Changelog ==
= 1.1.0 = 
* Changed: Update do_shortcode_earlier to be more like do_shortcode, [github bobbingwide oik-css issues 11]
* Tested: With WordPress 5.5.1 and WordPress Multi Site
* Tested: With PHP 7.4
* Tested: With PHPUnit 8

= 1.0.0 =
* Changed: Improved transforms from blocks and shortcodes
* Added: Screenshots for the blocks
* Changed: Updated tests
* Changed: Only enable [bw_background] and [bw_autop] when oik is activated

= 1.0.0-beta-20200109 = 
* Fixed: Caters for an old version of oik
* Changed: Added transforms from core blocks and from CSS to GeSHi

= 1.0.0-beta-20200105 =
* Added: oik-shortcodes shared library,[github bobbingwide oik-css issues 9]
* Changed: Support migration from oik-block/css and oik-block/geshi
* Tested: With WordPress 5.3.2 and WordPress Multi Site
* Tested: With PHP 7.3 and PHP 7.4
* Tested: With PHPUnit 8

= 1.0.0-beta-20191215 =
* Fixed: Fix problems noted on cwiccer.com during standalone testing  

= 1.0.0-alpha-20191214 = 
* Added: oik-css/css and oik-css/geshi blocks
* Added: Shared library logic to reduce dependency on oik
* Tested: With WordPress 5.3.1 and WordPress Multi Site
* Tested: With PHP 7.3 and PHP 7.4
* Tested: With Gutenberg 7.1.0

= 0.9.2 = 
* Changed: [bw_geshi] shortcode; default the lang parameter to none, [github bobbingwide oik-css issues 9]

= 0.9.1 = 
* Changed: removes the gutenberg_wpautop filter hook from the_content [github bobbingwide oik-css issues 9]
* Tested: With PHP 7.1 and 7.2
* Tested: With WordPress 4.9.5, 5.0-alpha and WordPress Multisite
* Tested: With Gutenberg 2.7.0

= 0.9.0 = 
* Changed: Disable GeSHi's keyword linking [github bobbingwide oik-css issues 8]
* Changed: Update GeSHi to 1.0.9.0 - May 2017 and change to support PHP 7.2 [github bobbingwide oik-css issues 5]
* Changed; 100% translatble and localizable on WordPress.org [github bobbingwide oik-css issue 6]
* Fixed: Test bw_better_autop with WordPress 4.7 [github bobbingwide oik-css issues 3]
* Fixed: [bw_geshi] - do not eliminate p and br tags when lang=html or html5 [github bobbingwide oik-css issues 7]
* Tested: With PHP 7.2 
* Tested: With WordPress 4.9.1 and WordPress Multisite 

= 0.8.2 = 
* Added: Added lang=mysql for [bw_geshi] shortcode [github bobbingwide oik-css issue 1]
* Changed: Supports PHP 7.0 [github bobbingwide oik-css issue 2]
* Tested: With WordPress 4.5-RC1

= 0.8.1 = 
* Tested: With WordPress 4.4
* Changed: Now dependent upon oik v2.5. 
* Changed: Updated oik-activation in line with oik

= 0.8.0 =
* Added: Add support for [bw_geshi none]
* Changed: Update bw_better_autop() to work with the bw_css_options[bw_autop] option setting
* Changed: [bw_background] shortcode default selector set to 'body'
* Tested: With WordPress 4.3

= 0.7 = 
* Added: oik-CSS section for oik options > Overview to control Automatic paragraph creation
* Changed: Responds to "oik_loaded" action to invoke the first part of 'better automatic paragraph creation'
* Changed: Responds to "oik_admin_menu" action 
* Changed: Responds to "oik_menu_box" action to display the new section
* Changed: Now dependent upon oik v2.3
* Changed: Styled CSS now wrapped in a div with class bw_css
* Changed: Styled GeSHi now wrapped in a div with classes bw_geshi and the selected language

= 0.6 = 
* Added: In response to the 'oik_add_shortcodes' action hook the default processing is to disable wpautop() processing.
* Added: You can partially re-enable wpautop() processing using the [bw_autop true] shortcode.
* Added: [bw_autop] shortcode - experimental
* Added: [bw_background] shortcode - experimental
* Changed: Then you can turn it off again later [bw_autop false]
* Fixed: Updated bw_remove_unwanted_tags() to cater for ampersands

= 0.5 =
* Fixed: So that [bw_geshi] works with NextGen gallery installed
* Tested: With WordPress 3.9-beta3
* Changed: Dependency logic, now dependent upon oik v2.1

= 0.4 =
* Tested: With WordPress 3.8
* Changed: Added support for media=print in addition to media=screen

= 0.3 = 
* Changed: bw_remove_unwanted_tags() now handles the HTML versions of Left single quotation mark and Right single quotation mark.
* Changed: Replace wpautop() by bw_wpautop(), run after shortcode expansion and remove shortcode_unautop(), no longer necessary
* Added: bw_wpautop() implement 'the_content' filter using wpautop() without converting newlines to br tags

= 0.2 = 
* Added: [bw_geshi] GeSHi processing, but only providing support for: CSS, jQuery, JavaScript, PHP and HTML5.
* Added: Help, syntax help and example for [bw_geshi]

= 0.1 =
* Added: [bw_css] shortcode

== Further reading ==
If you want to read more about the oik plugins then please visit the
[oik plugin](https://www.oik-plugins.com/oik) 
**"OIK - OIK Information Kit"**

