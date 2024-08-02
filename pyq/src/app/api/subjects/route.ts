import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const branch = url.searchParams.get('branch');
  const semester = url.searchParams.get('semester');

  if (!branch || !semester) {
    return NextResponse.json({ error: 'Branch and semester are required' }, { status: 400 });
  }

 
  const allSubjects:any = {
    'CE': {
      'Semester 1': [{ id: '1', name: 'MATHS' }, { id: '2', name: 'PHYSICS' },{ id: '3', name: 'CHEMISTRY' },{ id: '4', name: 'ENGLISH' }],
      'Semester 2': [{ id: '1', name: 'MATHS II ' }, { id: '2', name: 'PPS' },{ id: '3', name: 'OOPS' },{ id: '4', name: 'ENGEENERING DRAWING' }],
    },
    'ELECTRONICS': {
      'Semester 1': [{ id: '1', name: 'ELECTRONIS 1' }, { id: '2', name: 'ECTRONIS 2' },{ id: '3', name: 'ECTRONIS 3' }],
      'Semester 2': [{ id: '1', name: 'ELECTRONICS SEM2' }, { id: '2', name: 'ELECTRONICS SEM2' },{ id: '3', name: 'ELECTRONICS SEM2' }],
    },
  };

  const subjects = allSubjects[branch]?.[semester] || [];

  return NextResponse.json({ subjects }, { status: 200 });
}
