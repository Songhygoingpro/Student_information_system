import React, { useState, useEffect } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import CurriculumTable from '@/components/ui/curriculum-table';

interface Program {
  id: number;
  name: string;
  code: string;
  description: string;
  duration_years: number;
  total_credits: number;
  degree_type: string;
  year: number;
  semester: number;
  subject_name: string;
  credit: number;
}

const Program: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [selectedProgramCode, setSelectedProgramCode] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/programs');
      const data = await response.json();
      setPrograms(data);
      if (data.length > 0) {
        setSelectedProgramCode(data[0].code);
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique program codes
  const programCodes = [...new Set(programs.map(p => p.code))];
  
  // Filter programs by selected code
  const selectedPrograms = programs.filter(p => p.code === selectedProgramCode);
  
  // Get program details (first entry has the program info)
  const programDetails = selectedPrograms[0];

  if (loading) {
    return (
      <DefaultLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Academic Programs</h1>
        
        {/* Program Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {programCodes.map((code) => {
              const program = programs.find(p => p.code === code);
              return (
                <button
                  key={code}
                  onClick={() => setSelectedProgramCode(code)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedProgramCode === code
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {program?.name}
                </button>
              );
            })}
          </div>
        </div>

        {programDetails && (
          <div className="space-y-6">
            {/* Program Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{programDetails.name}</h2>
              <p className="text-gray-600 mb-4">{programDetails.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Duration:</span> {programDetails.duration_years} years
                </div>
                <div>
                  <span className="font-semibold">Credits:</span> {programDetails.total_credits}
                </div>
                <div>
                  <span className="font-semibold">Degree:</span> {programDetails.degree_type}
                </div>
              </div>
            </div>

            {/* Curriculum Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Program Curriculum</h3>
              <CurriculumTable programs={selectedPrograms} />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Program;
