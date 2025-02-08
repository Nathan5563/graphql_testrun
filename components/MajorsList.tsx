"use client";

import { gql, useQuery } from "@apollo/client";

const GET_MAJORS = gql`
  query GetMajors {
    majors {
      id
      major_name
      major_code
      description
    }
  }
`;

export default function MajorsList() {
  const { loading, error, data } = useQuery(GET_MAJORS);

  if (loading) return <p>Loading majors...</p>;
  if (error) {
    console.error("Error fetching majors:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Majors</h2>
      <ul>
        {data.majors.map((major: any) => (
          <li key={major.id} className="border p-2 mb-2">
            id: {major.id} <br />
            code: {major.major_code}<br />
            name: {major.major_name}<br />
            desc: {major.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
