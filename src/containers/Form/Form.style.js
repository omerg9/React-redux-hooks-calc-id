import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  
  .fields {
  	display: flex;
  	justify-content: center;
  	
  	.field {
  		display: flex;
  		flex-direction: column;
  		margin-right: 16px;
  		
  		&:last-child {
  			margin-right: 0px;
  		}
  		
  		.ui.pointing.below.prompt.label {
  			width: 100px;
  			text-align: center;
  			line-height: 1.5;
  			opacity: 0;
  			transition: opacity .3s ease-in-out;
  			
  			&.visible {
  				opacity: 1;
  			}
  		}
  	}
  }
  
  .ui.input {
  	max-width: 100px;
  	
  	input {
  		height: 100px;
  		width: 100px;
  		text-align: center;
  		vertical-align: center;
  		font-size: 24px;
  	}
  }
`;
