import React from "react"
import styled from "styled-components"
import Emoji from "./Emoji"

import Link from "./Link"

const meetups = [
  {
    title: "Bokky's Ethereum Workshop",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/BokkyPooBahs-Ethereum-Workshop/",
  },
  {
    title: "ETHSydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/ethsydney/",
  },
  {
    title: "Web3 Sydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/web3sydney/",
  },
  {
    title: "Ethereum Vienna",
    emoji: ":austria:",
    location: "Vienna",
    link: "https://www.meetup.com/Ethereum-Vienna/",
  },
  {
    title: "Ethereum Buenos Aires",
    emoji: ":argentina:",
    location: "Buenos Aires",
    link: "https://www.meetup.com/ethereum-ba/",
  },
  {
    title: "BUIDL Tegucigalpa",
    emoji: ":honduras:",
    location: "Tegucigalpa",
    link: "https://www.meetup.com/buidl-tegucigalpa/",
  },
  {
    title: "Ethereum Developers São Paulo",
    emoji: ":brazil:",
    location: "São Paulo",
    link: "https://www.meetup.com/Ethereum-Developers-Sao-Paulo/",
  },
  {
    title: "Ethereum Developers",
    emoji: ":canada:",
    location: "Toronto",
    link: "https://www.meetup.com/Ethereum-Developers/",
  },
  {
    title: "Vancouver Ethereum & Blockchain 2.0 Meetup",
    emoji: ":canada:",
    location: "Vancouver",
    link: "https://www.meetup.com/Vancouver-Ethereum-Meetup/",
  },
  {
    title: "Ethereum Paris",
    emoji: ":fr:",
    location: "Paris",
    link: "https://www.meetup.com/Ethereum-Paris/",
  },
  {
    title: "Ethereum Toulouse",
    emoji: ":fr:",
    location: "Toulouse",
    link: "https://www.meetup.com/Ethereum-Toulouse/",
  },
  {
    title: "Berlin Ethereum Meetup",
    emoji: ":de:",
    location: "Berlin",
    link: "https://www.meetup.com/Berlin-Ethereum-Meetup/",
  },
  {
    title: "Ethereum Hong Kong",
    emoji: ":hong_kong:",
    location: "Hong Kong",
    link: "https://www.meetup.com/Ethereum-Hong-Kong/",
  },
  {
    title: "Ethereum Indonesia",
    emoji: ":indonesia:",
    location: "Jakarta",
    link: "https://www.meetup.com/Ethereum-indonesia/",
  },
  {
    title: "Italian Ethereum Meetup",
    emoji: ":it:",
    location: "Milan",
    link: "https://www.meetup.com/it-IT/Italian-Ethereum-Meetup/",
  },
  {
    title: "Ethereum Italia Hub (Telegram Group)",
    emoji: ":it:",
    location: "Remote",
    link: "https://t.me/ethereumitalia",
  },
  {
    title: "Ethereum Japan",
    emoji: ":jp:",
    location: "Multiple Locations",
    link: "https://ethereumjapan.connpass.com/",
  },
  {
    title: "Ethereum Malaysia",
    emoji: ":malaysia:",
    location: "Kuala Lumpur",
    link: "https://www.meetup.com/ETHMALAYSIA/",
  },
  {
    title: "Ethereum DEV NL",
    emoji: ":netherlands:",
    location: "Amsterdam",
    link: "https://www.meetup.com/Ethereum-DEV-NL/",
  },
  {
    title: "Lagos Ethereum Meetup",
    emoji: ":nigeria:",
    location: "Lagos",
    link: "https://www.meetup.com/Lagos-Ethereum-Meetup/",
  },
  {
    title: "Ethereum Singapore",
    emoji: ":singapore:",
    location: "Singapore",
    link: "https://www.meetup.com/Ethereum-Singapore/",
  },
  {
    title: "Cape Town Ethereum Meetup",
    emoji: ":south_africa:",
    location: "Cape Town",
    link: "https://www.meetup.com/Cape-Town-Ethereum-Meetup/",
  },
  {
    title: "Johannesburg Ethereum Meetup",
    emoji: ":south_africa:",
    location: "Johannesburg",
    link: "https://www.meetup.com/Johannesburg-Ethereum-Meetup/",
  },
  {
    title: "Jeju Blockchain Meetup",
    emoji: ":kr:",
    location: "Jeju",
    link: "https://www.meetup.com/Jeju-Blockchain-Meetup",
  },
  {
    title: "Seoul Ethereum Meetup",
    emoji: ":kr:",
    location: "Seoul",
    link: "https://www.meetup.com/Seoul-Ethereum-Meetup/",
  },
  {
    title: "BCN Ethereum Dev",
    emoji: ":es:",
    location: "Barcelona",
    link: "https://www.meetup.com/ethereumbcn",
  },
  {
    title: "Ethereum Spain",
    emoji: ":es:",
    location: "Madrid",
    link: "https://www.meetup.com/Ethereum-Spain/",
  },
  {
    title: "Ethereum Madrid",
    emoji: ":es:",
    location: "Madrid",
    link: "https://ethereummadrid.com/",
  },
  {
    title: "Geneva DevChain",
    emoji: ":switzerland:",
    location: "Geneva",
    link: "https://www.meetup.com/devchain-geneva/",
  },
  {
    title: "Ethereum London",
    emoji: ":gb:",
    location: "London",
    link: "https://www.meetup.com/ethereum/",
  },
  {
    title: "Austin Ethereum Meetup",
    emoji: ":us:",
    location: "Austin",
    link: "https://www.meetup.com/Austin-Ethereum-Meetup/",
  },
  {
    title: "Ethereum Columbus",
    emoji: ":us:",
    location: "Columbus",
    link: "https://www.meetup.com/eth-columbus/",
  },
  {
    title: "Ethereum Denver",
    emoji: ":us:",
    location: "Denver",
    link: "https://www.meetup.com/Ethereum-Denver/",
  },
  {
    title: "Ethereum Los Angeles",
    emoji: ":us:",
    location: "Los Angeles",
    link: "https://www.meetup.com/Ethereum-Los-Angeles/",
  },
  {
    title: "Ethereum Community NYC",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/ConsenSys-Ethereum-Meetup/",
  },
  {
    title: "NYC Ethereum",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/NYC_Ethereum/",
  },
  {
    title: "Blockchain and Brews (San Diego)",
    emoji: ":us:",
    location: "San Diego",
    link: "https://www.meetup.com/Blockchain-and-Brews/",
  },
  {
    title: "SF Ethereum Developers",
    emoji: ":us:",
    location: "SF/ Bay Area",
    link: "https://www.meetup.com/SF-Ethereum-Developers/",
  },
  {
    title: "Silicon Valley Ethereum Meetup",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF-Ethereum-Developers/",
  },
  {
    title: "SF Ethereum",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF_Ethereum/",
  },
  {
    title: "Chainlink San Francisco",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/Chainlink-San-Francisco/",
  },
  {
    title: "Seattle",
    emoji: ":us:",
    location: "Seattle",
    link: "https://www.meetup.com/Seattle-Ethereum-Meetup/",
  },
  {
    title: "Chiang Mai Dapps",
    emoji: ":thailand:",
    location: "Chiang Mai",
    link: "https://www.facebook.com/groups/219236462407862/",
  },
]

const Table = styled.div`
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemNumber = styled.div`
  margin-right: 1rem;
  opacity: 0.4;
`
const ItemTitle = styled.div``
const ItemDesc = styled.p`
  margin-bottom: 0;
  opacity: 0.6;
`

const RightContainer = styled.div`
  display: flex;
  align-items: right;
  align-content: flex-start;
  flex: 1 1 25%;
  margin-right: 1rem;
  flex-wrap: wrap;
`
const LeftContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  margin-right: 1rem;
`
// TODO create generalized CardList / TableCard
// TODO prop if ordered list or unordered
const MeetupList = () => (
  <Table>
    {meetups.map((meetup, idx) => (
      <Item key={idx} to={meetup.link}>
        <LeftContainer>
          <ItemNumber>{idx + 1}</ItemNumber>
          <ItemTitle>{meetup.title}</ItemTitle>
        </LeftContainer>
        <RightContainer>
          <Emoji text={meetup.emoji} size={1} mr={`0.5em`} />
          <ItemDesc>{meetup.location}</ItemDesc>
        </RightContainer>
      </Item>
    ))}
  </Table>
)

export default MeetupList
