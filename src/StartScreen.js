function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h3>Welcome to the React Quiz</h3>
      <p>{numQuestions} questions to test your React Mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
