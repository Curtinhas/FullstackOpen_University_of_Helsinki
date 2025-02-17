/* eslint-disable react/prop-types */
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Parts = (props) => {
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Parts parts={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts parts={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts parts={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises:
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

export default App;
