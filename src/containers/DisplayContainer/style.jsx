import styled from 'styled-components';

const DefaultStyle = styled.div`
  .send-receive{
      display: flex;
      justify-content: center;
      margin-top:3rem;
      color: white;
      padding: 2rem 0rem 1rem 0rem;
      text-align: center

}
.sec-cont{
    background: #23222e;
    padding-bottom: 1rem;
    background-image: -webkit-gradient(linear,left top,right top,from(#2e2f3d),color-stop(50%,#23222d),color-stop(75%,#23222d),to(#2e2f3d));
}
.right-arrow{
    margin-top:2rem;
}
.powered-by{
    text-align:center;
    color: rgba(255,255,255,.6);
    letter-spacing: .0625em;
    font-size: 16px;
}
.mon-dig , .rec-mon-dig{
    font-size: 3rem;
    margin: 0;
}
.send-txt, .rec-txt{
    margin-bottom: 8px;
    font-size: 20px;
}
.rec-sym, .send-sym{
    font-size: 21px;
    position: absolute;
    margin-left: 10px;
}  
`;
export default DefaultStyle;