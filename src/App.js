import './scss/index.scss';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Title } from './components/Title';
import { SelectSend } from './components/SelectSend';
import { Steps } from './components/Steps';
import { ReCall } from './components/ReCall';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Title text={'Пользуйтесь лучшими сервисами вместе с нами'} />
      <SelectSend />
      <Title text={'15 минут и рассылка готова'} />
      <Steps />
      <Title text={'Отзывы наших пользователей'} />
      <ReCall />
    </div>
  );
}

export default App;
