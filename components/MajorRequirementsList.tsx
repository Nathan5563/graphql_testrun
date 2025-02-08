import { gql, useQuery } from '@apollo/client';

const GET_MAJOR_REQUIREMENTS = gql`
  query GetMajorRequirements {
    major_requirements {
      id
      major_version_id
      requirement_name
      requirement_type
      description
      required
    }
  }
`;

export default function MajorRequirementsList() {
  const { loading, error, data } = useQuery(GET_MAJOR_REQUIREMENTS);

  if (loading) return <p>Loading major requirements...</p>;
  if (error) {
    console.error("Error fetching major requirements:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Major Requirements</h2>
      <ul>
        {data.major_requirements.map((requirement: any, index: Number) => (
          <li key={requirement.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {requirement.id}<br />
            major_version_id: {requirement.major_version_id}<br />
            requirement_name: {requirement.requirement_name}<br />
            requirement_type: {requirement.requirement_type}<br />
            description: {requirement.description}<br />
            required: {requirement.required}
          </li>
        ))}
      </ul>
    </div>
  );
}