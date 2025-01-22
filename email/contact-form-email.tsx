import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string,
  senderEmail: string
}

export default function ContactFormEmail({message,senderEmail} : ContactFormEmailProps) {
  return (
    <Html>
      <Head/>
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Section className="mx-2 my-2 bg-white p-2">
              <Heading>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr/>
              <Text>The sender's email is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
