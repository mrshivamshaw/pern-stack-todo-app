import { pool } from "../database/db";

interface Todo {
        id: number;
        title: string;
        description: string;
        status: boolean;
    }
const getTodo = async():Promise<Todo[]> => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM todo");
        const todos = result.rows as Todo[]; ;
        client.release();
        return todos;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
                
    }
}

export default getTodo