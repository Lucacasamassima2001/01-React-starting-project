import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }
  function reset() {
    setSelectedTopic("");
  }
  // if condition

  // let tabContent = <p>Please select a topic.</p>;

  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }
  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {/* Ternary condition  */}
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            <menu>
              <button onClick={reset}>Reset</button>
            </menu>
          </div>
        )}
      </Tabs>

      {/* if condition  */}
      {/* {tabContent} */}

      {/* Binary condition  */}

      {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </Section>
  );
}
