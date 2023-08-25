import {
  Heading,
  Card,
  CardBody,
  CardHeader,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { MdMail, MdLocationPin, MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const cards = [
  {
    header: "Wat is het?",
    text: "Gegevensconversie is het overzetten van gegevens van een bronsysteem (source) naar een doelsysteem (target). Voorbeelden van bronsystemen zijn legacy databases, doelsystemen zijn nieuwe databases (on-premise als in de cloud), en voorbeelden van te converteren gegevens zijn klantgegevens, aankoophistorie, betaalgeschiedenis, etc.",
  },
  {
    header: "Waarom is het relevant?",
    text: "Gegevensconversie is een cruciaal onderdeel van overzetten van een administratie tussen databases. Diverse oorzaken kunnen hieraan ten grondslag liggen zoals vernieuwing van de IT infrastructuur, implementatie van nieuwe cloud functionaliteiten of een fusie of splitsing van bedrijf(sonderdelen).",
  },
  {
    header: "Hoe werkt het?",
    text: "Gegevensconversie bevat twee uitdagingen: het efficiënt overzetten van de data en de kwaliteit van de data.",
  },
];

const your_lat = 51.468697942403765;
const your_lng = 5.5426173711640185;
const showInMapClicked = () => {
  window.open("https://maps.google.com?q=" + your_lat + "," + your_lng);
};

export function SimpleCards() {
  return (
    <Stack direction="column" alignItems="center" overflow="hidden" mt="6">
      {cards.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <Heading size="md">{item.header}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{item.text}</Text>
          </CardBody>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <Heading size="md">Contact gegevens</Heading>
        </CardHeader>
        <CardBody>
          <Stack direction="column">
            <Text textAlign="center"> Ruud Koorneef</Text>
            <Button leftIcon={<MdPhone />}>+31 6 20403067</Button>
            <Button
              onClick={() =>
                (window.location.href =
                  "mailto:r.koorneef@gegevensconversie.nl")
              }
              leftIcon={<MdMail />}
            >
              r.koorneef@gegevensconversie.nl
            </Button>
            <Button onClick={showInMapClicked} leftIcon={<MdLocationPin />}>
              Dalkruiddreef 14, Nuenen
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://nl.linkedin.com/in/datamigration";
              }}
              leftIcon={<FaLinkedin />}
            >
              LinkedIn
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
}
