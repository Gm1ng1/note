import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h2>My Notes</h2>

            <hr />

            <Outlet />
        </div>
    );
}