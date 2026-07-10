import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CommandPalette.scss";

const pages = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Users", path: "/users" },
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
  { name: "Settings", path: "/settings" },
];

const CommandPalette = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="command-overlay"
      onClick={() => setOpen(false)}
    >
      <div
        className="command-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          autoFocus
          placeholder="Search pages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="command-list">
          {filteredPages.map((page) => (
            <div
              key={page.path}
              className="command-item"
              onClick={() => {
                navigate(page.path);
                setOpen(false);
                setSearch("");
              }}
            >
              {page.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;