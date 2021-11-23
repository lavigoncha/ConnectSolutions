import { isNamedExportBindings } from "typescript";
import executeQuery from "../services/mysql.service";

const obtenerPacientes = (req, res, next) => {
    executeQuery('SELECT * FROM paciente').then(response => {
        const data ={
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        }
        res.json(data);
    }).catch(error => {
        next(error);
    });
}

const obtenerPaciente = async (req, res, next) => {
    const {id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM paciente WHERE idPac = ${id}`);
        res.send(response);
    }catch(error){
       next(error);
    }    
}

const agregarPaciente = async(req, res, next) => {
    const {nomPac, Edad, EmailPac} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO paciente (nomPac, Edad, EmailPac) VALUES ('${nomPac}','${Edad}', '${EmailPac}')`);
        console.log(response);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }    
}

const actualizarPaciente = async (req, res, next) => {
    const {nomPac, Edad, EmailPac} = req.body;
    const {id} = req.params;
    try{
        const response = await executeQuery( `UPDATE paciente SET nomPac = '${nomPac}', Edad = '${Edad}', EmailPac = '${EmailPac}' WHERE idPac='${id}'` );
        console.log(response);
        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${id}`});
    }catch(error){
        next(error);
    }    
}

const eliminarPaciente = (req, res, next) => {
    const {id} = req.params;
    executeQuery(`DELETE FROM paciente WHERE idPac = '${id}' `).then(response => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${id}`});
    }).catch(error => {
        next(error);
    });
}

export {obtenerPacientes, obtenerPaciente, agregarPaciente, actualizarPaciente, eliminarPaciente}