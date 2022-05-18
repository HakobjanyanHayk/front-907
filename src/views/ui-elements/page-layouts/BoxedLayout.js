// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

const BoxedLayout = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Layout Boxed' breadCrumbParent='Layouts' breadCrumbActive='Layout Boxed' />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Info: </span>
          <span>
            Please check the{' '}
            <a
                href='#'
                target='_blank'
            >
              Layout boxed documentation
            </a>{' '}
            for more details.
          </span>
        </div>
      </Alert>
    </Fragment>
  )
}

export default BoxedLayout
