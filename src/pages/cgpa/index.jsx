import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { grades } from '../../data/grades';

export default function CGPA() {
  const [semesters, setSemesters] = useState([{
    id: 1,
    subjects: [{
      name: '',
      grade: '',
      credits: ''
    }]
  }]);

  const handleAddSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      subjects: [{
        name: '',
        grade: '',
        credits: ''
      }]
    };
    setSemesters([...semesters, newSemester]);
  };

  const handleAddSubject = (semesterId) => {
    const semesterIndex = semesters.findIndex((semester) => semester.id === semesterId);
    if (semesterIndex !== -1) {
      const newSubject = {
        name: '',
        grade: '',
        credits: ''
      };
      semesters[semesterIndex].subjects.push(newSubject);
      setSemesters([...semesters]);
    }
  };

  const handleDeleteSemester = (semesterId) => {
    setSemesters(semesters.filter((semester) => semester.id !== semesterId));
  };

  const handleDeleteSubject = (semesterId, subjectIndex) => {
    const semesterIndex = semesters.findIndex((semester) => semester.id === semesterId);
    if (semesterIndex !== -1) {
      semesters[semesterIndex].subjects.splice(subjectIndex, 1);
      setSemesters([...semesters]);
    }
  };

  const handleChange = (semesterId, subjectIndex, e) => {
    const { name, value } = e.target;
    const updatedSemesters = semesters.map((semester) => {
      if (semester.id === semesterId) {
        const updatedSubjects = semester.subjects.map((subject, index) => {
          if (index === subjectIndex) {
            return {
              ...subject,
              [name]: value
            };
          }
          return subject;
        });
        return {
          ...semester,
          subjects: updatedSubjects
        };
      }
      return semester;
    });
    setSemesters(updatedSemesters);
  };

  const calculateSGPA = (subjects) => {
    let totalPoints = 0;
    let totalCredits = 0;
    subjects.forEach((subject) => {
      const gradeValue = grades[subject.grade];
      const credits = parseFloat(subject.credits);
      if (gradeValue && credits) {
        totalPoints += gradeValue * credits;
        totalCredits += credits;
      }
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  };

  const calculateCGPA = () => {
    let totalSGPA = 0;
    let totalSemesters = semesters.length;
    semesters.forEach((semester) => {
      totalSGPA += calculateSGPA(semester.subjects);
    });
    return totalSemesters === 0 ? 0 : totalSGPA / totalSemesters;
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-primary text-center my-5 capitalize">Calculate Your CGPA based on 4.00 Scale </h1>
      {semesters.map((semester, semesterIndex) => (
        <div key={semester.id} className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-primary">Semester {semester.id}</h2>
            <button onClick={() => handleDeleteSemester(semester.id)} className="text-red-600 border border-blue-600 rounded-full w-6 h-6 text-center ">&times;</button>
          </div>
          <div className="space-y-4">
            {semester.subjects.map((subject, subjectIndex) => (
              <div key={subjectIndex} className="grid grid-cols-12 gap-4 items-center">
                <input
                  type="text"
                  placeholder="Subject Name"
                  name="name"
                  value={subject.name}
                  onChange={(e) => handleChange(semester.id, subjectIndex, e)}
                  className="col-span-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select
                  name="grade"
                  value={subject.grade}
                  onChange={(e) => handleChange(semester.id, subjectIndex, e)}
                  className="col-span-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option disabled value="">
                    Grade
                  </option>
                  {Object.keys(grades).map((grade, index) => (
                    <option key={index} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Credits"
                  name="credits"
                  value={subject.credits}
                  onChange={(e) => handleChange(semester.id, subjectIndex, e)}
                  className="col-span-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button onClick={() => handleDeleteSubject(semester.id, subjectIndex)} className="col-span-1  text-red-600 border border-blue-600 rounded-full w-6 h-6 text-center ">&times;</button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <div>
                <span className="font-semibold">Semester {semester.id} SGPA:</span>
                <span className="font-bold"> {calculateSGPA(semester.subjects).toFixed(2)}</span>
              </div>
              <button onClick={() => handleAddSubject(semester.id)} className="px-4 py-2 rounded-md border">ADD SUBJECT</button>
            </div>
          </div>
          <hr className="my-6 border-muted" />
        </div>
      ))}

      <div className="flex justify-around items-center py-5">
        <button onClick={handleAddSemester} className="px-4 py-2 rounded-md border bg-white shadow-sm">ADD NEXT SEMESTER</button>
        <div>
          <span className="font-semibold text-primary">Your CGPA:</span>
          <span className="font-bold text-secondary"> {calculateCGPA().toFixed(2)}</span>
        </div>
      </div>
    </Layout>
  );
}
