
const obtenerPacientes = (req, res) => {
    res.send('obtenerPacientes');
}

const obtenerPaciente = (req, res) => {
    res.send('obtenerPaciente');
}

const agregarPaciente = (req, res) => {
    res.send('agregarPaciente');
}

const actualizarPaciente = (req, res) => {
    res.send('actualizarPaciente');
}

const eliminarPaciente = (req, res) => {
    res.send('eliminarPaciente');
}

export {obtenerPacientes, obtenerPaciente, agregarPaciente, actualizarPaciente, eliminarPaciente}