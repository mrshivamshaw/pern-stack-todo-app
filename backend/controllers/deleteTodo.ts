import { pool } from "../database/db";



export const deleteTodo = async(req:any,res:any) =>{
    try {
        const client = await pool.connect();
        const {id} = req.body;
        const result = await client.query("DELETE FROM todo WHERE id = $1", [id]);
        client.release();
        return res.status(200).json({
            result,
            success: true,
            message: "Data deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}