//nav style
import { css } from "styled-components";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  background-color: rgb(27, 33, 48);
  position: fixed;
  top: 0px;
  width: 100px;
  height: 100vh;
  z-index: 10;
  align-items: center;

  .search {
    font-size: 43px;
    color: #d8d8d8;
    cursor: pointer;
  }

  .chat {
    width: 31px;
    height: 31px;
    color: #d8d8d8;
    margin-top: 3px;
    cursor: pointer;
  }

  .bell {
    width: 35px;
    height: 35px;
    color: #d8d8d8;
    margin-top: 3px;
    cursor: pointer;
  }

  .Person {
    width: 35px;
    height: 35px;
    color: #d8d8d8;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const NavLogoImage = styled.img`
  width: 150px;
  &:hover {
    opacity: 0.7;
  }
`;

export const NavIcon = styled.div`
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    background-color: #34446d;
    /* box-shadow: 7px 3px 3px white; */
    /* opacity: 0.3; */

    svg {
      color: white;
    }
  }

  p {
    font-size: x-small;
    margin-top: 10px;
  }
`;

//user 프로필

export const UserProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Profile = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  display: flex;
  position: relative;
  /* border: 1px solid white; */
  border-radius: 30px;
  margin-top: 170px;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const NoticeWrap = styled.div``;
