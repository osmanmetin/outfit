import styled from "styled-components";

interface ImageWrapperProps {
  isLoading?: boolean; // isLoading prop'unun tipi
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    padding: 16px;
    margin: 12px;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    position: relative;
    filter: ${({ isLoading }) => (isLoading ? 'blur(1px)' : 'none')};
  `;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
export const Image = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
`

export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 500px;
flex: 1;
flex-direction: column;
`

export const ActionBar = styled.div`
display: flex;
height: 42px;
width: 675px;
justify-content: space-between;
align-items: center;
border-radius: 16px;
padding: 8px;
background-color: '#FFFAFA';
box-shadow: rgba(172, 1, 1, 0.2) 0px 60px 40px -7px;
`

export const Body = styled.div`
display: flex;
`
export const Combination = styled.div`
display: flex;
flex-direction: column;
margin-top: 160px;
justify-content: center;
grid-gap: 12px;
align-items: center;
`

export const TopWear = styled.div`
display: flex;
height:100px;
grid-gap: 12px;
`

export const Shirt = styled.div`
display: flex;
width: 100px ;
height:100px;
justify-content: center;
align-items: center;
`

export const Pant = styled.div`
display: flex;
width: 100px ;
height:200px;
justify-content: center;
align-items: center;
`

export const Shoes = styled.div`
display: flex;
width: 100px ;
height:100px;
justify-content: center;
align-items: center;
`