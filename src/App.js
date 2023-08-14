import useLocalStorage from 'use-local-storage';
import React, { useState, useContext } from 'react';
import AddSubject from './components/add/AddSubject';
import Button from './components/UI/Button';
import SubjectCard from './components/subjects/SubjectCard';
import SubjectContext from './components/context/subject-context';
import './sass/style.scss';

function App() {
  const [isShowAddSubj, setIsShowAddSubj] = useState(false);
  const [isShowGrades, setIsShowGrades] = useState(false);

  const subjectsCtx = useContext(SubjectContext);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="header">
        <h1 data-theme={theme}> Students scores</h1>
        <Button
          onClick={() => {
            setIsShowAddSubj((prev) => !prev);
          }}
        >
          Add Subjects
        </Button>
        <Button onClick={switchTheme}>Mode</Button>
        <Button
          onClick={() => {
            setIsShowGrades((prev) => !prev);
          }}
        >
          {isShowGrades ? 'Close Grades' : 'Open Grades'}
        </Button>
      </div>
      {isShowAddSubj && (
        <AddSubject
          onSubmit={() => {
            setIsShowAddSubj(false);
          }}
        />
      )}
      {subjectsCtx.subjects.length > 0 && (
        <SubjectCard ifgrades={isShowGrades} />
      )}
    </div>
  );
}

export default App;
