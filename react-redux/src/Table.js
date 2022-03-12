import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeCharacter } from "./js/actions";
import { getData } from "./js/actions/index";

const mapStateToProps = state => {
    return { characters: state.characters };
};

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}

const TableRows = ({characters, removeCharacter}) => {
    const rows = characters.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const TableBody = connect(mapStateToProps, mapDispatchToProps)(TableRows)

class Table extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        const { removeCharacter } = this.props
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeCharacter: index => dispatch(removeCharacter(index))
    };
}

export default connect(null, { getData })(Table);;