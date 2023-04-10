const Home  = (props) =>{
    console.log(props)
    return(
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
            <div className="card" >
                <img src="https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/size/w600/2020/05/Frame-9.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">$555</p>
                <button 
                    onClick={()=>
                        props.addToCardHandle({
                        name:'Card title',
                        price:1000
                    })} 
                    className="btn btn-primary">Add to Cart
                </button>
                <button 
                    onClick={()=>
                        props.removeToCardHandle({
                        name:'Card title',
                        price:1000
                    })} 
                    className="btn btn-danger ms-2">Remove to Cart
                </button>
                </div>
            </div>
            </div>
        </div>
       
      </div>
    )
}
export default Home;