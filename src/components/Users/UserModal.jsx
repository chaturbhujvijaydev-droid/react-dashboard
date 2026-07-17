import UserForm from "./UserForm";

const UserModal = ({ show, onClose, onSave }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Add New User
              </h5>

              <button
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <UserForm
                onSave={onSave}
                onClose={onClose}
              />

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;