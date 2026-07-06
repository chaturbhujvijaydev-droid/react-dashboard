import { FaEdit, FaTrash } from "react-icons/fa";

const UserTable = ({ users }) => {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">

        <table className="table table-hover align-middle">

          <thead>

            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Role</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user.id}>

                <td>{user.id}</td>

                <td>
                  <img
                    src={user.avatar}
                    alt={user.fullName}
                    width="45"
                    className="rounded-circle"
                  />
                </td>

                <td>{user.fullName}</td>

                <td>{user.email}</td>

                <td>{user.department}</td>

                <td>{user.role}</td>
                <td>{user.city}</td>

                <td>

                  <span
                    className={`badge ${
                      user.status === "Active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td>

                  <button className="btn btn-sm btn-warning me-2">
                    <FaEdit />
                  </button>

                  <button className="btn btn-sm btn-danger">
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default UserTable;