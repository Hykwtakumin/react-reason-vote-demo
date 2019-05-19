import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { Reason, ReasonVote } from "./components/ReasonVote";

import "./styles.css";

function App() {
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);

  const handleUpVote = () => {
    setUpVotes(upVotes + 1);
  };

  const handleDownVote = (reason: Reason) => {};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReasonVote
        reasonList={[]}
        upVoteValue={"👍Up!"}
        downVoteValue={"👎Down!"}
        upVoteCounts={upVotes}
        downVoteCounts={downVotes}
        onUpVote={handleUpVote}
        onDownVote={handleDownVote}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
