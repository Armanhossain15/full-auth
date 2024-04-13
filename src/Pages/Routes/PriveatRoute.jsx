import { useContext } from "react";
import { authContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PriveatRoute = ({children}) => {
    const {user} = useContext(authContext)
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};
PriveatRoute.propTypes ={
    children : PropTypes.node
}
export default PriveatRoute;