const Score = (props) => {
  console.log(props.student.date)
  return (
    <div>
      <h2>{props.student.date}</h2>
      <h2>{props.student.score}</h2>
    </div>
  );
}

export default Score;