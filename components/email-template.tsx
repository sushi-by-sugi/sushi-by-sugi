import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Section,
  Img,
} from "@react-email/components";

interface ReservationEmailProps {
  name: string;
  phone: string;
  email: string;
  message?: string;
  date?: string;
  serviceType?: string;
}

function renderRow(label: string, value?: string | number) {
  if (!value && value !== 0) return null;
  return (
    <tr>
      <td style={cellLabelStyle}>{label}</td>
      <td style={cellValueStyle}>{String(value)}</td>
    </tr>
  );
}

export default function EmailTemplate({
  name,
  phone,
  email,
  message,
  date,
  serviceType,
}: ReservationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={bodyStyle}>
        <Section style={headerStyle}></Section>

        <Container style={contentStyle}>
          <Text style={textStyle}>Beste Sushi by Sugi,</Text>
          <Text style={textStyle}>
            Een klant heeft het volgende ingevuld via het reserveer formulier:
          </Text>

          <table style={tableStyle} cellPadding={0} cellSpacing={0}>
            <tbody>
              {renderRow("Naam", name)}
              {renderRow("Telefoonnummer", phone)}
              {renderRow("E-mail", email)}
              {renderRow("Gewenste datum", date)}
              {renderRow("Type dienst", serviceType)}
              {renderRow("Bericht", message)}
            </tbody>
          </table>
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

export { EmailTemplate };

const bodyStyle: React.CSSProperties = {
  margin: "0",
  backgroundColor: "#ffffff",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#181820",
  color: "#ffffff",
  padding: "20px 0",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#181820",
  color: "#ffffff",
  padding: "20px 0",
};

const contentStyle: React.CSSProperties = {
  padding: "32px 24px",
  maxWidth: "600px",
  margin: "0 auto",
};

const textStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#333",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "16px",
  borderCollapse: "collapse",
};

const cellLabelStyle: React.CSSProperties = {
  width: "40%",
  padding: "10px 12px",
  fontWeight: 600,
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
  color: "#111827",
};

const cellValueStyle: React.CSSProperties = {
  width: "60%",
  padding: "10px 12px",
  borderBottom: "1px solid #e5e7eb",
  color: "#374151",
  whiteSpace: "pre-wrap",
};
