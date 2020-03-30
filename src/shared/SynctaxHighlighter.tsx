import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter = (props: any) => {
    const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Highlighter;