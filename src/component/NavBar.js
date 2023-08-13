import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar text-bg-dark p-3 fixed-top" data-bs-theme="dark">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand col-*-*" href="/">
            Share your salary, anonymously!
          </a>
        </div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
