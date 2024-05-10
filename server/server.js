import express from 'express';
import cors from 'cors';

import { getProjects,getProjectID,createProject,deleteProject, createUser,getUserName,getUsers,getProjnots} from './database.js';

const app=express()
app.use(express.json())
app.use(cors())
const port=8080


app.get("/projects",async(req,res) => {
  const projects = await getProjects();
  res.send(projects);
})


app.get("/projnots",async(req,res) => {
  const projects = await getProjnots();
  res.send(projects);
})

app.get("/project/:project_id",async(req,res) => {
  const id = req.params.project_id;
  const project = await getProjectID(id);
  res.send(project);
})


app.get("/user/:user_name",async(req,res) => {
  const user_name = req.params.user_name;
  const author_details = await getUserName(user_name);
  res.send(author_details);
})



app.post("/addproject", async(req,res) => {
  const {title,content,author_name} = req.body;
  const id= await createProject(title,content,author_name);
  const string = 'project added successfully of ' + id
  res.status(201).send(string);
})


app.post("/signup",async(req,res) => {
  const {first_name,last_name,user_name,user_password} = req.body;
  const name1= await createUser(first_name,last_name,user_name,user_password);
  const string = 'user added successfully of ' + name1
  res.status(201).send(string);
})


app.post("/signin",async(req,res) => {

  const {email,password} = req.body;

  const value = await getUserName(email);
  // res.send(value)
  if (value == null) {res.send('false')}
  else if(value.user_password===password) {res.send('true')}
  else {res.send('false')}
})


app.delete("/project/:project_id",async(req,res) =>{
  const id = req.params.project_id;
  await deleteProject(id);
  const str = `Successfully Deleted Project of id: ${id}`
  res.send(str);
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(port,() =>
    {
     console.log(`Server is running on port ${port}`)
    })