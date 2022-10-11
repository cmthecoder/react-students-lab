const Score = (props) => {
  console.log(props.student.date)
  return (
    <>
      <h2>{props.student.date}</h2>
      <h2>{props.student.score}</h2>
    </>
  );
}

export default Score;