import React from "react";
import { useHistory } from "react-router-dom";
import { cardService } from "./components/APIs/Services/Cards";

function Home() {
  const { push } = useHistory();
  // const [state] = React.useState(15);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    cardService.getAllPosts().then(({ data }) => setPosts(data));
  }, []);

  const getComments = React.useCallback(
    (id) => {
      push("/comments", id);
    },
    [push]
  );

  return (
    <div className="container">
      <div className="row">
        {posts.map(({ id, title, body }) => (
          <div className="col-md-4" key={id}>
            <div className="cards">
              <h1>{title}</h1>
              <p> {body} </p>
              <button onClick={() => getComments(id)}>Get comments</button>
            </div>
          </div>
        ))}
      </div>
      <button>Go to the About page</button>
    </div>
  );
}

export default Home;
