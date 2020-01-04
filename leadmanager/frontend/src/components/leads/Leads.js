import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getLeads,deleteLead} from '../../actions/leads'

export class Leads extends Component {
    static propTypes = {
        leads:PropTypes.array.isRequired,
        getLeads:PropTypes.func.isRequired,
        deleteLead:PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.getLeads();
    }
    render() {
        return (
            <Fragment>
                <h2>Lead</h2>
                <table className="table table-striped"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Roll NO</th>
                        <th>Subject</th>
                        <th>Marks</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>{lead.marks}</td>
                            <td><button onClick={this.props.deleteLead.bind(this,lead.id)}
                            className="btn btn-danger btn-sm">Delete</button></td>



                        </tr>
                    ))}
                </tbody>

                </table>
            </Fragment>
        )
    }
}
const mapStatesToProps = state => ({
    leads:state.leads.leads
});

export default connect(mapStatesToProps,{getLeads,deleteLead})(Leads);
