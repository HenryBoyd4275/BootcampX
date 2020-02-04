SELECT day, count(assignments.*) as number_of_Assignments, sum(duration)
FROM assignments
GROUP BY day
ORDER BY day