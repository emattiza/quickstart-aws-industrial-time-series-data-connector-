import React, { Component } from 'react'
import {
    Col, FormGroup, ControlLabel
} from 'react-bootstrap'

import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import moment from 'moment'


export default class Datepicker extends Component {

    static validator(value) {
        if (typeof value === 'string' && value.length > 0) return 'error';
        else if (value instanceof moment) return 'success';
        return null;
    }

    render() {
        return (
            <FormGroup
                controlId={`datepicker_${this.props.label}`}
                validationState={this.constructor.validator(this.props.value)}
            >
                <Col componentClass={ControlLabel} sm={4}>
                    {this.props.label}
                </Col>
                <Col sm={8}>
                    <Datetime
                        disabled
                        className="datepicker"
                        value={this.props.value}
                        onChange={(datetime) => this.props.onChange(datetime)}
                        {...this.props.datetimeProps}
                    />
                </Col>
            </FormGroup>
        )
    }
}
