import React from 'react';

const SubjectContext = React.createContext({
  subjects: [],
  addSub: (sub) => {},
  addGrade: (grade) => {},
  removeSub: (id) => {},
  removeGrade: (grade) => {},
});

export default SubjectContext;
