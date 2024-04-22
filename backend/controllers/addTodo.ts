import { pool } from "../database/db";
const addTodo = async(title:string, description:string, status:boolean) => {
    try {
        const client = await pool.connect();
        const result = await client.query("INSERT INTO todo (description,titele) VALUES ($1) RETURNING *", [description,title]);
        const todo = result.rows[0] ;
        client.release();
        return todo;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
                
    }
}

export default addTodo