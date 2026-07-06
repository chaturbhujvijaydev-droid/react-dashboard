import { useMemo, useState } from "react";
import Layout from "../../components/layout/Layout";
import UserTable from "./UserTable";
import Pagination from "../../components/common/Pagination/Pagination";
import { users } from "../../data/userData";

const USERS_PER_PAGE = 5;

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Search Users
  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return users.filter((user) => {
      return (
        user.fullName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search) ||
        user.city.toLowerCase().includes(search)
      );
    });
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;

  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  return (
    <Layout>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Users Management</h2>

        <button className="btn btn-primary">
          + Add User
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email, department, role or city..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Users Table */}
      <UserTable users={paginatedUsers} />

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