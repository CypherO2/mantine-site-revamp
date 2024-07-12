import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
  Container,
} from "@mantine/core";
import { DoubleHeader } from "./components/DoubleHeader/DoubleHeader";
import { FooterSocial } from "./components/FooterSocial/FooterSocial";
import "@mantine/core/styles.css";

const myColor: MantineColorsTuple = [
  "#faedfd",
  "#f1d6f6",
  "#e3a9ee",
  "#d67be6",
  "#cb54e1",
  "#c43ddd",
  "#c131dd",
  "#a925c3",
  "#971eae",
  "#841599",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <DoubleHeader />
        <Container></Container>
        <FooterSocial />
      </MantineProvider>
    </>
  );
}

export default App;
