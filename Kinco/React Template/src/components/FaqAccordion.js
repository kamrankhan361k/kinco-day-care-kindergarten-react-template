import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FaqAccordion = () => {
  const [activeToggle, setActiveToggle] = useState("1st");
  const setToggle = (value) =>
      value === activeToggle ? setActiveToggle("") : setActiveToggle(value),
    setActive = (value) => (value === activeToggle ? "active" : "");
  return (
    <Accordion defaultActiveKey="1st">
      <div className="flat-accordion">
        <div className="flat-toggle ">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("1st")}
            eventKey="1st"
            className={`toggle-title ${setActive("1st")}`}
          >
            Designing Better Links For Websites And Emails Guideline
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="1st">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("2nd")}
            eventKey="2nd"
            className={`toggle-title ${setActive("2nd")}`}
          >
            Useful VS Code Extensions For Front-End Developers Tree-Shaking
            Reference Guide
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="2nd">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("3rd")}
            eventKey="3rd"
            className={`toggle-title ${setActive("3rd")}`}
          >
            A Guide To Newly Supported, Modern CSS Pseudo-Class Selectors
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="3rd">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("4th")}
            eventKey="4th"
            className={`toggle-title ${setActive("4th")}`}
          >
            Complete Guide To Incremental Static Regeneration (ISR) With Next.js
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="4th">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("5th")}
            eventKey="5th"
            className={`toggle-title ${setActive("5th")}`}
          >
            Deep Dive Into Eleventy Static Site Generator
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="5th">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
        <div className="flat-toggle">
          <Accordion.Toggle
            as={"h6"}
            onClick={() => setToggle("6th")}
            eventKey="6th"
            className={`toggle-title ${setActive("6th")}`}
          >
            Variables In The Hugo Static Site Generator
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="6th">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciun teque porro quisquam sit amet
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </Accordion>
  );
};
export default FaqAccordion;
