import React, { useState } from 'react'
import { grades } from '../data/grades';
import Layout from '../components/Layout';

export default function CGPA() {
  const [sub, setSub] = useState([{
    name: '',
    grade: '',
  }]);
  const handleSemesterDelete = (e) => {
    const index = e.target.parentNode.parentNode;
    index.remove();
  }

  const handleAddSubject = () => {
    setSub([...sub, { name: '', grade: '' }])
  }
  const handleDeleteSub = (e) => {
    const index = e.target.parentNode;
    index.remove();
  }
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-primary text-center my-5 capitalize">Calculate Your GPA based on 5.00 Scale</h1>
      <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-5">
        <div id="semester">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold ">
              Enter Your Subjects and Grades
            </h2>
            {/* <button onClick={handleSemesterDelete} className=" text-red-600 border rounded-full w-6 h-6 text-center ">&times;</button> */}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <input type="text" placeholder="Subject Name" name='sub' className="col-span-6 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 " />
              <select  name='grade' className="col-span-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option disabled selected>Grade</option>
                {
                  Object.keys(grades).map((grade, index) => (
                    <option key={index} value={grades[grade]}>{grade}</option>
                  ))
                }
              </select>
    
              <button onClick={handleDeleteSub} className="col-span-1  text-red-600 border rounded-full w-6 h-6 text-center ">&times;</button>
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <input type="text" placeholder="Subject Name" name='sub' className="col-span-6 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 " />
              <select  name='grade' className="col-span-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option disabled selected>Grade</option>
                {
                  Object.keys(grades).map((grade, index) => (
                    <option key={index} value={grades[grade]}>{grade}</option>
                  ))
                }
              </select>
             
              <button onClick={handleDeleteSub} className="col-span-1  text-red-600 border rounded-full w-6 h-6 text-center ">&times;</button>
            </div>
            {
              sub.map((subject, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 items-center">
                  <input type="text" placeholder="Subject Name" name='sub' className="col-span-6 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 " />
                  <select name='grade' className="col-span-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option disabled selected>Grade</option>
                    {
                      Object.keys(grades).map((grade, index) => (
                        <option key={index} value={grades[grade]}>{grade}</option>
                      ))
                    }
                  </select>
                 
                  <button onClick={handleDeleteSub} className="col-span-1  text-red-600 border rounded-full w-6 h-6 text-center ">&times;</button>
                </div>
              ))
            }

          </div>
          <div className="flex justify-between items-center mt-6">
            <button onClick={handleAddSubject} className=" px-4 py-2 rounded-md border ">ADD SUBJECT</button>
          </div>
        </div>
        <hr className="my-6 border-muted" />
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold text-primary">Your GPA:</span>
            <span className="font-bold text-secondary"> 0.00</span>
          </div>
          <div>
            <span className="font-semibold text-primary">Your Points:</span>
            <span className="font-bold text-secondary"> 0.00</span>
          </div>
        </div>
      </div>

    </Layout>
  )
}
