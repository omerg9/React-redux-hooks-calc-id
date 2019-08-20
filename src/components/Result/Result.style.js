import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  flex-wrap: wrap;
  
  .ui.input {
  	max-width: 150px;
  	
  	input {
  		height: 150px;
  		width: 150px;
  		text-align: center;
  		vertical-align: center;
  		font-size: 48px;
  	}
  }
`;
