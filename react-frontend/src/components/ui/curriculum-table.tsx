import React from 'react';

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

interface CurriculumTableProps {
  programs: Program[];
}

const CurriculumTable: React.FC<CurriculumTableProps> = ({ programs }) => {
  // Group programs by year
  const groupedByYear = programs.reduce((acc, program) => {
    if (!acc[program.year]) {
      acc[program.year] = [];
    }
    acc[program.year].push(program);
    return acc;
  }, {} as Record<number, Program[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedByYear).map(([year, yearPrograms]) => {
        // Group by semester
        const semester1 = yearPrograms.filter(p => p.semester === 1);
        const semester2 = yearPrograms.filter(p => p.semester === 2);

        return (
          <div key={year} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-100 px-6 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                YEAR {year}
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-r">
                      N
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-r">
                      Semester I
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-r">
                      Credit
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-r">
                      Semester II
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Credit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.from({ length: 5 }, (_, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900 border-r font-medium">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r">
                        {semester1[index]?.subject_name || ''}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r">
                        {semester1[index]?.credit || ''}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r">
                        {semester2[index]?.subject_name || ''}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {semester2[index]?.credit || ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumTable;
