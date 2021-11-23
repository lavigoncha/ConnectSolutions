import executeQuery from "../services/mysql.service";

const agregarAgenda = async(req, res, next) => {
    const {fechaHora, linkMeet, estAgenda, ids} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO agenda (fechaHora, linkMeet, estAgenda) VALUES ('${fechaHora}','${linkMeet}','${estAgenda}')`);             
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }    
}

const agregarPacienteAAgenda= async(req,res) =>{
    const {idPac, idAgenda} = req.query;
    const response = await executeQuery(`INSERT INTO pacienteAgenda (idPac, idAgenda) VALUES ('${idPac}','${idAgenda}')`);
}

const eliminarAgenda = async(req, res) => {    
    await executeQuery(`DELETE FROM pacienteAgenda WHERE idAgenda = ${req.params.id}`)
    await executeQuery(`DELETE FROM Agenda WHERE idAgenda = ${req.params.id}`)
}