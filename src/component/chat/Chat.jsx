import "./chat.css"


const Chat =() =>{
    return(
        <div className='chat'>
        
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jaane Doe</span>
                        <p>Lorem ipsum, dolor sit amet conse</p>
                    </div>
                </div>
                
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="https://cdn.gadgets360.com/content/assets/entertainment/shah-rukh-khan-poster.jpg" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reprehenderit veritatis at. adipisicing elit. Corporis dolorum sequi sed ullam omnis nihil. Placeat aspernatur vitae quaerat quam aliquid cumque ipsum nostrum labore dolor ea laborum, </p>
                        <span>1 min</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reprehenderit veritatis at.consectetur adipisicing elit. Corporis dolorum sequi sed ullam omnis nihil. Placeat aspernatur vitae quaerat quam aliquid cumque ipsum nostrum labore dolor ea laborum, </p>
                        <span>1 min</span>
                    </div>
                </div>
                <div className="message">
                    <img src="https://cdn.gadgets360.com/content/assets/entertainment/shah-rukh-khan-poster.jpg" alt="" />
                    <div className="texts">
                        <p>Lorem ipsum dolor sit amet consectetur  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reprehenderit veritatis at.adipisicing elit. Corporis dolorum sequi sed ullam omnis nihil. Placeat aspernatur vitae quaerat quam aliquid cumque ipsum nostrum labore dolor ea laborum, </p>
                        <span>1 min</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./avatar.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut reprehenderit veritatis at. adipisicing elit. Corporis dolorum sequi sed ullam omnis nihil. Placeat aspernatur vitae quaerat quam aliquid cumque ipsum nostrum labore dolor ea laborum, </p>
                        <span>1 min</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." />
                <div className="emoji">
                    <img src="./emoji.png" alt="" />
                </div>
                <button className="sendbutton">Send</button>
            </div>
        </div>

    )
}

export default Chat