const QuestionOne = () => {
  console.log("Start");

  //  Q1.
  // for (let i = 1; i <= 2; i++) {
  //   setTimeout(() => {
  //     console.log(i, "second");
  //   }, i * 1000);
  // }
  // setTimeout(() => {
  //   console.log("End Text");
  // }, 3000);

  // Q2.
  const numbers = [10, 20, 30, 40, 50];
  console.log(numbers[3]);
  // console.log(numbers.length);

  return <div>{numbers.length}</div>;
};

export default QuestionOne;
