// ** Images
import img3 from '@src/assets/images/portrait/small/musk.jpg'
import img2 from '@src/assets/images/portrait/small/kanye.jpg'
import img1 from '@src/assets/images/portrait/small/samuel.jpg'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardText, CardBody } from 'reactstrap'

const BlockquotesAvatar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Top Writers</CardTitle>
      </CardHeader>

      <CardBody>
          <blockquote className='blockquote'>
          <div className='d-flex'>
              <div className='me-1'>
                  <img className='rounded-circle' src={img3} alt='Generic placeholder image' height='64' width='64' />
              </div>
              <div className="d-flex align-items-center">Next I’m buying Coca-Cola to put the cocaine back in.</div>
          </div>
          <footer className='blockquote-footer text-end'>
              Elon Musk
          </footer>
      </blockquote>
          <blockquote className='blockquote'>
          <div className='d-flex'>
              <div className='me-1'>
                  <img className='rounded-circle' src={img2} alt='Generic placeholder image' height='64' width='64' />
              </div>
              <div className="d-flex align-items-center">
                  Rocky we gotta release our songs ASAP.
              </div>
          </div>
          <footer className='blockquote-footer text-end'>
              Kanye West
          </footer>
      </blockquote>
          <blockquote className='blockquote'>
          <div className='d-flex'>
            <div className='me-1'>
              <img className='rounded-circle' src={img1} alt='Generic placeholder image' height='64' width='64' />
            </div>
            <div className="d-flex align-items-center">
                If life turns her back on you, grab her ass.
            </div>
          </div>
          <footer className='blockquote-footer text-end'>
              Samuel L. Jackson
          </footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}
export default BlockquotesAvatar
