import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from '../full-page/Section1/index';
import Section2 from '../full-page/Section2/index';

class Fullpage extends React.Component {
  onLeave(origin, destination, direction) {
    // arguments are mapped in order of fullpage.js callback arguments
    // do something with the event
  }

  render() {
    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        onLeave={this.onLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state);

          return (
            <ReactFullpage.Wrapper>
              <Section1/>
              <Section2/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<Fullpage />, document.getElementById('ad-htsc'));