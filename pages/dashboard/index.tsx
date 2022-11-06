import Sidebar from "../../components/Sidebar";

function Dashboard(){
    return (
        <>
            <div className="w-full h-full bg-white">
                <Sidebar />
                <div>
                    <h2>Bem vindo!!</h2>
                </div>
            </div>
        </>
    )
}

export default Dashboard;