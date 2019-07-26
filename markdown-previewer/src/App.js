import React from 'react';
import './App.css';
import marked from 'marked';

import Title from './Components/Title';


const initialMarkdown = `
  ### Header  

  # Header 1
  ## Header 2
  ### Header 3
  #### header4
  ##### header 5
  ###### header 6

  ### List

  - list item one 
  - list item two
  - list item three

  ### Links
  [freeCodeCamp](https://www.freecodecamp.org/ "Learn to code")

  ### Text Decorations
  
  *italic*
  
  **bold**

  ***bold and italic***

  \` const multiply = (a, b) => a * b; \`
  
  \`\`\`
  function multiply(a, b) {
    return a * b;
  }
  \`\`\`

  ### Blockquote

  > This is a blockquote

  ### Image
  
  ![alt text](https://image.shutterstock.com/image-vector/back-school-vector-banner-design-450w-1088775671.jpg 'school time')
`;

marked.setOptions({
  breaks: true
});


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      markdown: initialMarkdown
    };
  }
  
  handleChange = e => this.setState({ markdown: e.target.value });
  
  render() {
    return (
      <div>
        <Title />
        <div className='container'>
          <div>
            <h4>Input</h4>
            <div className='left'>
              <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <h4>Output</h4>
            <div className='right'>
              <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
            </div>
          </div>
        </div>
      </div>
    )
  };
}


export default App;