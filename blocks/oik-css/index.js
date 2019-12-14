/**
 * Implements CSS block
 *
 * Uses the logic for the [bw_css] shortcode
 *
 * @copyright (C) Copyright Bobbing Wide 2018, 2019
 * @author Herb Miller @bobbingwide
 */
import './style.scss';
import './editor.scss';

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;
// Get registerBlockType and Editable from wp.blocks
const { 
	registerBlockType, 
} = wp.blocks;

const {
	Editable,
  InspectorControls,
	PlainText,
	ServerSideRender,
 } = wp.editor;
	 
const {
  Toolbar,
  Button,
  Tooltip,
  PanelBody,
  PanelRow,
  FormToggle,
	TextControl,
	TextareaControl,

} = wp.components;
const Fragment = wp.element.Fragment;

const {
	withInstanceId,
} = wp.compose;


const RawHTML = wp.element.RawHTML;
// Set the header for the block since it is reused
//const blockHeader = <h3>{ __( 'Person' ) }</h3>;

//var TextControl = wp.blocks.InspectorControls.TextControl;

/**
 * Register the oik-css/css block
 * 
 * registerBlockType is a function which takes the name of the block to register
 * and an object that contains the properties of the block.
 * Some of these properties are objects and others are functions
 */
export default registerBlockType(
    // Namespaced, hyphens, lowercase, unique name
		'oik-css/css',
    {
        // Localize title using wp.i18n.__()
        title: __( 'CSS' ),
				
				description: 'Inline CSS',

        // Category Options: common, formatting, layout, widgets, embed
        category: 'layout',

        // Dashicons Options - https://goo.gl/aTM1DQ
        icon: 'admin-appearance',

        // Limit to 3 Keywords / Phrases
        keywords: [
            __( 'CSS' ),
            __( 'oik' ),
        ],

        // Set for each piece of dynamic data used in your block
        attributes: {
				
          css: {
            type: 'string',
 
          },
					text: {
						type: 'string',
						default: '',
					},
					
        },
		example: {
			attributes: {
				css: 'div.bw_css { color: red;}',
				text: __( 'This sentence will be red.' ),
			},
		},
				
		supports: {
			customClassName: false,
			className: false,
			html: false,
		},
			
		edit: withInstanceId(
			( { attributes, setAttributes, instanceId, focus, isSelected } ) => {
				const inputId = `blocks-css-input-${ instanceId }`;
				
				
				const onChangeText = ( value ) => {
						setAttributes( { text: value } );
				};
				
				const onChangeCSS = ( value ) => {
					setAttributes( { css: value } );
				};
	
				return (
					<Fragment>
				
            <InspectorControls key="css">
								<PanelBody>
									<TextareaControl label="Text" value={attributes.text} onChange={onChangeText} />
								</PanelBody>
              </InspectorControls>
						<Fragment>

						<div className="wp-block-oik-css-css " key="css-input">
							<PlainText
								id={inputId}
								value={attributes.css}
								placeholder={__('Write CSS')}
								onChange={onChangeCSS}
							/>
						</div>

							{!isSelected &&


							<ServerSideRender
								block="oik-css/css" attributes={attributes}
							/>
							}
						</Fragment>

					</Fragment>
				);
			}
		),
				
			saver() {
				 // Rendering in PHP but we still need the content
					return ( 
					<p>div  color: re; </p>
					);
			},
		

		/**
		 * We intend to render this dynamically but we need the content created by the user
		 */
		save( { attributes } ) {
			//console.log( attributes.css );
			//return <RawHTML></RawHTML>;
			return null;
		},
	},
);
