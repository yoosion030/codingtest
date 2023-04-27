-- 코드를 입력하세요
SELECT YEAR(sale.SALES_DATE) as YEAR, MONTH(sale.SALES_DATE) as MONTH, GENDER, count(distinct sale.USER_ID) as USERS 
FROM USER_INFO info JOIN ONLINE_SALE sale ON info.USER_ID = sale.USER_ID
WHERE info.GENDER is not null
GROUP BY YEAR(sale.SALES_DATE), MONTH(sale.SALES_DATE), info.GENDER
ORDER BY YEAR(sale.SALES_DATE), MONTH(sale.SALES_DATE), info.GENDER asc