// ** React Imports
import { Fragment, useState, useRef } from 'react'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

// ** Third Party Components
import XLSX from 'xlsx'
import * as FileSaver from 'file-saver'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Table,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'reactstrap'

const initialData = [
   {
    id: 1,
    name: 'David Khachatryan',
    position: 'Back-end Engineer',
    hours: '9hr 20m'
  },
  {
    id: 2,
    name: 'Artyom Arushanyan',
    position: 'Front-end engineer',
    hours: '4hr 17m'
  },
  {
    id: 3,
    name: 'David Chichyan',
    position: 'DevOps Engineer',
    hours: '12hr 8m'
  },
  {
    id: 4,
    name: 'Hayk Hakobjanyan',
    position: 'Project Manager',
    hours: '3hr 19m'
  },
  {
    id: 5,
    name: 'David Hovhannisyan',
    position: 'UI/UX Designer',
    hours: '4hr 48m'
  }
]

const Export = () => {
  // ** Ref
  const tableRef = useRef()

  // ** States
  const [data] = useState(initialData)
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [fileName, setFileName] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [fileFormat, setFileFormat] = useState('xlsx')

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleFilter = e => {
    const dataArr = data
    let filteredData = []
    const value = e.target.value
    setValue(value)
    if (value.length) {
      filteredData = dataArr.filter(col => {
        const startsWithCondition =
          col.name.toLowerCase().startsWith(value.toLowerCase()) ||
          col.position.toString().toLowerCase().startsWith(value.toLowerCase())
          col.hours.toString().toLowerCase().startsWith(value.toLowerCase())

        const includesCondition =
          col.name.toLowerCase().includes(value.toLowerCase()) ||
          col.position.toLowerCase().includes(value.toLowerCase())
          col.hours.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) return startsWithCondition
        else if (!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      setFilteredData(filteredData)
      setValue(value)
    }
  }

  const handleExport = () => {
    toggleModal()
    const bookType = fileFormat
    const wb = XLSX.utils.table_to_book(tableRef.current, { sheet: 'Sheet JS' })
    const wbout = XLSX.write(wb, { bookType, bookSST: true, type: 'binary' })

    const s2ab = s => {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff
      return buf
    }
    const file = fileName.length ? `${fileName}.${fileFormat}` : `excel-sheet.${fileFormat}`

    return FileSaver.saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), file)
  }

  const array = value ? filteredData : data
  const renderTableData = array.map(col => {
    return (
      <tr key={col.id}>
        <td>{col.name}</td>
        <td>{col.position}</td>
        <td>{col.hours}</td>
      </tr>
    )
  })
  return (
    <Fragment>
      <ExtensionsHeader
        title='Report'
      />
      <Row className='export-component'>
        <Col sm='12'>
          <Card>
            <CardBody className='pb-0'>
              <div className='d-flex justify-content-between flex-wrap flex-sm-row flex-column'>
                <Button color='primary' onClick={() => toggleModal()}>
                  Export
                </Button>
                <div className='d-flex align-items-center justify-content-end mt-sm-0 mt-1'>
                  <Label for='search-input' className='me-1'>
                    Search
                  </Label>
                  <Input id='search-input' bsSize='sm' type='text' value={value} onChange={e => handleFilter(e)} />
                </div>
              </div>
            </CardBody>
            <Table innerRef={tableRef} className='table-hover-animation mt-2' responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Spent hours</th>
                </tr>
              </thead>
              <tbody>{renderTableData}</tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <Modal
        isOpen={modal}
        toggle={() => toggleModal()}
        className='modal-dialog-centered'
        onClosed={() => setFileName('')}
      >
        <ModalHeader toggle={() => toggleModal()}>Export To Excel</ModalHeader>
        <ModalBody>
          <div className='mb-2'>
            <Input
              type='text'
              value={fileName}
              onChange={e => setFileName(e.target.value)}
              placeholder='Enter File Name'
            />
          </div>
          <div>
            <Input
              type='select'
              id='selectFileFormat'
              name='customSelect'
              value={fileFormat}
              onChange={e => setFileFormat(e.target.value)}
            >
              <option>xlsx</option>
              <option>csv</option>
              <option>txt</option>
            </Input>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => handleExport()}>
            Export
          </Button>
          <Button color='flat-danger' onClick={() => toggleModal()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default Export
