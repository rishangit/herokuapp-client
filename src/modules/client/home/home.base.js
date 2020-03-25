const HomeBase = props => {
  const bookOnClick = event => {
    props.history.push("/bookNumber");
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
      label: "Book",
      onClick: bookOnClick
    }
  };

  return { elementSchema };
};

export default HomeBase;
