import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Img,
} from "@react-email/components";

interface ContactConfirmationProps {
  name: string;
}

export default function ReserverenConfirmation({
  name,
}: ContactConfirmationProps) {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Section style={headerStyle}>
          <Container>
            <Img
              src="https://sushibysugi.nl/images/logos/logo-sushi-by-sugi.png"
              alt="sushibysugi logo"
            />
          </Container>
        </Section>

        <Container style={contentStyle}>
          <Text style={textStyle}>Beste {name},</Text>
          <Text style={textStyle}>
            Bedankt voor je bericht. We hebben je aanvraag ontvangen en nemen zo
            spoedig mogelijk contact met je op.
          </Text>
        </Container>

        <Section style={footerStyle}>
          <Container>
            <Text
              style={{
                ...textStyle,
                textAlign: "center",
                margin: 0,
                color: "#ffffff",
              }}
            >
              © 2025 Sushi by Sugi
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

const bodyStyle = {
  margin: "0",
};

const headerStyle = {
  backgroundColor: "#181820",
  color: "#ffffff",
  padding: "20px 0",
};

const contentStyle = {
  padding: "32px 0",
  maxWidth: "600px",
};

const textStyle = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#333",
};

const footerStyle = {
  backgroundColor: "#181820",
  padding: "20px 0",
  color: "#ffffff",
};
