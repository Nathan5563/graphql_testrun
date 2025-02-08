import { gql, useQuery } from '@apollo/client';

const GET_MAJOR_VERSIONS = gql`
  query GetMajorVersions {
    major_versions {
      id
      major_type_id
      catalog_year
    }
  }
`;

export default function MajorVersionsList() {
  const { loading, error, data } = useQuery(GET_MAJOR_VERSIONS);

  if (loading) return <p>Loading major versions...</p>;
  if (error) {
    console.error("Error fetching major versions:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Major Versions</h2>
      <ul>
        {data.major_versions.map((version: any, index: Number) => (
          <li key={version.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {version.id}<br />
            major_type_id: {version.major_type_id}<br />
            catalog_year: {version.catalog_year}
          </li>
        ))}
      </ul>
    </div>
  );
}