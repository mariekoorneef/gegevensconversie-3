import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";

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
          <Text> Ruud Koorneef</Text>
          <Text>+31 6 20403067</Text>
          <Text>r.koorneef@gegevensconversie.nl</Text>
          {/* <Button onClick={() => window.location = 'mailto:r.koorneef@gegevensconversie.nl'}>r.koorneef@gegevensconversie.nl</Button> */}
          <Button onClick={showInMapClicked}>Dalkruiddreef 14, Nuenen</Button>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </Stack>
  );
}
