import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const UserTable = ({
  users,
  onView,
  onEdit,
  onDelete,
}) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-success";

      case "Inactive":
        return "bg-warning text-dark";

      case "Blocked":
        return "bg-danger";

      default:
        return "bg-secondary";
    }
  };

  const getRoleClass = (role) => {
    switch (role) {
      case "Admin":
        return "bg-primary";

      case "Manager":
        return "bg-info text-dark";

      case "HR":
        return "bg-warning text-dark";

      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4">

      <div className="card-body">

        <div className="table-responsive">

          <table className="table table-hover align-middle mb-0">

            <thead className="table-light">

              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
                <th>City</th>
                <th>Status</th>
                <th width="170">Actions</th>
              </tr>

            </thead>

            <tbody>

              {users.length > 0 ? (

                users.map((user) => (

                  <tr key={user.id}>

                    <td>#{user.id}</td>

                    <td>

                      <div className="d-flex align-items-center gap-3">

                        <img
                          src={user.avatar}
                          alt={user.fullName}
                          width="45"
                          height="45"
                          className="rounded-circle"
                        />

                        <div>

                          <strong>{user.fullName}</strong>

                          <br />

                          <small className="text-muted">
                            {user.phone}
                          </small>

                        </div>

                      </div>

                    </td>

                    <td>{user.email}</td>

                    <td>{user.department}</td>

                    <td>

                      <span
                        className={`badge ${getRoleClass(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </span>

                    </td>

                    <td>{user.city}</td>

                    <td>

                      <span
                        className={`badge ${getStatusClass(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>

                    </td>

                    <td>

                     <button
  className="btn btn-sm btn-outline-info me-2"
  onClick={() => onView(user)}
>
  <FaEye />
</button>

                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => onEdit(user)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(user)}
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-5"
                  >
                    No Users Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default UserTable;