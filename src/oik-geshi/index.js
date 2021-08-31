/**
 * @package oik-css
 *
 * Implements [bw_geshi] shortcode as a server rendered block
 *
 * Uses [bw_geshi] shortcode from oik-css plugin
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2021
 * @author Herb Miller @bobbingwide
 */
import './style.scss';

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

import { registerBlockType, createBlock } from '@wordpress/blocks';
import {AlignmentControl, BlockControls, InspectorControls, useBlockProps, PlainText} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {
	Toolbar,
	PanelBody,
	PanelRow,
	FormToggle,
	TextControl,
	TextareaControl,
	SelectControl } from '@wordpress/components';
import { Fragment} from '@wordpress/element';
import { map, partial } from 'lodash';

import metadata from './block.json';

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
export default registerBlockType( metadata,

    {
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


        edit: props => {
			const { attributes, setAttributes, instanceId, focus, isSelected } = props;
			const { textAlign, label } = props.attributes;
			const blockProps = useBlockProps( {
				className: classnames( {
					[ `has-text-align-${ textAlign }` ]: textAlign,
				} ),
			} );

            const onChangeLang =  ( event ) => {
                props.setAttributes( { lang: event } );
            };
            const onChangeText = ( event ) => {
                props.setAttributes( { text: event } );
            };
            const onChangeContent = ( value ) => {
                props.setAttributes( { content: value } );
            };
            const onChangeSrc = ( value ) => {
                props.setAttributes( { src: value } );
            }

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
						<PanelBody>
							<PanelRow>
								<TextControl
									label={ __( 'Source file: ID, URL or path' ) }
									value={  props.attributes.src }
									onChange={ onChangeSrc }
								/>
							</PanelRow>
						</PanelBody>
	                </InspectorControls>
					<div { ...blockProps}>
                    {!isSelected &&
                    <ServerSideRender
                        block="oik-css/geshi" attributes={props.attributes}
                    />
                    }

                    {isSelected &&

                    <PlainText
                        value={props.attributes.content}
                        placeholder={__('Write code or specify a source file.')}
                        onChange={onChangeContent}
                    />

                    }
					</div>


                </Fragment>

        );
        },


        save() {
            return null;
        }
    }
);
