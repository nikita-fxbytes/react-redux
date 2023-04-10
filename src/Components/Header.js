const Header = (props) =>{
    console.log(props.data,"header")
    return (
        <div className="container mt-5">
        <div>
            <span>{props.data.length}</span>
            <img src="https://www.iconarchive.com/download/i87054/graphicloads/colorful-long-shadow/Cart-add.ico" />
        </div>
        </div>
    )
}
export default Header;