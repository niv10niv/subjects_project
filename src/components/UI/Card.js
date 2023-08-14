import useLocalStorage from 'use-local-storage';

const Card = (props) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div className={props.className || 'card'} data-theme={theme}>
      {props.children}
    </div>
  );
};

export default Card;
