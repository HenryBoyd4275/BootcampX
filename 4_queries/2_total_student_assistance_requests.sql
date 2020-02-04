SELECT count(assistance_requests.*) as assistance_requests, students.name
FROM students
JOIN assistance_requests ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;