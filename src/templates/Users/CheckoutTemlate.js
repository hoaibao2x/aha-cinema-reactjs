import { Fragment } from "react"
import { Redirect, Route } from "react-router-dom"
import { USERLOGIN } from "../../util/varsSetting"


const CheckoutTemlate = (props) => {

    if (!localStorage.getItem(USERLOGIN)) {
        return <Redirect to='/login' />
    }




    return <Route exact path={props.path} render={(propsRouter) => {
        return <Fragment>
            <props.component {...propsRouter} />
        </Fragment>
    }} />
}

export default CheckoutTemlate