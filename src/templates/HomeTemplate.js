

import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../Layout/HeaderHome/Home"



export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRouter) => {
        return <Fragment>
           <Header/>
            <props.component {...propsRouter} />
           {/* <Footer/> */}
        </Fragment>
    }} />
}