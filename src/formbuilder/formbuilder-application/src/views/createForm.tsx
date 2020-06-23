import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import NavBar from '../components/formBuilder/NavBar';
import Section from '../types/Section';
import SectionRenderer from '../components/formBuilder/SectionRenderer';
import Form from '../types/Form';
import { SectionList } from '../types/Form';
import * as DND from 'react-beautiful-dnd';
import './createForm.css';

function CreateForm(): JSX.Element {
    const initList: SectionList = { 0: new Section(0) };

    const [i, setI] = useState(0);
    const [sections, setSections] = useState(initList);

    function addNewSection(index?: number) {
        setI(i + 1);
        console.log(sections);
        if (index && !sections[index]) {
            setSections(Form.addSection(sections, index));
        } else {
            setSections(Form.addSection(sections, i + 1));
        }
    }

    function removeSection(index: number) {
        setSections(Form.removeSection(sections, index));
    }

    function onDragEnd(result: DND.DropResult) {
        setSections(Form.onDragEnd(sections, result));
    }

    return (
        <div>
            <Row>
                <Col span={24}>
                    <NavBar />
                </Col>
            </Row>
            <Row style={{ margin: '61px 0 0 0' }}>
                <DND.DragDropContext onDragEnd={onDragEnd}>
                    <DND.Droppable droppableId="section" type="section">
                        {(provided, snapshot) => (
                            <Col span={24}>
                                <div
                                    ref={provided.innerRef}
                                    style={{
                                        display: 'inline',
                                        position: 'relative',
                                    }}
                                >
                                    {Object.keys(sections).map(
                                        (sectionId: string, index: number) => {
                                            const section =
                                                sections[parseInt(sectionId)];
                                            return (
                                                <DND.Draggable
                                                    key={'section' + sectionId}
                                                    draggableId={
                                                        'section' + sectionId
                                                    }
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={
                                                                provided.innerRef
                                                            }
                                                            {...provided.draggableProps}
                                                        >
                                                            <SectionRenderer
                                                                key={section.id}
                                                                id={section.id}
                                                                removeSection={() =>
                                                                    removeSection(
                                                                        section.id,
                                                                    )
                                                                }
                                                                provided={
                                                                    provided
                                                                }
                                                                section={
                                                                    section
                                                                }
                                                            />
                                                        </div>
                                                    )}
                                                </DND.Draggable>
                                            );
                                        },
                                    )}
                                </div>
                                {provided.placeholder}
                            </Col>
                        )}
                    </DND.Droppable>
                </DND.DragDropContext>
            </Row>
            <Row>
                <Col span={24}>
                    <div
                        style={{
                            margin: '10px',
                            display: 'inline-block',
                        }}
                    >
                        <Button
                            className="section-button"
                            type="dashed"
                            ghost
                            size="large"
                            onClick={() => addNewSection()}
                        >
                            Legg til ny seksjon
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CreateForm;
