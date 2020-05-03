const HomeBase = props => {

  
  const bookOnClick = event => {
    props.history.push("/channelling");
  };

  const watchOnClick = event => {
    props.history.push("/watch");
  };
  
  const elementSchema = {
    btnWatch: {
      label: "Watch",
      onClick: watchOnClick
    },
    btnBook: {
      label: "Channelling",
      onClick: bookOnClick
    }
  };

  return { elementSchema };
};

export default HomeBase;
