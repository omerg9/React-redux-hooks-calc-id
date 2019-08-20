import React from 'react';

import Result from '../../components/Result';
import Form from '../Form';
import { Wrapper } from './App.style';

const App = () => {
  return (
    <Wrapper>
      <Form />
      <Result />
    </Wrapper>
  )
}

export default App;
