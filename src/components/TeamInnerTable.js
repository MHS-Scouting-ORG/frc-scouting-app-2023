import React from 'react';
import { useTable, useSortBy } from 'react-table'

const TeamInnerTable = (props) => {

    const data = props.information;

    const columns = React.useMemo(
        () => [
            {
                Header: 'Match Summary',
                columns: [
                    {
                        Header: 'Match',
                        accessor: 'Match'
                    },
                    {
                        Header: 'Priorities/Strategies',
                        accessor: 'Strategy'
                    },
                    {
                        Header: 'Total Pts',
                        accessor: 'TotalPts'
                    },
                    {
                      Header: 'Grid Pts',
                      accessor: 'GridPts',
                    },
                    {
                        Header: 'Cone Acc',
                        accessor: 'ConeAcc'
                    },
                    {
                        Header: 'Cube Acc',
                        accessor: 'CubeAcc'
                    },] 
            },
            {
                Header: 'Autonomous',
                columns: [
                    {
                        Header: 'Auto Placement',
                        accessor: 'AutoPlacement'
                    },
                    {
                        Header: 'Mobility',
                        accessor: 'Mobility'
                    },
                    {
                        Header: 'Upper Cone Pts',
                        accessor: 'AutoUpperConePts'
                    },
                    {
                        Header: 'Upper 🟪 Pts',
                        accessor: 'AutoUpperCubePts'
                    },
                    {
                        Header: 'Mid Cone Pts',
                        accessor: 'AutoMidConePts'
                    },
                    {
                      Header: 'Mid 🟪 Pts',
                      accessor: 'AutoMidCubePts'
                    },
                    {
                        Header: 'Low Cone Pts',
                        accessor: 'AutoLowConePts'
                    },
                    {
                      Header: 'Low 🟪 Pts',
                      accessor: 'AutoLowCubePts'
                    },
                    {
                      Header: 'CS. Pts',
                      accessor: 'AutoChargeStationPts'
                    },]
            },
            {
                Header: 'Tele-Op',
                columns: [
                    {
                        Header: 'Upper Cone Pts',
                        accessor: 'TeleUpperConePts'
                    },
                    {
                      Header: 'Upper 🟪 Pts',
                      accessor: 'TeleUpperCubePts'
                    },
                    {
                        Header: 'Mid Cone Pts',
                        accessor: 'TeleMidConePts'
                    },
                    {
                      Header: 'Mid 🟪 Pts',
                      accessor: 'TeleMidCubePts'
                    },
                    {
                        Header: 'Low Cone Pts',
                        accessor: 'TeleLowConePts'
                    },
                    {
                      Header: 'Low 🟪 Pts',
                      accessor: 'TeleLowCubePts'
                    },
                    {
                        Header: 'Endgame Pts',
                        accessor: 'TeleEndgame'
                    },
                    {
                      Header: 'CS Start',
                      accessor: 'CSStart',
                    },
                    {
                      Header: 'CS End',
                      accessor: 'CSEnd',
                    },
                    {
                      Header: 'Endgame Comments',
                      accessor: 'EndComments',
                    },
                    {
                      Header: 'Smart Placement',
                      accessor: 'SmartPlacement',
                    },
                    {
                      Header: 'Foul | Tech',
                      accessor: 'NumberOfFoulAndTech',
                    },
                    {
                      Header: 'Penalties',
                      accessor: 'Penalties',
                    },
                    {
                      Header: '# RP',
                      accessor: 'NumberOfRankingPoints',
                    },]
            },
            {
              Header: 'Drive',
              columns: [
                    {
                      Header: 'Drive Strength',
                      accessor: 'DriveStrength',
                    },
                    {
                      Header: 'Drive Speed',
                      accessor: 'DriveSpeed',
                    },]
            },
            {
              Header: 'Other',
              columns: [
                    {
                      Header: 'Comments',
                      accessor: 'Comments',
                    },
                    {
                      Header: 'Scouter',
                      accessor: 'Email',
                    },
                    {
                      Header: 'Delete',
                      accessor: 'Delete',
                    },],
              
            }
        ],[]
    )

    const tableInstance = useTable({columns, data}, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

       return (
    <div>
      <table {...getTableProps()}>

        <thead>
          {
            headerGroups.map(headerGroup =>
            (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {
                  headerGroup.headers.map(column =>
                  (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        padding: '5px',
                        border: 'solid 1px black',
                        textAlign: 'center',
                        background: 'aliceblue'
                      }}
                    >
                      {column.render('Header')}
                    </th>
                  )
                  )
                }
              </tr>
            )
            )
          }
        </thead>

        <tbody {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '5px',
                            border: 'solid 1px grey',
                            textAlign: 'center',
                            background: 'black'
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    }
                    )
                  }
                </tr>
              )
            }
            )
          }
        </tbody>

      </table>
    </div>
  )

} 

export default TeamInnerTable;