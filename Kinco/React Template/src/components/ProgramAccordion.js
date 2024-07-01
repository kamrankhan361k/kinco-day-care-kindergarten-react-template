import { useState } from "react";
import { Accordion } from "react-bootstrap";

const ProgramAccordion = () => {
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
            Designing Better Links For Websites ?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="1st">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                abile invents veritatis et quasi architecto beatae vitae dicta
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
            Useful VS Code Extensions For Front-End ?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="2nd">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                abile invents veritatis et quasi architecto beatae vitae dicta
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
            Free Christmas Icon Sets And Vector Elements ?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="3rd">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                abile invents veritatis et quasi architecto beatae vitae dicta
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
            Better Links Websites Emails Guideline ?
          </Accordion.Toggle>
          <Accordion.Collapse as={"div"} eventKey="4th">
            <div className="toggle-content">
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque quae
                abile invents veritatis et quasi architecto beatae vitae dicta
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      </div>
    </Accordion>
  );
};
export default ProgramAccordion;
