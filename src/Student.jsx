import Score from "./Score";

const Student = (props) => {
  console.log(props.student.scores)
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h2>{props.student.bio}</h2>
      {props.student.scores.map(studentEl => {
        return <Score key = {studentEl.score} student = {studentEl}  />
      })}
    </div>
  );
}

export default Student;