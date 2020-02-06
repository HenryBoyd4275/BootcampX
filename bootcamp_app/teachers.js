const { Pool } = require('pg');

const process = require('process');
args = process.argv;

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name, cohorts.name
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${args[2]}%'
ORDER BY teachers.name
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${res.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));