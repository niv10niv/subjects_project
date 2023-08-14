import React, { useState, useContext } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import SubjectContext from '../context/subject-context';

const AddSubject = (props) => {
  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const subjectsCtx = useContext(SubjectContext);

  const addSubjectHandler = (e) => {
    e.preventDefault();
    if (enteredSubject.trim().length === 0) {
      alert('Not invalid subject');
      return;
    }
    subjectsCtx.addSub({
      name: enteredSubject,
      description: enteredDescription,
      grades: [],
      id: Math.random().toString(),
    });

    props.onSubmit();
    setEnteredSubject('');
    setEnteredDescription('');
  };

  const subjectChangeHandler = (e) => {
    setEnteredSubject(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setEnteredDescription(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={addSubjectHandler}>
        <div className="form-group">
          <label className="input_label" htmlFor="subject">
            Subject:
          </label>
          <input
            className="input"
            id="subject"
            type="text"
            value={enteredSubject}
            onChange={subjectChangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="input_label" htmlFor="description">
            Description:
          </label>
          <input
            className="input"
            id="description"
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
};

export default AddSubject;
