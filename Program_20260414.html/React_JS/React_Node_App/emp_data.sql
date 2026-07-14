CREATE TABLE IF NOT EXISTS fgp_empdata (
    id INT PRIMARY KEY,
    empId INT,
    name VARCHAR(64),
    department VARCHAR(64),
    salary DECIMAL(10.2)
);