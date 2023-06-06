
function Table(props){
    return(
        <div className="table">
            <table className="word-table">
                <tr className="table-row">
                    <td className="table-column">{props.engWord}</td>
                    <td className="table-column">{props.transWord}</td>
                    <td className="table-column">{props.example}</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;