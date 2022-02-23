import React from "react";
import 'carbon-components/css/carbon-components.min.css';
import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import { headerData, rowData } from '../data/resultadosData'
import Buscador from "../components/buscador/buscadorIBM";
//import '../css/pages/resultados.css'
import TopBarLogged from "../components/TopBarLogged";




function Resultados({}){



    let header=["","Activos","Resultados"]
    let body=[
        ["1","Tablero de Control",55],
        ["2","Indicadores",1164],
        ["3","Dasborads",255],
        ["4","Proyectos de Visualización",48],
        ["5","Rendición de Cuentas",55],

    ]


    function icons(id){

        switch(id){
            case 1:
                    return <div></div>
            default: return <div></div>

        }

    }

    return (
        <React.Fragment>
                <div id="topBarLooged-container_home">
                    <TopBarLogged />
                </div>
            <div id="Buscador_container-Home">
                <Buscador></Buscador>
            </div>
            <div className="content-res">
                <div className="actives">
                <Table >
                    <thead>
                        <tr>
                            {header.map((head,i)=><td key={`i${i}`}>{head}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((singleRow,j)=><tr key={`j${j}`}>
                            {singleRow.map((td,k)=><td key={`j${j}k${k}${td}`}>{td}</td>)}
                        </tr>)}
                    </tbody>
                </Table>
                </div>
                <div className="dataTable-res">
                <DataTable  rows={rowData} headers={headerData}>
                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                        <TableContainer title="DataTable">
                        <Table {...getTableProps()}>
                            <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                                ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                {row.cells.map((cell) => (
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    )}
                    </DataTable>
                </div>
                
                    
            </div>
            

        </React.Fragment>
    )
}

export default Resultados