import React from 'react';
import useFetch from 'utils/hooks/useFetch';
import { IPatient } from 'types/IPatient';
import { Card, Col, Row, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
const PatientInfo = ({ patientID }: any) => {
    console.log(useFetch<IPatient>('fhir/Patient/'));

    const { response } = useFetch<IPatient>(
        'fhir/Patient/' + patientID,
        patientID,
    );
    console.log(patientID);
    if (response && response !== undefined) {
        return displayPatientInfo(response);
    }
    return <div>no information</div>;
};

const displayPatientInfo = (response: IPatient) => {
    console.log(response);

    const name = response.name[0].given[0] + ' ' + response.name[0].family;
    return (
        <>
            <Link to="./Pasient/SkjemaVisning">
                <Row justify={'center'}>
                    <Col span={8}>
                        <Card
                            type="inner"
                            hoverable
                            key={response.id}
                            title={name}
                        >
                            <div
                                className="info-container"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Avatar
                                    shape="square"
                                    size={120}
                                    icon={<UserOutlined />}
                                />

                                <div className="info-left">
                                    <h1>Informasjon</h1>
                                    <p>
                                        <b>Pnr: </b> {response.id}
                                    </p>
                                    <p>
                                        <b>Kjønn: </b> {response.gender}
                                    </p>
                                    <p>
                                        <b>Fødselsdato:</b> {response.birthDate}
                                    </p>
                                </div>
                                <div className="info-right">
                                    <h1>Kontakt</h1>
                                    <p>
                                        <b>Addresse: </b>
                                        {response.address[0].line[0]}
                                    </p>
                                    <p>
                                        <b>Telefon: </b>
                                        {response.telecom[0].value}
                                    </p>
                                    <p>
                                        <b>E-post: </b>
                                        erling.vande.weijer@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Link>
            {/* // <div>navn: {response.name[0].given[0]}</div>
            // <div>kjønn: {response.gender} </div>
            // <div>Fødselsdato: {response.birthDate} </div>
            // <div>Etternavn: {response.name[0].family} </div>
            // <div>ID: {response.id}</div> */}
        </>
    );
};

export default PatientInfo;
