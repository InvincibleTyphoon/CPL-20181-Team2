DROP DATABASE emr_data;
CREATE DATABASE IF NOT EXISTS emr_data;

use emr_data;

CREATE TABLE IF NOT EXISTS patient(
        id int UNSIGNED NOT NULL AUTO_INCREMENT, 
        patientID char(20) NOT NULL, 
        name char(5) NOT NULL, 
        phone char(15) NOT NULL, 
        password char(15) NOT NULL, 
        birthday date NOT NULL, 
        PRIMARY KEY(id), 
        UNIQUE KEY(patientID)
        );

CREATE TABLE IF NOT EXISTS hospital(
        id int UNSIGNED NOT NULL,
        name char(15) NOT NULL,
        office char(10) NOT NULL,
        PRIMARY KEY(id)
        );


CREATE TABLE IF NOT EXISTS doctor(
        id int UNSIGNED NOT NULL AUTO_INCREMENT,
        doctorID char(20) NOT NULL, 
        name char(5) NOT NULL, 
        phone char(15) NOT NULL, 
        password char(15) NOT NULL, 
        hospitalID int UNSIGNED NOT NULL, 
        PRIMARY KEY(id), 
        UNIQUE KEY(doctorID),
        FOREIGN KEY(hospitalID) REFERENCES hospital(id)
        );

CREATE TABLE IF NOT EXISTS reservation(
        id int UNSIGNED NOT NULL AUTO_INCREMENT,
        patientID int UNSIGNED NOT NULL, 
        hospitalID int UNSIGNED NOT NULL,
        symptom VARCHAR(40) NOT NULL, 
        resDate date NOT NULL, 
        resTime time NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(patientID) REFERENCES patient(id),
        FOREIGN KEY(hospitalID) REFERENCES hospital(id)
        );

CREATE TABLE IF NOT EXISTS treatmentResult(
        id int UNSIGNED NOT NULL AUTO_INCREMENT,
        patientID int UNSIGNED NOT NULL, 
        hospitalID int UNSIGNED NOT NULL, 
        treatDate date NOT NULL, 
        treatTime time NOT NULL, 
        result VARCHAR(100) NOT NULL, 
        pay int NOT NULL, 
        revisit enum('Y', 'N') NOT NULL, 
        revisitID int UNSIGNED, 
        PRIMARY KEY(id),
        FOREIGN KEY(patientID) REFERENCES patient(id),
        FOREIGN KEY(hospitalID) REFERENCES hospital(id),
        FOREIGN KEY(revisitID) REFERENCES reservation(id)
        );


ALTER TABLE patient CONVERT TO CHARACTER SET utf8;
ALTER TABLE hospital CONVERT TO CHARACTER SET utf8;
ALTER TABLE doctor CONVERT TO CHARACTER SET utf8;
ALTER TABLE reservation CONVERT TO CHARACTER SET utf8;
ALTER TABLE treatmentResult CONVERT TO CHARACTER SET utf8;

INSERT INTO hospital VALUES (1001, '경대병원', '외과');
INSERT INTO hospital VALUES (1002, '경대병원', '내과');
INSERT INTO hospital VALUES (1003, '경대병원', '정형외과');
INSERT INTO hospital VALUES (1004, '경대병원', '신경외과');
INSERT INTO hospital VALUES (1005, '경대병원', '안과');
INSERT INTO hospital VALUES (1006, '경대병원', '이비인후과');
