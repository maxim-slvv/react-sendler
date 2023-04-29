import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      тут будет главная
      <br />
      <br />
      <Link to={'/dashboard'}>
        <strong>Перейти в личный кабинет ^</strong>
      </Link>
      {/* <Link to={'/dashboard/messages/'}>
        <strong>Перейти в ыыыы ^</strong>
      </Link> */}
    </div>
  );
};
export default Home;
