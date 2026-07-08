import { useForm } from "react-hook-form";

const UserForm = ({ onSave, onClose }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {

    const newUser = {
      id: Date.now(),
      avatar: "https://i.pravatar.cc/150",
      status: "Active",
      ...data
    };

    onSave(newUser);

    reset();

    onClose();
  };

  return (

    <form onSubmit={handleSubmit(submitHandler)}>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label className="form-label">
            First Name
          </label>

          <input
            className="form-control"
            {...register("firstName", {
              required: "First Name is required"
            })}
          />

          <small className="text-danger">
            {errors.firstName?.message}
          </small>

        </div>

        <div className="col-md-6 mb-3">

          <label className="form-label">
            Last Name
          </label>

          <input
            className="form-control"
            {...register("lastName", {
              required: "Last Name is required"
            })}
          />

          <small className="text-danger">
            {errors.lastName?.message}
          </small>

        </div>

      </div>

      <div className="mb-3">

        <label>Email</label>

        <input
          type="email"
          className="form-control"
          {...register("email", {
            required: "Email is required"
          })}
        />

        <small className="text-danger">
          {errors.email?.message}
        </small>

      </div>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label>Phone</label>

          <input
            className="form-control"
            {...register("phone")}
          />

        </div>

        <div className="col-md-6 mb-3">

          <label>City</label>

          <input
            className="form-control"
            {...register("city")}
          />

        </div>

      </div>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label>Department</label>

          <select
            className="form-select"
            {...register("department")}
          >
            <option>IT</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>

        </div>

        <div className="col-md-6 mb-3">

          <label>Role</label>

          <select
            className="form-select"
            {...register("role")}
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Employee</option>
          </select>

        </div>

      </div>

      <div className="d-flex justify-content-end gap-2 mt-4">

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Save User
        </button>

      </div>

    </form>

  );
};

export default UserForm;