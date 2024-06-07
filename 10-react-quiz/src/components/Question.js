import Options from "./Options";

function Question({ question }) {
  console.log(question);
  return (
    <div>
      <Options question={question} />
    </div>
  );
}

export default Question;
