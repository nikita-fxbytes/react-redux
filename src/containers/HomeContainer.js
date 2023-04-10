import Home  from '../Components/Home'
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../Services/Actions/actions';

const mapStateToProps = state => ({
    data: state.cardItems

});
const mapDispatchToProps = dispatch=>({
    addToCardHandle: data=>dispatch(addToCart(data)),
    removeToCardHandle: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);