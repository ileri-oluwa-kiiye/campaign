import profile_stack from "../img/profile-stack.png"
import participant from "../img/participants-view.png"
import board from "../img/board-view.png"
import list from "../img/list-view.png"
import power from "../img/power-view.png"
import plus from "../img/grey-plus.png"

const Topbar = () => {

    const view_listing = [
        {
            icon : participant,
            title : 'Participants View'
        },
        {
            icon : board,
            title : 'Board View'
        },
        {
            icon : list,
            title : 'List View'
        },
        {
            icon : power,
            title : 'Power View'
        }
    ]


    return(
        <div className="topbar">
            <div className="content">

                <header>
                    <div>
                        <div>
                            <h1>New Campaign Run </h1>
                            <p>A new campaign launch work for brand new featur in May month</p>
                        </div>
                    </div>
                    <button>ADD MEMBERS</button>
                </header>
                <div className="views">
                    <div className="track-members">
                        <img src={profile_stack} alt="" />
                        <span>8 members</span>
                    </div>
                    <div className="view-list">
                        <ul>
                            {view_listing.map((link, index) => (
                                <li key={index}>
                                    <img src={link.icon} alt={link.title} /> <span>{link.title}</span>
                                </li>
                            ))}
                        </ul>
                        <img src={plus} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar