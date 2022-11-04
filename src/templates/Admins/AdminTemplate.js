import {Route} from 'react-router-dom'
import AdminHome from '../../pages/Admins/AdminHome.jsx'


export const AdminTemplate = (props) => {
    
    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <AdminHome />
            <props.component {...propsRoute} />
        </>
    }} />
}
