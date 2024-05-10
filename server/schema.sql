CREATE DATABASE projectsapp;
USE projectsapp;


CREATE TABLE projects_sql (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_name VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE users_sql (
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_name VARCHAR(20) NOT NULL PRIMARY KEY,
    user_password VARCHAR(20) NOT NULL 
);


ALTER TABLE projects_sql
ADD FOREIGN KEY (author_name)
REFERENCES users_sql(user_name)
ON DELETE CASCADE;

INSERT INTO users_sql (first_name,last_name,user_name,user_password)
VALUES
('Sai Krishna Girish','Baratam','user@1','1234'),
('Nikhilesh','Baratam','user@2','12345');


INSERT INTO projects_sql (title,content,author_name)
VALUES
('The Bot','A music Bot which helps to play music','user@1'),
('The mini Bot','A virtual bot','user@2');