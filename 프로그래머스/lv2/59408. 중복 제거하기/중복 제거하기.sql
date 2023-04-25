-- 코드를 입력하세요
select count(*)
from (SELECT *
FROM ANIMAL_INS
WHERE NAME is not null
GROUP BY NAME) as t