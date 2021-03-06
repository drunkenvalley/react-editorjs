import EditorJs, { EditorConfig, ToolConstructable, ToolSettings } from '@editorjs/editorjs'
import React, { Component } from 'react'

interface EditorProps {
  tools?: {
    [toolName: string]: ToolConstructable | ToolSettings<any>
  } | undefined
}
interface EditorState {
  editor: EditorJs
}

export class Editor extends Component<EditorProps, EditorState> {
  componentDidMount () {
    const { tools } = this.props

    const config: EditorConfig = {
      minHeight: 0,
      tools
    }

    this.setState({
      editor: new EditorJs(config)
    })
  }

  render () {
    return <div id="editorjs" className='bg-light border shadow-sm editor-bg container-fluid mb-4 p-4' />
  }
}

export default Editor
