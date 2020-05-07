/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api/api';

import { Title, FormCRUD, ListCourses, Left, Right } from './styles';

interface Courses {
  id: string;
  courseName: string;
  university: string;
}

const Main: React.FC = () => {
  const [visibleList, setVisibleList]: any = useState(false);
  const [courses, setCourse] = useState<Courses[]>([]);
  const [newCourse, setNewCourse] = useState<string>('');
  const [newUniversity, setNewUniversity] = useState<string>('');
  const [idCourse, setIdCourse] = useState<string>('');

  useEffect(() => {
    api.get('courses').then((response) => {
      setCourse(response.data);
    });
  }, []);

  async function clearFields() {
    setNewCourse('');
    setNewUniversity('');
    setIdCourse('');
  }

  async function handleRemoveCourseList(id: string): Promise<void> {
    await api.delete(`courses/${id}`);
    setCourse(courses.filter((course) => course.id !== id));
  }

  async function handleAddCourse(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (newCourse === '') {
      alert('Please, enter 2 inputs');
    } else if (newUniversity === '') {
      alert('Please, enter 2 inputs');
    } else {
      const response = await api.post('courses', {
        courseName: newCourse,
        university: newUniversity,
      });

      const course = response.data;

      setCourse([...courses, course]);
      clearFields();
    }
  }
  async function handleRemoveCourseById(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (idCourse === '') {
      alert('please, enter the ID');
    }
    await api.delete(`courses/${idCourse}`);
    setCourse(courses.filter((course) => course.id !== idCourse));
    clearFields();
  }
  return (
    <>
      <Title>A little CRUD using React, Node and their closes techs</Title>

      <Left>
        <FormCRUD onSubmit={handleAddCourse}>
          <h3>Create a course</h3>
          <input
            name="courseName"
            placeholder="Insert your course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <input
            name="university"
            placeholder="Insert your university"
            value={newUniversity}
            onChange={(e) => setNewUniversity(e.target.value)}
          />
          <button type="submit">Create</button>
          <button type="button" onClick={clearFields}>
            Clear
          </button>
        </FormCRUD>
        <FormCRUD onSubmit={handleRemoveCourseById}>
          <h3>Delete Courses</h3>
          <input
            name="courseId"
            placeholder="Insert ID"
            value={idCourse}
            onChange={(e) => setIdCourse(e.target.value)}
          />
          <button id="remove" type="submit">
            Remove
          </button>
        </FormCRUD>
      </Left>
      <Right>
        <ListCourses>
          <h3>List Courses</h3>
          <button onClick={() => setVisibleList(true)}>List</button>
          {visibleList ? (
            <>
              <ul>
                {courses.map((course) => {
                  return (
                    <>
                      <li key={course.id}>
                        <div id="name">
                          {`Course name: ${course.courseName}`}
                        </div>
                        <div id="university">
                          University:
                          {`University name: ${course.university}`}
                        </div>
                        <div id="id">{`Id: ${course.id}`}</div>
                        <button
                          onClick={() => handleRemoveCourseList(course.id)}
                        >
                          Remove
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
              <button onClick={() => setVisibleList(false)}>Close list</button>
            </>
          ) : null}
        </ListCourses>
      </Right>

      {/* <Form onSubmit={}>
        <input name="courseID" placeholder="Enter the ID of the course" />
        <input
          name="courseID"
          placeholder="Enter the ID of the course"
          value={idCourse}
          onChange={(e) => setIdCourse(e.target.value)}
        />
        <input
          name="courseName"
          placeholder="Insert your course"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <input
          name="university"
          placeholder="Insert your new course"
          value={newUniversity}
          onChange={(e) => setNewUniversity(e.target.value)}
        />
        <div>
          <button type="button" value={idCourse} onClick={searchCourse}>
            Search
          </button>
          <button type="submit">Update</button>
          <button type="button" onClick={clearFields}>
            Clear
          </button>
        </div>
      </Form> */}
      {/* <Orientation>Search one course</Orientation>
      <Form onSubmit={handleSearchCourse}>
        <input
          name="searchCourse"
          placeholder="Enter course ID"
          value={idCourse}
          onChange={(e) => setIdCourse(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={clearFields}>
          Clear
        </button>
      </Form> */}
    </>
  );
};

export default Main;
