import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import './App.css'

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className='box-container'>
      <textarea id="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      <div id="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      </div>

    </>
  )
}

export default App
