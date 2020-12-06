import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";
import cx from "classnames";

const QuestionCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLike, setIsLike] = useState(0);

  const { ques, ans } = props;

  const toggle = () => setIsOpen((previous) => !previous);
  const handleLink = (value) => {
    setIsLike((previous) => (previous === value ? 0 : value));
  };

  return (
    <div className="mb-2">
      <Button
        onClick={toggle}
        color="primary"
        className="w-100 d-flex text-left"
      >
        <span className="flex-grow-1 pr-1">{ques}</span>
        <span>
          <i className={cx("fas fa-angle-down", { isOpen })} />
        </span>
      </Button>
      <Collapse isOpen={isOpen}>
        <div className="content">
          {ans}
          <div className="isUseful">
            <p>Did you find it useful</p>
            <Button
              color="primary"
              outline={isLike !== 1}
              onClick={() => handleLink(1)}
            >
              <i className="far fa-thumbs-up"></i>
            </Button>
            <Button
              color="primary"
              outline={isLike !== 2}
              onClick={() => handleLink(2)}
            >
              <i className="far fa-thumbs-down"></i>
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
const CollapseFaq = (props) => {
  const { questions = [] } = props;
  return (
    <div className="collapse-faq">
      {questions &&
        questions.length > 0 &&
        questions.map((data, index) => {
          return index < 5 ? <QuestionCard key={index} {...data} /> : null;
        })}
    </div>
  );
};

export default CollapseFaq;
