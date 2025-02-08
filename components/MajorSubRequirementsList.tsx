import { gql, useQuery } from '@apollo/client';

const GET_MAJOR_SUBREQUIREMENTS = gql`
  query GetMajorSubRequirements {
    major_subrequirements {
      id
      major_requirements_id
      requirement_name
      required
    }
  }
`;

export default function MajorSubRequirementsList() {
  const { loading, error, data } = useQuery(GET_MAJOR_SUBREQUIREMENTS);

  if (loading) return <p>Loading major subrequirements...</p>;
  if (error) {
    console.error("Error fetching major subrequirements:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Major Sub-Requirements</h2>
      <ul>
        {data.major_subrequirements.map((requirement: any, index: Number) => (
          <li key={requirement.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {requirement.id}<br />
            major_requirements_id: {requirement.major_requirements_id}<br />
            requirement_name: {requirement.requirement_name}<br />
            required: {requirement.required}
          </li>
        ))}
      </ul>
    </div>
  );
}