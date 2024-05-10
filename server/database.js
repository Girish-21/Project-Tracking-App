import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSWD,
    database: process.env.MYSQL_DATABASE,
  }).promise();


  export async function getProjects() {
    const [rows] = await pool.query("SELECT * FROM projects_sql");

    return rows;
  }


  export async function getProjnots() {
    const [rows] = await pool.query("SELECT * FROM projects_sql ORDER BY project_id DESC LIMIT 4");

    return rows;
  }

  export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users_sql");

    return rows;
  }

  // const projects_list = await getUsers();
  // console.log(projects_list);

  export async function getProjectID(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM projects_sql
    WHERE project_id = ?
    `,[id]);

    return rows[0];
  }


  export async function getUserName(user_name) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users_sql
    WHERE user_name = ?
    `,[user_name]);

    return rows[0];
  }

  // const project= await getProjectID(1);
  // console.log(project);

  // const user= await getUserName('user@1');
  // console.log(user);
  
export async function createProject(title,content,author_name) {
    const [result] = await pool.query(`
    INSERT INTO
    projects_sql (title,content,author_name)
    VALUES (? ,? ,?)
    `,[title,content,author_name]);

    return result.insertId;
}


export async function createUser(first_name,last_name,user_name,user_password) {
  const [result] = await pool.query(`
  INSERT INTO
  users_sql (first_name,last_name,user_name,user_password)
  VALUES (? ,? ,?,?)
  `,[first_name,last_name,user_name,user_password]);

  // const id=result;
  return user_name;
}

// const result = await createUser('Albert','Einstein','Albert@12','1234');
// console.log(result);


export async function deleteProject(id) {
    await pool.query(`
    DELETE FROM projects_sql
    WHERE project_id = ?
    `,[id]);
}
