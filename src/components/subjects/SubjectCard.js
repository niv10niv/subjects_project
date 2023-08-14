import React, { useContext } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import SubjectsList from './SubjectsList';
import AddGrade from '../add/AddGrade';
import SubjectContext from '../context/subject-context';

const SubjectCard = (props) => {
  const contextCtx = useContext(SubjectContext);

  return (
    <Card className="card-container">
      {contextCtx.subjects.map((subject) => (
        <Card key={subject.id}>
          <Button
            onClick={() => {
              if (window.confirm('Are you sure?')) {
                contextCtx.removeSub(subject.id);
              }
            }}
          >
            Remove subject
          </Button>

          <SubjectsList
            ifgrades={props.ifgrades}
            name={subject.name}
            description={subject.description}
            grades={subject.grades}
            id={subject.id}
          ></SubjectsList>

          <AddGrade id={subject.id}></AddGrade>
        </Card>
      ))}
    </Card>
  );
};
export default SubjectCard;
