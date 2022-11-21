import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {

  const { isLoading } = useSelector(state => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ?
        <div style={{
          width: '100%', height: '100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'rgba(0,0,0,.5)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '99'
        }}>
          <img style={{ height: '100px' }} src="https://movflxx.netlify.app/img/logo/logo.png" alt="..." />
        </div> : ""
      }
    </Fragment>

  )
}
