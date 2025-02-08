import { gql, useQuery } from '@apollo/client';

const GET_MAJOR_TYPES = gql`
  query GetMajorTypes {
    major_types {
      id
      major_id
      type
    }
  }
`;

export default function MajorTypesList() {
  const { loading, error, data } = useQuery(GET_MAJOR_TYPES);

  if (loading) return <p>Loading major types...</p>;
  if (error) {
    console.error("Error fetching major types:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Major Types</h2>
      <ul>
        {data.major_types.map((majortype: any, index: Number) => (
          <li key={majortype.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {majortype.id}<br />
            major_id: {majortype.major_id}<br />
            type: {majortype.type}
          </li>
        ))}
      </ul>
    </div>
  );
}