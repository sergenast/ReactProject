import './App.css';
import './components/WordCard.css';
import './components/Buttons.css';
import './components/Table.css';
import WordCard from './components/WordCard';
import Buttons from './components/Buttons';
import Table from './components/Table';

const words = [
  {"word": "Solitude", "translation": "Уединение", "example": "We enjoyed the beauty and solitude"},
  {"word": "Beverage", "translation": "Напиток", "example": "Beverages are complimentary on this flight"},
  {"word": "Amass", "translation": "Копить", "example": "How did you amass such a fortune?"},
  {"word": "Foresee", "translation": "Предсказать", "example": "No one can foresee the future"},
  {"word": "Drizzle", "translation": "Моросить", "example": "It often drizzles at this time of year"}
]

function App() {
  return (
    <div className="App">
      <WordCard word={words[1].word} translation={words[1].translation}></WordCard>
      <Buttons leftButton="Знал" rightButton="Не знал"></Buttons>
      <Table engWord={words[1].word} transWord={words[1].translation} example={words[1].example}></Table>
    </div>
  );
}

export default App;
