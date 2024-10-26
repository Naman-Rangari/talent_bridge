import "./chatList.css"

const ChatList = () => {
    // PLUS PE CLICK KARNE KE BAAD VO MINUS BANTA HAI VID PART 26:30
    // const [addMode,setAddMode]= useState(false)
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src="./plus.png" alt="" className="add" />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList