
'use client'
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'flowbite-react';

interface Subject {
  id: string;
  name: string;
}
interface text{
  msg:string;
  branch:string;
  semester:string;
  subject:string;

}

const MyDropdownComponent: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [res,setRes]=useState<text | null>(null)

  useEffect(() => {
    if (selectedBranch && selectedSemester) {
      fetchSubjects(selectedBranch, selectedSemester);
    }
  }, [selectedBranch, selectedSemester]);

  const fetchSubjects = async (branch: string, semester: string) => {
    try {
      const response = await fetch(`/api/subjects?branch=${branch}&semester=${semester}`);
      if (response.ok) {
        const data = await response.json();
        setSubjects(data.subjects);
      } else {
        console.error('Error fetching subjects:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'branch') {
      setSelectedBranch(value);
      setSelectedSemester(''); // TO RESET THE VALUE IF ANY CHNAGES
      setSubjects([]); 
    } else if (type === 'semester') {
      setSelectedSemester(value);
    } else if (type === 'subject') {
      setSelectedSubject(value);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      branch: selectedBranch,
      semester: selectedSemester,
      subject: selectedSubject,
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setRes(data)
        console.log('Response:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full h-screen px-4 py-2">
      <h1 className="text-2xl font-serif text-center mt-4">Upload paper</h1>
      <div className="w-[40%] px-4 gap-2 flex justify-between items-center mt-3 mx-auto">
        <Dropdown label="Branch">
          <Dropdown.Item onClick={() => handleSelect('branch', 'CE')}>CE</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('branch', 'ELECTRONICS')}>ELECTRONICS</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('branch', 'ELECTRICAL')}>ELECTRICAL</Dropdown.Item>
        </Dropdown>
        
        <Dropdown label="Semester" disabled={!selectedBranch}>
          <Dropdown.Item onClick={() => handleSelect('semester', 'Semester 1')}>Semester 1</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('semester', 'Semester 2')}>Semester 2</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect('semester', 'Semester 3')}>Semester 3</Dropdown.Item>
        </Dropdown>
        
        <Dropdown label="Subject" disabled={!selectedSemester}>
          {subjects.length === 0 ? (
            <Dropdown.Item disabled>No subjects available</Dropdown.Item>
          ) : (
            subjects.map((subject) => (
              <Dropdown.Item key={subject.id} onClick={() => handleSelect('subject', subject.name)}>
                {subject.name}
              </Dropdown.Item>
            ))
          )}
        </Dropdown>
      </div>
      <button 
        className="mt-4 p-2 bg-blue-500 text-white rounded mx-auto block"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div>
        {
          res ? (<div className='flex flex-col text-xl font-serif '>
            <h1>{res.msg}</h1>
            <p>{res.branch}</p>
            <p>{res.semester}</p>
            <p>{res.subject}</p>


          </div>):(null)
        }
      </div>
     
    </div>
  );
};

export default MyDropdownComponent;
