import { pool } from "../database/db";

interface Todo{
    id: number;
    title: string;
    description: string;
    status: boolean;
}
export const updateTodo = async(req : any,res: any):Promise<Todo> => {
    try {
        const client = await pool.connect();
        const {id, title, description, status} = req.body;
        const result = await client.query("UPDATE todo set title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *", [title, description, status, id]);
        const todo = result.rows[0] as Todo;
        client.release();
        return res.status(200).json({
            success: true,
            data: todo,
            message: "Data updated successfully"
        }) ;
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}