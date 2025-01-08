import "./App.css";
import "./index.css";
import CardGrid, {
  CardData,
} from "./components/CardGridComponent/CardGridComponent";

function App() {
  const projects: CardData[] = [
    {
      id: "1",
      title: "Forræder",
      description: "Spill Forræder med vennegjengen!",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://traitor.party",
    },
    {
      id: "2",
      title: "Bday Challenge",
      description: "Hvem chugger en bursdagskombo raskest?",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://bday.no",
    },
    {
      id: "3",
      title: "Amazing Race Wien",
      description: "Opplev byen på en ny måte",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://wien.boysconsulting.com/",
    },
    {
      id: "4",
      title: "Party Games",
      description: "Sprit opp festen med Beat4Beat og Jeopardy",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://party.boysconsulting.com",
    },
    {
      id: "5",
      title: "Sjakk AI",
      description: "Er du bedre i sjakk enn vi er til å progge AI?",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://bday.no",
    },
    {
      id: "6",
      title: "Boys Consulting surprise",
      description: "Kommer i august 2025...",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://bday.no",
    },
    {
      id: "7",
      title: "Cygnss Toolbox",
      description: "Masse snacks med CYGNSS satelittdata",
      imageUrl: "https://picsum.photos/256?grayscale",
      url: "https://bday.no",
    },
  ];

  return (
    <>
      <h1>Boyz Consulting</h1>
      <CardGrid cards={projects} />
    </>
  );
}

export default App;
