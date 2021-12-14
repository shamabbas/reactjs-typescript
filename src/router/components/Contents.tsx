import { Route } from "react-router-dom";
import { Home } from "../../pages";

const Content = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
};

export default Content;
