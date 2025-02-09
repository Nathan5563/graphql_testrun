"use client";

import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      net_id
      first_name
      last_name
    }
  }
`;

export default function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) {
    console.error("Error fetching users:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Users</h2>
      <ul>
        {data.users.map((user: any, index: number) => (
          <li key={user.id || `fallback-${index}`} className="border p-2 mb-2">
            id: {user.id}<br />
            net-id: {user.net_id}<br />
            first name: {user.first_name}<br />
            last name: {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
