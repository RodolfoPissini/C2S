import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,
        TableBody,
        TableCell,
        TableContainer,
        TableHead,
        TableRow,
        Paper,
    } from '@material-ui/core';
import '../view/Home.css';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  let users= [
      {nome:'rodolfo',
       idade:35,
       genero:'M',
       altura:1.92,
       peso:87
       },
      {nome:'wellington',
       idade:34,
       genero:'M',
       altura:1.80,
       peso:87    },
      

    ]

  function DataTable() {
    const classes = useStyles();
  
    return (
        
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell class="table-Name" >Nome</TableCell>
              <TableCell class="table-Name" >Idade</TableCell>
              <TableCell class="table-Name" >genero</TableCell>
              <TableCell class="table-Name" >altura</TableCell>
              <TableCell class="table-Name" >Peso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow key={row.nome}>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell >{row.idade}</TableCell>
                <TableCell >{row.genero}</TableCell>
                <TableCell >{row.altura}</TableCell>
                <TableCell >{row.peso}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  export default DataTable;