2018-04-29 변경사항!

1. DB접근 api 개발
    prototype/node/db/api에 memberDB.js, reservationDB.js파일 모듈화 함. require해서 쓰면 됨
    (사실 backend/app.js에 이미 해놓음)

2. backend/app.js에 함수 살짝 써놓음..

3. prototype/node/db/emr_data.sql 구조 수정함
    (사용법 : 같은 디렉토리에 emr_data_readme.txt 참고
    mysql -u root -p < emr_data.sql;
    이 명령어 입력한 후 password 치면 됨
    주의 : '<' 대신 '>' 하면 sql파일 내 코드 아예 싹 다 날아감;;;;
    일단 쫄리고 데인게 많아서 내 노트북에 따로 저장해놓긴 했음..
