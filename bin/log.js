import mongoose from 'mongoose';
import smc from 'simple-mongoose-creator-v1';

export default smc({
    qtdAcessos: {
        // aqui eu quero implementar um log para verificar a quantidade de acessos nas rotas
    }
}, 'log');

// import { adicionar, contar } from '../middlewares/count';
// app.use(adicionar);
// console.log(contar()); 