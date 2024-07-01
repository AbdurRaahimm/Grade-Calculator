import React, { useState } from 'react';
import { gpa } from '../data/grades';
import Layout from '../components/Layout';

export default function GPA() {
  const [subjects, setSubjects] = useState([
    { name: '', grade: '' }
  ]);

  const handleAddSubject = () => {
    setSubjects([...subjects, { name: '', grade: '' }]);
  };

  const handleDeleteSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSubjects = subjects.map((subject, i) => {
      if (i === index) {
        return {
          ...subject,
          [name]: value
        };
      }
      return subject;
    });
    setSubjects(updatedSubjects);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = subjects.length;
    subjects.forEach((subject) => {
      const gradeValue = parseFloat(subject.grade);
      if (gradeValue) {
        totalPoints += gradeValue;
      }
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  };

  const calculatePoints = () => {
    let totalPoints = 0;
    subjects.forEach((subject) => {
      const gradeValue = parseFloat(subject.grade);
      if (gradeValue) {
        totalPoints += gradeValue;
      }
    });
    return totalPoints;
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-primary text-center my-5 capitalize">Calculate Your GPA based on 5.00 Scale</h1>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-5">
        <div id="semester">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Enter Your Subjects and Grades</h2>
          </div>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center">
                <input
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  placeholder="Subject Name"
                  name="name"
                  value={subject.name}
                  className="col-span-6 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select
                  onChange={(e) => handleChange(index, e)}
                  name="grade"
                  value={subject.grade}
                  className="col-span-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option disabled value="">Grade</option>
                  {Object.keys(gpa).map((grade, i) => (
                    <option key={i} value={gpa[grade]}>{grade}</option>
                  ))}
                </select>
                <button
                  onClick={() => handleDeleteSubject(index)}
                  className="col-span-1 text-red-600 border border-blue-600 rounded-full w-6 h-6 text-center"
                >&times;</button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button onClick={handleAddSubject} className="px-4 py-2 rounded-md border">ADD SUBJECT</button>
          </div>
        </div>
        <hr className="my-6 border-muted" />
        <div className="flex justify-center items-center">
          <div >
            <span className="font-semibold ">Your GPA:</span>
            <span className="font-bold "> {calculateGPA().toFixed(2)}</span>
          </div>
          <div>
            {/* <span className="font-semibold ">Your Points:</span> */}
            {/* <span className="font-bold ">{calculatePoints().toFixed(2)}</span> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
