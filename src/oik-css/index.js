/**
 * Implements CSS block
 *
 * Uses the logic for the [bw_css] shortcode
 *
 * @copyright (C) Copyright Bobbing Wide 2018-2021
 * @author Herb Miller @bobbingwide
 */
import './style.scss';
import './editor.scss';

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
 * Registers the oik-css/css block.
 */
export default registerBlockType( metadata,
	{
		example: {
			attributes: {
				css: 'div.wp-block-oik-css-css { color: red;}',
				text: __( 'This sentence will be very red.' ),
			},
		},
		/*
		transforms: {
			from: [
				{
					type: 'block',
					blocks: ['oik-block/css'],
					transform: function( attributes ) {
						return createBlock( 'oik-css/css', {
							css: attributes.css,
							text: attributes.text
						});
					},
				},
				{
					type: 'block',
					blocks: ['core/paragraph', 'core/code', 'core/preformatted'],
					transform: function( attributes ) {
						return createBlock( 'oik-css/css', {
							css: attributes.content
						});
					},
				},
			],

		},
		*/


		edit: props => {
			const { attributes, setAttributes, instanceId, focus, isSelected } = props;
			const { textAlign, label } = props.attributes;
			const blockProps = useBlockProps( {
				className: classnames( {
					[ `has-text-align-${ textAlign }` ]: textAlign,
				} ),
			} );

				const inputId = `blocks-css-input-${ instanceId }`;


				const onChangeText = ( value ) => {
						setAttributes( { text: value } );
				};

				const onChangeCSS = ( value ) => {
					setAttributes( { css: value } );
				};

				const onChangeSrc = ( value ) => {
					setAttributes( { src: value } );
				}

				return (
					<Fragment>

            <InspectorControls key="css">
								<PanelBody>
									<TextareaControl label="Text" value={attributes.text} onChange={onChangeText} />
								</PanelBody>
					<PanelBody>
						<PanelRow>
							<TextControl
								label={ __( 'Source file: ID, URL or path' ) }
								value={  attributes.src }
								onChange={ onChangeSrc }

							/>

						</PanelRow>
					</PanelBody>
              </InspectorControls>
						<Fragment>
							<div { ...blockProps}>

							<PlainText
								id={inputId}
								value={attributes.css}
								placeholder={__('Write CSS or specify a source file.')}
								onChange={onChangeCSS}
							/>
						</div>

							{!isSelected &&

							<div { ...blockProps}>
							<ServerSideRender
								block="oik-css/css" attributes={attributes}
							/>
							</div>
							}
						</Fragment>

					</Fragment>
				);
			},

		/**
		 * We intend to render this dynamically but we need the content created by the user
		 */
		save( { attributes } ) {
			return null;
		}
	}
);

