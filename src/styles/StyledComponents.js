import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// App.jsx에서 쓰이는 스타일
export const Container = styled.div`
  padding: 20px;
  text-align: center;
  h1 {
    margin: 0 0 10px 0;
  }
`;
export const desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: 5px;
  padding-left: 15px;
`;
export const Main = styled.main`
  padding: 20px;
`;

// Face_Camera_Home 에서 쓰이는 스타일
export const Face_Camera_Home = styled.div`
  padding: 20px;
  text-align: center;
  h2 {
    text-align: start;
    padding-left: 10px;
  }
  h3 {
    margin: 0;
  }
  #cont_box {
    display: flex;
    flex-direction: row;
    padding: 0 10px;
  }
  #left_box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 50%;
  }
  #camera_cover {
    height: 70%;
    object-fit: cover;
  }
  #right_box {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  #face_album {
    display: flex;
    flex-direction: row;
    height: 50%;
  }
  #album_cover {
    width: 50%;
    height: 80%;
    object-fit: cover;
  }
  #face_calendar {
    display: flex;
    flex-direction: row;
    background-color: #FFF6E4;
    padding: 30px;
    border-radius: 8px;
  }
  #icon_box {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  img {
    height: 50px;
  }
`;

// PhotoAlbum.jsx에서 쓰이는 스타일
export const Album = styled.div`
  padding: 20px;
  text-align: center;

  #title_bar {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background-color: #F3F3F3;
    border-radius: 10px;
    padding: 1em 1.5em;
    h2 {
      color: #000;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin: 0;
    }
  }
  #album_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
  }
  .example {
    width: 406px;
    height: 238px;
    flex-shrink: 0;
    background: #D9D9D9;
  }
  #photo_warpper {
    display: flex;
    gap: 10px;
  }
`;

export const Iner_Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Header에서 쓰이는 스타일
export const HeaderContainer = styled.header`
  /* $background-color: {({ isNotHome }) => (isNotHome ? 'black' : '#FFC42B')}; */
  /* $color: {({ isNotHome }) => (isNotHome ? '#FFC42B' : 'black')}; */
  background: linear-gradient(90deg, #FFC42B 0%, #FFD25F 100%);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 10px;
  height: 60px;

  button{
    background: transparent;
    border: none;
    color: white;
    font-size: 20px;
  }

  button:hover{
    background: #FAB400;
    border-radius: 10px;
  }
`;

export const Blink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  font-family: Inter;
  color: white;
  border-radius: 10px;
  padding: 0.3em;

  &:hover {
    background-color: #ffd966;
  }

  &.active {
    background-color: #FAB400;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  #Head_Left {
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 0 1em;
    border-right: 2px solid white;
  }

  #Head_Right {
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 0 1em;
  }

  .left_box {
    display: flex;
    gap: 1em;
    margin: 0 6px;
  }
  .right_box {
    display: flex;
    gap: 1em;
    margin: 0 6px;
  }
`;

// FacialStretch.jsx 팝업 스타일 추가
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CameraWrapper =styled.div`
  width: 100%;
  height: 100%;
`;

// Section, Image 스타일
export const Section = styled.section`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`;

export const Image = styled.img`
  width: 70%;
  border-radius: 8px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const GuideText = styled.div`
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 20px;
  line-height: 1.5;
  h2 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 20px;
`;

export const EmotionButton = styled.button`
  padding: 10px 40px;
  font-size: 1.1em;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.selected ? '#FFC700' : '#7A7A7A')};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 20px; // 버튼 사이의 간격을 위한 margin 추가


  &:hover {
    background-color: #FFC700;
    color: white;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 텍스트와 체크박스를 수평으로 가운데 정렬 */

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  p {
    margin: 0; /* 텍스트의 여백을 제거 */
    text-align: center; /* 텍스트를 수평으로 가운데 정렬 */
  }
`;

export const PracticeNum = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  backgroundColor: '#7A7A7A';
  padding: 10px 20px;
  margin: 0 20px;
  color: 'white';
  border: 'none';
  borderRadius: '5px';
  cursor: 'pointer';
  fontSize: '1.3em';
  outline: 'none';
`
