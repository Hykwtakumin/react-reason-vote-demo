import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";

export type Reason = {
  type: string;
  value: string;
};

export interface ReasonVoteInterface {
  reasonList: Reason[];
  upVoteValue: string;
  downVoteValue: string;
  upVoteCounts: number;
  downVoteCounts: number;
  onUpVote: () => void;
  onDownVote: (reason: Reason) => void;
}

export interface ReasonVoteProps {
  reasonList: Reason[];
  upVoteValue: string;
  downVoteValue: string;
  upVoteCounts: number;
  downVoteCounts: number;
  onUpVote: () => void;
  onDownVote: () => void;
}

export const ReasonVote: React.FC<ReasonVoteInterface> = (
  props: ReasonVoteProps
) => {
  const {
    reasonList,
    upVoteValue,
    downVoteValue,
    upVoteCounts,
    downVoteCounts,
    onUpVote,
    onDownVote
  } = props;

  const [isDown, setIsDown] = useState(false);

  const handleDownVote = () => {
    setIsDown(true);
  };

  const handleReasonInput = () => {};

  return (
    <React.Fragment>
      <div className="reasonVoteContainer">
        <div className="reasonVoteItem">
          <input
            type="button"
            value={`${upVoteValue}  ${upVoteCounts}`}
            className="reasonVoteButton"
            onClick={e => {
              onUpVote();
            }}
          />
        </div>
        <div className="reasonVoteItem">
          <input
            type="button"
            value={`${downVoteValue}  ${downVoteCounts}`}
            className="reasonVoteButton"
            onClick={handleDownVote}
          />
          {isDown ? (
            <div className="reasonVoteList">
              {reasonList.map((reason: Reason, index: number) => {
                return <div key={index}>{reason.value}</div>;
              })}
              <input />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
