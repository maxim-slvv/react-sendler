import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import chevronDown from '../../../assets/img/home/chevron-down.svg';
import './style.scss';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className="chevron-down" src={chevronDown} alt="Chevron Down" />
      </>
    }
  />
);

const faq = [
  {
    title: 'Что такое Email рассылка?',
    text: ' Это письмо, которое маркетологи отправляют на свой список рассылки. Email рассылка — это прекрасный инструмент для взращивания лидов и продвижения ваших продуктов и услуг.',
  },
  {
    title: 'Какие преимущества Email рассылки?',
    text: ' Email маркетинг лидирует в интернет маркетинге по рентабельности инвестиций, ведь он приносит до 40$ прибыли на каждый потраченный доллар. Кроме того, количество активных пользователей электронной почты достигает до невероятных 3,9 миллиардов.',
  },
  {
    title: 'Как выбрать лучшее время для отправки Email рассылок?',
    text: ' Это зависит от привычек вашей аудитории, так что универсального рецепта для повышения вовлеченности не существует. Однако, исследование, проведенное SendPulse, показывает, что лучший день для отправки это пятница, а лучшее время суток — с 9:00 до 11:00.',
  },
  {
    title: 'Какие средние показатели удачной Email рассылки?',
    text: ' Важнейшие показатели email маркетинга, такое как open rate, кликабельность и количество отписавшихся зависят от ниши, времени суток, темы письма и пр. В среднем, 20% подписчиков открывают письмо и около 5% переходят по ссылке.',
  },
];

export const Accordeon = () => {
  return (
    <div className="App">
      <Accordion transition transitionTimeout={200}>
        {faq.map((e) => {
          return (
            <AccordionItem header={e.title}>
              {/* этот атрибут был выше, удалил его initialEntered */}
              {e.text}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
