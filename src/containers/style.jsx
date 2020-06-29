import styled from 'styled-components';

const DefaultStyle = styled.div`
  .left-sidebar, .right-sidebar{
      height: 100vh;
      background: #23222e
  }
  .right-sidebar{
      background:#2f303d
  }
  .logo{
    margin: 36px 16px 24px 16px;
    background-position: -10px -66px;
    width: 241px;
    height: 77px;
    zoom: .8;
  }
  .logo-sec{
      text-align: center
  }
  .sub-parent{
    display: flex;
    flex-direction: column;
  }
  .send-coin{
      display: flex;
      justify-content: center;
  }
  .MuiFormControl-root {
      width: 100%;
  }
  .terms-and-cond{
      text-align: center;
      color: rgba(255,255,255,.6);
  }
  .terms, .pol{
      color: white
  }
  .MuiFilledInput-input {
    background: white;
    border-right: 2px solid #e3e8ef;
    padding: 20px 13px 20px;
  }
  label + .MuiInput-formControl {
    margin-right: 15px;
    margin-left: 11px;
    font-size: 22px;
}
.MuiInput-underline:before {
  border-bottom: none;
}
.market-fixed{
    display: flex;
    justify-content: flex-end;
    color: white;
    font-size: 18px;
    margin-bottom: 2rem;
}
.market{
  margin-right: 3rem;
}
.rater, .first-cont, .error-msg, .msg{
  display: flex;
  justify-content: center
}
.first-cont-sub{
  background: #2a2b37;
  padding-bottom: 3rem;
  margin-top: 3rem;
}  
.send-input, .send-select, .get-input, .get-select{
  background: white;
} 
.error-msg{
  background-color: #ff4757;
  padding: 10px;
  border-radius: 10px;
}
`;
export default DefaultStyle;