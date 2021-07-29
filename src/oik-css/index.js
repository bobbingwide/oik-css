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
import Edit from './edit';

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

//import metadata from './block.json';

/**
 * Registers the oik-css/css block.
 */
export default registerBlockType( 'oik-css/css',
	{
		example: {
			attributes: {
				css: 'div.wp-block-oik-css-css { color: red;}',
				text: __( 'This sentence will be very red.' ),
			},
		},

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

		edit: Edit,

		/**
		 * We intend to render this dynamically but we need the content created by the user
		 */
		save( { attributes } ) {
			return null;
		}
	}
);

