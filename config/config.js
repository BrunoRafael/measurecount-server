import { Session } from "inspector";

export default {
    database: 'db',
    username: '',
    password: '',
    params: {
        dialect :'sqlite',
        //storage: `${process.env.NODE_ENV}_db.sqlite`, mudar depois que terminar de usar no windows (node_env da muito problema no windows)
        storage: 'db.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret :'V1rtu5',
    jwtSession: {session: false}
}