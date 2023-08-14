import React, { useState, useContext } from 'react';

import Button from '../UI/Button';

import SubjectContext from '../context/subject-context';

const AddGrade = (props) => {
  const [enteredGrade, setEnteredGrade] = useState('');
  const [isShowAddGrad, setIsShowAddGrad] = useState(false);

  const subjectsCtx = useContext(SubjectContext);

  const addGradeHandler = (e) => {
    e.preventDefault();
    if (
      enteredGrade.trim().length === 0 ||
      enteredGrade < 0 ||
      enteredGrade > 100
    ) {
      alert('Not invalid grade');
      return;
    }

    subjectsCtx.addGrade(enteredGrade, props.id);
    setEnteredGrade('');
    setIsShowAddGrad(false);
  };

  const gradeChangeHandler = (e) => {
    setEnteredGrade(e.target.value);
  };

  const showAddGra = () => {
    setIsShowAddGrad((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={showAddGra}>Add Grade</Button>
      {isShowAddGrad && (
        <form onSubmit={addGradeHandler}>
          <div className="form-group">
            <label className="input_label" htmlFor="grade">
              Grade:
            </label>
            <input
              style={{ width: '4rem' }}
              className="input"
              id="grade"
              type="number"
              value={enteredGrade}
              onChange={gradeChangeHandler}
            />
          </div>
          <Button type="submit">Send</Button>
        </form>
      )}
    </div>
  );
};

export default AddGrade;
