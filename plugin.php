<?php
/**
* Plugin Name: my test plugin
* Plugin URI: https://google.com/
* Description: my test plugin
* Version: 1.0.0
* Author: Khrystyna Bohdan
* Author URI: https://www.linkedin.com/in/khrystyna-bohdan/
*/

if( ! defined('ABSPATH') ){
    exit;
}

function mytheme_blocks_register() {
    wp_register_script(
        'mytheme-blocks-firstblock-editor-script',
        plugins_url('dist/bundle.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor')
   );

    register_block_type(
        'mytheme-blocks/firstblock',
        array(
            'editor_script' => 'mytheme-blocks-firstblock-editor-script',
//             'script'
//             'style'
//             'editor_style'
        )
    );
}

add_action('init', 'mytheme_blocks_register');
