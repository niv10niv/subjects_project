import React, { useContext } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import SubjectContext from '../context/subject-context';

const SubjectsList = (props) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const subjContext = useContext(SubjectContext);

  const handleRemoveGrade = (gradeIndex) => {
    subjContext.removeGrade(gradeIndex, props.id);
  };

  return (
    <>
      <Card className="card__subj">
        <h3>{props.name}</h3>
        <h4> {props.description}</h4>
        {props.grades.length > 0 && (
          <Card className="card__avg">
            <h4 style={{ margin: '5px' }}>
              Average:{' '}
              {(
                props.grades.reduce((a, b) => a + b, 0) /
                (props.grades.length * 1.0)
              ).toFixed(2)}
            </h4>
          </Card>
        )}
      </Card>

      {props.grades.length > 0 && (
        <Card>
          <h4 style={{ margin: '2px' }}>Grades:</h4>

          {props.ifgrades &&
            props.grades.map((grade, index) => {
              return (
                <div className="card-container" key={index}>
                  <p>grade: {grade} </p>
                  <p>date: {date}</p>
                  <Button
                    className="button__x"
                    onClick={() => handleRemoveGrade(index)}
                  >
                    X
                  </Button>
                </div>
              );
            })}
        </Card>
      )}
    </>
  );
};

export default SubjectsList;
