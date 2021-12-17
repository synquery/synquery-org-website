import React, { useState } from "react"
import styled from "styled-components"
import { ButtonSecondary } from "./SharedStyledComponents"
import { trackCustomEvent } from "../utils/matomo"
import Link from "./Link"

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Title = styled.h3`
  margin-top: 0rem;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0.5rem;
`

const ButtonContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 1rem;
  }
`

const FeedbackCard = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [isHelpful, setIsHelpful] = useState(false)

  const title = isHelpful ? (
    <>Thanks for your feedback!</>
  ) : (
    <>
      Join our public <Link to="https://discord.gg/rZz26QWfCg">Discord</Link>{" "}
      and get the answer you're looking for.
    </>
  )

  const handleClick = (isHelpful) => {
    trackCustomEvent({
      eventCategory: `Page is helpful feedback`,
      eventAction: `Clicked`,
      eventName: isHelpful,
    })
    setIsHelpful(isHelpful)
    setFeedbackSubmitted(true)
  }
  return (
    <Card>
      <Content>
        <Title>
          {feedbackSubmitted
            ? title
            : "Did this page help answer your question?"}
        </Title>
        {!feedbackSubmitted && (
          <ButtonContainer>
            <ButtonSecondary onClick={() => handleClick(true)}>
              Yes
            </ButtonSecondary>
            <ButtonSecondary onClick={() => handleClick(false)} ml={`0.5rem`}>
              No
            </ButtonSecondary>
          </ButtonContainer>
        )}
      </Content>
    </Card>
  )
}

export default FeedbackCard
