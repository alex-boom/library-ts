import { useActiveMenuItem } from "components/use-hooks";
import { PageWrapDefault } from "components/layout";
import { Localize } from "components/service";
import dashboardImg from "assets/dasboard-example.png";


const Dashboard = () =>
{
    useActiveMenuItem([ "dashboard" ], [ "dashboard" ]);
    return (
        <PageWrapDefault
            dataExist={true}
            className="page-dashboard"
            title={<Localize>PAGES.Title_Dashboard</Localize>}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={dashboardImg} style={{ width: '62%' }} alt="dashboard" />
            </div>
        </PageWrapDefault>
    );
};

export default Dashboard;