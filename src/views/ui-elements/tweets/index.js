// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import BlockquoteAvatar from './BlockquotesAvatar'
import HTMLHeadings from './HTMLHeadings'

const tweets = () => {
  return (
    <Fragment>

        <div className='row breadcrumbs-top'>
            <div className='col-12'>
                <h2 className='float-start mb-2'>Tweets</h2>
            </div>
        </div>
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <HTMLHeadings />
        </Col>
        <Col md='6' sm='12'>
          <BlockquoteAvatar />
        </Col>
      </Row>
    </Fragment>
  )
}
export default tweets
