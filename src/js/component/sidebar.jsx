import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
    <aside className="bd-sidebar">
        <div className="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title" id="bdSidebarOffcanvasLabel">Browse docs</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
            </div>

            <div className="offcanvas-body">
                <nav className="bd-links w-100" id="bd-docs-nav" aria-label="Docs navigation">
                    <ul className="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Characters</Link></li>
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Films</Link></li>
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Species</Link></li>
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Starships</Link></li>
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Vehicles</Link></li>
                        <li><Link to="/" className="bd-links-link d-inline-block rounded">Planets</Link></li>
                    </ul>
                </nav>

            </div>
        </div>
    </aside>
)}

export default Sidebar