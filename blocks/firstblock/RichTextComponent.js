const {RichText} = wp.editor;

export function MyRichText (props) {
  return <RichText
  tagName='p'
  className = {props.className}
  onChange = {props.changeFunction}
  value = {props.content}
  />

}
