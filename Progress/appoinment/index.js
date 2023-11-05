// SESI 1
// const fs = require('fs');

// fs.writeFileSync("node.txt", "Halo Semua");

// console.log("Selesai");



// SESI 2
// const fs = require('fs');
// import * as fs from 'fs'

// notes = [
//     {
//         "note": "Ini Hari Sabtu"
//     }
// ]
// Notes berupa JSON file sehingga untuk mengambil data stringnya harus di stringify


// Synchronous
// fs.writeFileSync("node.txt", JSON.stringify(notes));

// Asynchronous
// fs.writeFile("node.txt", JSON.stringify(notes), function (err) {
//     console.log("Write file done");
// });

// console.log("Selesai");



// SESI 3
import AppointmentService from './service/service.js'

// addAppointment("Ini Tanggal 4 Nov Hari Sabtu Mau booking Dong", "5 November")
// deleteAppointmentsByID("3a08a13f-2ce0-4d76-b746-c24abb755653")
// getAppointments()

const appointment = new AppointmentService()
appointment.updateAppointmentsByID("6342ff28-5301-4640-9fd5-587ca8a6f0a2", "Input Name Updated Class 1", "Input Date Updated Class 1")
appointment.getAppointments()