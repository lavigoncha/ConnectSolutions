import executeQuery from "../services/mysql.service";

const agregarTerapeuta = async(req, res, next) => {
    const {nomTerap, EmailTerap, idTema} = req.body;
    try{
        const response = await executeQuery(`INSERT INTO terapeuta (nomTerap, EmailTerap, idTema) VALUES ('${nomTerap}','${EmailTerap}','${idTema}')`);
        res.status(201).json({message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }    
}