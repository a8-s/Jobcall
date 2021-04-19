import styled from "styled-components";

export const StyledResult = styled.section.attrs({
    className:"team section-bg"
})`
.member {
  position: relative;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  background: #fff;
  transition: 0.5s;
}

.member .pic {
  overflow: hidden;
  width: 180px;
  border-radius: 50%;
}

.member .pic img {
  transition: ease-in-out 0.3s;
}

 .member:hover {
  transform: translateY(-10px);
}

 .member .member-info {
  padding-left: 30px;
}

 .member h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #37517e;
}

 .member span {
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
}

 .member span::after {
  content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #cbd6e9;
  bottom: 0;
  left: 0;
}

 .member p {
  margin: 10px 0 0 0;
  font-size: 14px;
}

 .member .social {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

 .member .social a {
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 32px;
  height: 32px;
  background: #eff2f8;
}

 .member .social a i {
  color: #37517e;
  font-size: 16px;
  margin: 0 2px;
}

 .member .social a:hover {
  background: #47b2e4;
}

 .member .social a:hover i {
  color: #fff;
}

 .member .social a + a {
  margin-left: 8px;
}
`