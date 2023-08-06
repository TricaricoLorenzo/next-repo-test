import Link from "next/link";

// Important
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
const Dashboard = () => {


    return (
        <>
            <h2>Dashboard</h2>
            <div>
                <p>Go to <Link href={"/dashboard/settings"}>Settings</Link></p>
            </div>
            <div>
                <p>Go to <Link href={"/"}>Home</Link></p>
            </div>
        </>
    )
}

export default Dashboard;