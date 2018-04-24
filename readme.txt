=== oik-css ===
Contributors: bobbingwide, vsgloik
Donate link: https://www.oik-plugins.com/oik/oik-donate/
Tags: shortcode, CSS, GeSHi, [bw_css], [bw_geshi], [bw_autop], [bw_background], oik, lazy, smart
Requires at least: 4.9
Tested up to: 5.0-alpha
Gutenberg compatible: Yes
Stable tag: 0.9.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==
Allows internal CSS styling to be included in the content of the page.

Use the [bw_css] shortcode to add custom CSS as and when you need it.

For designers, developers and documentors [bw_css] supports echoing of the custom CSS, allowing you to document the CSS you are using.
For readability, the CSS is processed using the Generic Syntax Highlighter (GeSHi) processing.

Use the [bw_geshi] shortcode for syntax highlighting of: CSS, HTML(5), JavaScript and jQuery, PHP and MySQL. 
Also supports language: none.

Implemented as a lazy smart shortcode this code is dependent upon the oik base plugin.

Use the [bw_autop] shortcode to disable or re-enable WordPress's wpautop() logic.

Use the experimental [bw_background] shortcode to display an attached image in the background.


== Installation ==
1. Upload the contents of the oik-css plugin to the `/wp-content/plugins/oik-css' directory
1. Activate the oik-css plugin through the 'Plugins' menu in WordPress
1. Use the [bw_css] shortcode inside your content

== Frequently Asked Questions ==
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

If you want to display syntax highlighted CSS without affecting the current display use [bw_geshi css]


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
1. [bw_css] - syntax and examples
2. [bw_geshi] - examples 

== Upgrade Notice ==
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

