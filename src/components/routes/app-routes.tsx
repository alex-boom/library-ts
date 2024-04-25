import { Routes, Route } from "react-router-dom";
import { Pages } from "components/pages";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Pages.Dashboard />} />
            <Route path="*" element={<Pages.Page404 />} />
        </Routes>
    );
};

export default AppRoutes;
