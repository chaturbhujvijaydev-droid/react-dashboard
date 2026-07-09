import "./CommandPalette.scss";

const CommandPalette = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="cp-backdrop" onClick={onClose}></div>

      <div className="command-palette">

        <input
          autoFocus
          type="text"
          placeholder="Search commands..."
          className="command-input"
        />

        <div className="command-list">

          <div className="command-item">

            📊 Dashboard

          </div>

          <div className="command-item">

            👥 Users

          </div>

          <div className="command-item">

            🌙 Toggle Theme

          </div>

          <div className="command-item">

            👤 Profile

          </div>

        </div>

      </div>
    </>
  );
};

export default CommandPalette;