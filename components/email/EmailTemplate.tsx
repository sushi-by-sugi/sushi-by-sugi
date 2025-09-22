import { Html, render } from "@react-email/components";

interface ReservationEmailProps {
  name: string;
  phone: string;
  email: string;
  message?: string;
  date: string;
  serviceType?: string;
}

export async function getEmailHtml({
  name,
  email,
  phone,
  message,
  date,
  serviceType,
}: ReservationEmailProps) {
  const emailHtml = await render(
    <EmailTemplate
      name={name}
      phone={phone}
      email={email}
      message={message}
      date={date}
      serviceType={serviceType}
    />,
  );
  return emailHtml;
}

export default function EmailTemplate({
  name,
  email,
  phone,
  message,
  date,
  serviceType,
}: ReservationEmailProps) {
  return (
    <Html lang="nl" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Nieuw bericht van {email}</h1>
      </header>
      <section style={styles.content}>
        <p style={styles.intro}>
          U hebt een nieuw bericht ontvangen via het reserveringsformulier op de
          website.
        </p>
        <div style={styles.detail}>
          <h2 style={styles.subheading}>Gegevens Afzender:</h2>
          <p>
            <strong>Naam: </strong>
            {name}
          </p>
          <p>
            <strong>E-mailadres:</strong>{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <strong>Telefoonnummer:</strong> {phone}
          </p>
        </div>
        <p>
          <strong>Datum aanvraag:</strong>{" "}
          {new Intl.DateTimeFormat("nl-NL").format(new Date(date))}
        </p>
        <p>
          <strong>Dienst:</strong> {serviceType}
        </p>
        <div style={styles.detail}>
          <h2 style={styles.subheading}>Bericht:</h2>
          <p>{message}</p>
        </div>
      </section>
    </Html>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#4a90e2",
    padding: "10px 20px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    color: "white",
  },
  heading: {
    margin: 0,
    fontSize: "1.5em",
  },
  content: {
    padding: "20px",
  },
  intro: {
    fontSize: "1em",
    marginBottom: "20px",
  },
  detail: {
    marginBottom: "20px",
  },
  subheading: {
    margin: "0 0 10px 0",
    fontSize: "1.2em",
    borderBottom: "1px solid #ddd",
    paddingBottom: "5px",
  },
};
