import React from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
// marked.js import
// var marked = require('marked'); // error with this import using window.marked instead

import Navbar from './navbar/navbar.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText: '',
      convertedHtml: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  setInitialStates() {
    let markdownText = `# Markdown Previewer Heading 1
## Touseef Ahmad Heading 2
### Frontend Libraries project heading 3
You can add **bold** text or _italic_ \n 
Here is a random link for **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).`

    let convertedHtml = window.marked(markdownText || '');

    this.setState({
      markdownText,
      convertedHtml
    });
  }
  componentDidMount() {
    this.setInitialStates();
  }

  handleChange(e) {
    let markdownText = e.target.value,
      convertedHtml = window.marked(markdownText || '');
    this.setState({
      markdownText,
      convertedHtml
    });
  }

  render() {
    return (
      <div>
        
        <Navbar/>
        <div className="row">
          <div className="col-md-6">
            <textarea className="form-control border-0" style={{ height: '700px' }} id="editor" value={this.state.markdownText} onChange={this.handleChange}></textarea>
          </div>
          <div id="preview" className="card card-body bg-light col-md-6" dangerouslySetInnerHTML={{ __html: this.state.convertedHtml }} />
        </div>
      </div>
    );
  }
}


export default App;
