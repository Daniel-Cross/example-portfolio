import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.jpg";
import { Title, Subtitle } from "./styles";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  margin-top: 50px;
`;

const ProfilePicture = styled.img`
  border-radius: 100%;

  height: 250px;
  width: 250px;
`;

const About = styled.p`
  text-align: center;
  padding: 10px 20px;
  width: 50%;
  border-radius: 11px;
  background-color: #fdfdfd;
`;

const Summary = () => {
  return (
    <SummaryContainer>
      <ProfilePicture src={avatar} alt="profile-image" />
      <Title>MY NAME</Title>
      <Subtitle>SOFTWARE ENGINEER</Subtitle>
      <About>
        I'm baby direct trade coloring book irony retro fanny pack trust fund
        cloud bread iceland DIY mumblecore +1 iPhone tattooed XOXO offal.
        Bitters keytar intelligentsia pork belly tumblr craft beer letterpress
        hot chicken skateboard poutine kickstarter chartreuse thundercats. Viral
        tumeric heirloom put a bird on it pickled irony shoreditch slow-carb
        humblebrag wayfarers readymade unicorn. Tattooed helvetica shoreditch
        adaptogen hashtag franzen selvage twee gentrify pour-over brooklyn +1
        forage. VHS flexitarian mixtape, food truck normcore ugh jianbing
        tumeric wolf pinterest aesthetic cloud bread lomo squid trust fund.
        Cloud bread try-hard quinoa, actually beard austin af tumeric
        flexitarian.
      </About>
    </SummaryContainer>
  );
};

export default Summary;
