import React from 'react';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
// marked.js import
// var marked = require('marked'); // error with this import using window.marked instead
import { NavBar } from './navbar';

class MarkdownPreviewer extends React.Component {
  state = {
    markdownText: '',
    convertedHtml: '',
  };

  componentDidMount() {
    this.setInitialStates();
  }

  setInitialStates = () => {
    const markdownText = `# Markdown Previewer Heading 1
## Touseef Ahmad Heading 2
### Frontend Libraries project heading 3
You can add **bold** text or _italic_
Here is a random link for 
**LaTeX** mathematical expressions 
[here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).`;

    const convertedHtml = window.marked(markdownText || '');

    this.setState({
      markdownText,
      convertedHtml,
    });
  };

  handleChange = event => {
    const markdownText = event.target.value;
    const convertedHtml = window.marked(markdownText || '');
    this.setState({
      markdownText,
      convertedHtml,
    });
  };

  render() {
    const { markdownText, convertedHtml } = this.state;

    return (
      <div>
        <NavBar />
        <div className='row'>
          <div className='col-md-6'>
            <textarea
              className='form-control border-0'
              style={{ height: '700px' }}
              id='editor'
              value={markdownText}
              onChange={this.handleChange}
            />
          </div>
          <div
            id='preview'
            className='card card-body bg-light col-md-6'
            dangerouslySetInnerHTML={{ __html: convertedHtml }}
          />
        </div>
      </div>
    );
  }
}

export { MarkdownPreviewer };
