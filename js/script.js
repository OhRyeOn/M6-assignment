
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("empForm").addEventListener("submit", (e) => {
e.preventDefault()

const $ = (info) => document.getElementById(info)
 
    const id = $("id").value
    const name = $("name").value
    const ext = $("ext").value
    const email = $("email").value
    const department = $("department").value

    console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`)
})})