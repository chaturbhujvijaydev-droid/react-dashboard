import { useState } from "react";
import Layout from "../../components/layout/Layout";
import UserTable from "../../components/Users/UserTable";
import UserModal from "../../components/Users/UserModal";
import UserStats from "../../components/Users/UserStats";
import Pagination from "../../components/common/Pagination/Pagination";
import { users } from "../../data/userData";
import ViewUserModal from "../../components/Users/ViewUserModal";

const USERS_PER_PAGE = 5;

const Users = () => {
  const [showViewModal, setShowViewModal] = useState(false);
const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState(users);

  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // =============================
  // Statistics
  // =============================

  const totalUsers = userList.length;

  const activeUsers = userList.filter(
    (u) => u.status === "Active"
  ).length;

  const blockedUsers = userList.filter(
    (u) => u.status === "Blocked"
  ).length;

  const adminUsers = userList.filter(
    (u) => u.role === "Admin"
  ).length;

  // =============================
  // Add User
  // =============================

  const handleAddUser = (newUser) => {
    const fullName = `${newUser.firstName} ${newUser.lastName}`;

    setUserList((prev) => [
      {
        ...newUser,
        fullName,
      },
      ...prev,
    ]);

    setShowModal(false);
  };

  // =============================
  // Filter
  // =============================

  const filteredUsers = userList.filter((user) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      user.fullName.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.department.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search) ||
      user.city.toLowerCase().includes(search);

    const matchesRole =
      roleFilter === "All" ||
      user.role === roleFilter;

    const matchesStatus =
      statusFilter === "All" ||
      user.status === statusFilter;

    return (
      matchesSearch &&
      matchesRole &&
      matchesStatus
    );
  });

  // =============================
  // Pagination
  // =============================

  const totalPages = Math.ceil(
    filteredUsers.length / USERS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * USERS_PER_PAGE;

  const paginatedUsers =
    filteredUsers.slice(
      startIndex,
      startIndex + USERS_PER_PAGE
    );

  return (
    <Layout>

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Users
          </h2>

          <p className="text-muted mb-0">
            Manage all registered users.
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          + Add User
        </button>

      </div>

      {/* Statistics */}

      <UserStats
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        blockedUsers={blockedUsers}
        adminUsers={adminUsers}
      />

      {/* Filters */}

      <div className="row g-3 mb-4">

        <div className="col-lg-6">

          <input
            className="form-control"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />

        </div>

        <div className="col-lg-3">

          <select
            className="form-select"
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>

        </div>

        <div className="col-lg-3">

          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Active</option>
            <option>Blocked</option>
            <option>Inactive</option>
          </select>

        </div>

      </div>

      {/* Table */}

     <UserTable
  users={paginatedUsers}
  onView={(user) => {
    setSelectedUser(user);
    setShowViewModal(true);
  }}
  onEdit={(user) => console.log(user)}
  onDelete={(user) => console.log(user)}
/>

      {/* Modal */}

      <ViewUserModal
  show={showViewModal}
  user={selectedUser}
  onClose={() => {
    setShowViewModal(false);
    setSelectedUser(null);
  }}
/>

      <UserModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddUser}
      />

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredUsers.length}
        itemsPerPage={USERS_PER_PAGE}
        onPageChange={setCurrentPage}
      />

    </Layout>
  );
};

export default Users;