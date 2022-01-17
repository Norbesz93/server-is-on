const express = require('express')
const app = express()

const students = require('./public/students.json')

const active = students.filter(student => student.status === true)

const finished = students.filter(student => student.status === false)

app.get("/", (req, res) =>{
    res.send("<h1>Hello World! It's Codecool</h1>")
})

app.get("/api/students", (req, res) =>{
   res.send(students)
})

app.get(`/api/students/:id`, (req, res) =>{
    res.send(students.filter(student => student.id == req.params.id))
 })

 app.get(`/api/students/active`, (req, res) =>{
    res.send(active)
 })

 app.get(`/api/students/finished`, (req, res) =>{
    res.send(finished)
 })

app.listen(6789)