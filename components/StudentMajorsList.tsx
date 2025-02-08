import { gql, useQuery } from '@apollo/client';

const GET_STUDENT_MAJORS = gql`
  query GetStudentMajors {
    student_majors {
      id
      student_id
      major_version_id
      declaration_date
    }
  }
`;

export default function StudentMajorsList() {
  const { loading, error, data } = useQuery(GET_STUDENT_MAJORS);

  if (loading) return <p>Loading student majors...</p>;
  if (error) {
    console.error("Error fetching student majors:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Student Majors</h2>
      <ul>
        {data.student_majors.map((major: any, index: Number) => (
          <li key={major.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {major.id}<br />
            student_id: {major.student_id}<br />
            major_version_id: {major.major_version_id}<br />
            declaration_date: {major.declaration_date}
          </li>
        ))}
      </ul>
    </div>
  );
}