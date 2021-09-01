import {MyRichText} from "./RichTextComponent";

const registerBlockType = wp.blocks.registerBlockType;
const __ = wp.i18n.__;
// import {RichText} from '@wordpress/editor';
const {RichText} = wp.editor;
import {MyComponent} from './MyCustomComponent';



registerBlockType('mytheme-blocks/firstblock', {
  title: __('First Block', 'mytheme-blocks'),
  description: __('My First Block', 'mytheme-blocks'),
  category: 'design',
  attributes : {
      content: {
        type: 'string'
      }
  } ,
  icon: {
    background: '#f07',
    src: 'heart',
    foreground: '#fff'
  },

  edit: function ({className, attributes, setAttributes}) {
    const {content} =  attributes;
    const onChangeContent = (content) => {
      setAttributes({content})
    }
    return <MyRichText className={className} changeFunction={onChangeContent} content={content}/>
  },
  save: function ({attributes}) {
    console.log(attributes);
    return <MyComponent text={attributes.content}/>;
  }
});


