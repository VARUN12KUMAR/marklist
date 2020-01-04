import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addLead} from '../../actions/leads'

export class form extends Component {
    state={
        name: '',
        email:'',
        message:'',
        marks:'',
    }
    static propTypes = {
        addLead:PropTypes.func.isRequired
    }
    onChange=e=>this.setState ({[e.target.name]:e.target.value});

    onSubmit = e =>{

        e.preventDefault();
        const {name,email,message,marks}=this.state;
        const lead ={name,email,message,marks};
        this.props.addLead(lead)
    }
    render() {
        const {name,email,message,marks}=this.state;
        return (
            <div className="card card-body mt-4 mb-4 " >
                <h2>
                    Add Lead
                </h2>
                <form on onSubmit={this.onSubmit}>
                    <div className ="from-group">
                        <label> Name</label>
                        <input className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}/>
                    </div>
                    <div className ="from-group">
                        <label>Roll NO</label>
                        <input className="form-control"
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={email}/>
                    </div>
                    <div className ="from-group">
                        <label>Subject</label>
                        <input className="form-control"
                        type="text"
                        name="message"
                        onChange={this.onChange}
                        value={message}/>
                    </div>
                    <div className ="from-group">
                        <label> Get Marks</label>
                        <input className="form-control"
                        type="text"
                        name="marks"
                        onChange={this.onChange}
                        value={marks}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary sm my-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{addLead})(form)
