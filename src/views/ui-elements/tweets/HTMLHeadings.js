import { Card, CardHeader, CardTitle, CardBody, CardText, Table } from 'reactstrap'

const HTMLHeadings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Heading
        </CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, aperiam at atque, autem consequatur corporis cum deleniti dicta doloribus eaque eius id in iste maxime molestias nisi nobis nostrum obcaecati odio omnis<br/><br/> Quasi quisquam ratione repudiandae tempora unde veritatis vero. Aliquid consectetur, dolor eveniet facere libero, quibusdam quidem quisquam quod reprehenderit suscipit tempora tempore.
       </CardText>
      </CardBody>
    </Card>
  )
}
export default HTMLHeadings
