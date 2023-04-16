
// Importing every single icon from the img folder 
import dashboard from "../img/dashboard.png"
import settings from "../img/settings.png"
import activities from "../img/activities.png"
import users from "../img/users.png"
import addeduser from "../img/addeduser.png"
import affiliate from "../img/affiliate.png"
import profile from "../img/profile.png"
import logout from "../img/logout.png"
import add from "../img/whiteplus.png"


const Sidebar = () => {
    // All the links that'll be in the top side nav 
    const top_nav_links = [
        {
            icon : dashboard,
            title : 'Dashboard'
        },
        {
            icon : settings,
            title : 'Settings'
        },
        {
            icon : activities,
            title : 'Activities'
        },
        {
            icon : users,
            title : 'Users'
        },
        {
            icon : addeduser,
            title : 'Added User'
        },
        {
            icon : affiliate,
            title : 'Affiliate'
        },
    ]


    // Every link below the horizontal line 
    const bottom_nav_links = [
        {
            icon : profile,
            title : 'Profile'
        },
        {
            icon : logout,
            title : 'Logout'
        },
    ]



return(
    <>
        <div className="sidebar">
            <div className="content">
                <button className="welcome-user">
                    <img src={profile} alt="Welcome" />
                    <span>Welcome Keerthi</span>
                </button>
                <ul className="top_side_navigation">
                    {top_nav_links.map((link, index) => (
                        <li key={index}>
                            <img src={link.icon} alt={link.title} /> <span>{link.title}</span>
                        </li>
                    ))}
                </ul>
                <hr />
                <ul className="bottom_side_navigation">
                    {bottom_nav_links.map((link, index) => (
                        <li key={index}>
                            <img src={link.icon} alt={link.title} /> <span>{link.title}</span>
                        </li>
                    ))}
                </ul>
                <button className="add-project">
                    <img src={add} alt="" />
                    <span>NEW PROJECT</span>
                </button>
            </div>
        </div>
    </>
)
}

export default Sidebar