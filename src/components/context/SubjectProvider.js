import { useState } from 'react';
import SubjectContext from './subject-context';

const defaultSubjState = {
  Subjects: [],
};

const SubjectProvider = (props) => {
  const [subjState, setSubjState] = useState(defaultSubjState);

  const addSubject = (subj) => {
    setSubjState((prevState) => ({
      ...prevState,
      Subjects: [...prevState.Subjects, subj],
    }));
  };

  const addGrade = (grade, id) => {
    setSubjState((prevState) => ({
      ...prevState,
      Subjects: prevState.Subjects.map((subject) =>
        subject.id === id
          ? { ...subject, grades: [...subject.grades, +grade] }
          : subject
      ),
    }));
  };

  const removeSubj = (id) => {
    setSubjState((prevState) => ({
      ...prevState,
      Subjects: prevState.Subjects.filter((subject) => subject.id !== id),
    }));
  };

  const removeGrade = (gradeIndex, subjectId) => {
    setSubjState((prevState) => ({
      ...prevState,
      Subjects: prevState.Subjects.map((subject) => ({
        ...subject,
        grades:
          subject.id === subjectId
            ? subject.grades.filter((_, index) => index !== gradeIndex)
            : subject.grades,
      })),
    }));
  };

  const subjContext = {
    subjects: subjState.Subjects,
    addSub: addSubject,
    addGrade: addGrade,
    removeSub: removeSubj,
    removeGrade: removeGrade,
  };

  return (
    <SubjectContext.Provider value={subjContext}>
      {props.children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;
