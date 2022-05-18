import React from 'react'
import {Col, Row} from "reactstrap"
import CardProfile from "../cards/advance/CardProfile"
import CardEmployeesTasks from "../cards/advance/CardEmployeesTask"
import Export from "../../extensions/import-export/Export"

const Profile = () => {
    return (
        <>
            <Row>
                <Col md={4} lg={4} sm={4}>
                    <CardProfile/>
                </Col>
                <Col md={4} lg={4} sm={4}/>
                <Col md={4} lg={4} sm={4}>
                    <CardEmployeesTasks/>
                </Col>
            </Row>
            <Row>
                <Export/>
            </Row>
        </>
    )
}

export default Profile
