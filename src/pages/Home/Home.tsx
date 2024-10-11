import Button from '../../components/Button/Button';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.first_block}>
        <div>
          <h1>Your personal mood analyzer</h1>
          <p className={classes.description}>
            This site can help you monitor your mood level by analyzing your messages via AI and NLP.
          </p>
          <Button label="Try me out!" onClick={() => alert('Try me out button clicked!')} color="blue" size="large" />
        </div>
        <img src="" alt="main photo" />
      </div>
      <div className={classes.swipeInfo}>Swipe for more information.</div>
      <blockquote>"Life becomes easier when you learn to accept an apology you never got."</blockquote>
    </div>
  );
};

export default Home;
