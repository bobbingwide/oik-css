/**
 * @package oik-css
 *
 * Implements [bw_geshi] shortcode as a server rendered block
 *
 * Uses [bw_geshi] shortcode from oik-css plugin
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2020
 * @author Herb Miller @bobbingwide
 */
import './style.scss';
//import './editor.scss';

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;
// Get registerBlockType from wp.blocks
const {
    registerBlockType,
    createBlock,
} = wp.blocks;
const {
    ServerSideRender,
} = wp.editor;
const {
    InspectorControls,
    PlainText,
} = wp.blockEditor;

const {
    Toolbar,
    PanelBody,
    PanelRow,
    FormToggle,
    TextControl,
    TextareaControl,
    SelectControl,

} = wp.components;

import { map, partial } from 'lodash';
const Fragment = wp.element.Fragment;

/**
* These are the different options for the GeSHi lang= attribute.
 * It's tricky getting it to accept lang=none!
*/
const langOptions =
    { none: "None",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        jquery: "jQuery",
        php: "PHP",
        mysql: "MySQL",
    };

/**
 * Register the WordPress block
 */
export default registerBlockType(
    // Namespaced, hyphens, lowercase, unique name
    'oik-css/geshi',
    {
        // Localize title using wp.i18n.__()
        title: __( 'GeSHi' ),

        description: 'Generic Syntax Highlighting - for code examples',

        // Category Options: common, formatting, layout, widgets, embed
        category: 'layout',

        // Dashicons Options - https://goo.gl/aTM1DQ
        icon: 'editor-code',

        // Limit to 3 Keywords / Phrases
        keywords: [
            __( 'GeSHi' ),
            __( 'syntax' ),
            __( 'highlight' ),
            __( 'PHP' ),
            __( 'HTML' ),
            __( 'JavaScript' ),
            __( 'CSS' ),
            __( 'MySQL' ),

        ],

        // Set for each piece of dynamic data used in your block
        attributes: {
            lang: {
                type: 'string',
                default: '',
            },
            text: {
                type: 'string',
            },
            content: {
                type: 'string',
            },


        },
        example: {
            attributes: {
                lang: 'php',
                text: 'WordPress motto',
                content: __( 'echo "Code is Poetry."' ),
             },
        },
        transforms: {
            from: [
                {
                    type: 'block',
                    blocks: ['oik-block/geshi'],
                    transform: function( attributes ) {
                        return createBlock( 'oik-css/geshi', {
                            lang: attributes.lang,
                            text: attributes.text,
                            content: attributes.content
                        });
                    },
                },
            ],
            from: [
                {
                    type: 'block',
                    blocks: ['core/paragraph', 'core/code', 'core/preformatted'],
                    transform: function( attributes ) {
                        return createBlock( 'oik-css/geshi', {
                            content: attributes.content
                        });
                    },
                },
            ],
        },


        supports: {
            customClassName: false,
            className: false,
            html: false,
        },

        edit: props => {

            const onChangeLang =  ( event ) => {
                props.setAttributes( { lang: event } );
            };
            const onChangeText = ( event ) => {
                props.setAttributes( { text: event } );
            };
            const onChangeContent = ( value ) => {
                props.setAttributes( { content: value } );
            };

        /**
        * Attempt a generic function to apply a change
            * using the partial technique
            *
            * key needs to be in [] otherwise it becomes a literal
            *
            */
            //onChange={ partial( handleChange, 'someKey' ) }

            function onChangeAttr( key, value ) {
                //var nextAttributes = {};
                //nextAttributes[ key ] = value;
                //setAttributes( nextAttributes );
                props.setAttributes( { [key] : value } );
            };

            const isSelected = props.isSelected;




            return (
                <Fragment>
                <InspectorControls >
                    <PanelBody>
                        <PanelRow>
                            <SelectControl label="Lang" value={props.attributes.lang}
                                           options={ map( langOptions, ( key, label ) => ( { value: label, label: key } ) ) }
                                           onChange={partial( onChangeAttr, 'lang' )}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextareaControl label="Text"
                                         value={ props.attributes.text }
                                         onChange={ onChangeText }
                            />
                        </PanelRow>

                    </PanelBody>

                </InspectorControls>
                    {!isSelected &&
                    <ServerSideRender
                        block="oik-css/geshi" attributes={props.attributes}
                    />
                    }

                    {isSelected &&
                    <div className="wp-block-oik-css-geshi wp-block-shortcode" key="content-input">
                    <PlainText
                        value={props.attributes.content}
                        placeholder={__('Write code')}
                        onChange={onChangeContent}
                    />
                    </div>
                    }


                </Fragment>

        );
        },


        save() {
            return null;
        },
    },
);
