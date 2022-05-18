// ** React Imports
import Proptypes from 'prop-types'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

const ExtensionsHeader = props => {
  return (
    <Row className='mb-2'>
      <Col sm='12' className='ms-50'>
        <p className='font-medium-5 mt-1 extension-title' data-tour='extension-title'>
          {props.title}
        </p>
      </Col>
    </Row>
  )
}
export default ExtensionsHeader

// ** PropTypes
ExtensionsHeader.propTypes = {
  link: Proptypes.string,
  title: Proptypes.string.isRequired
}
