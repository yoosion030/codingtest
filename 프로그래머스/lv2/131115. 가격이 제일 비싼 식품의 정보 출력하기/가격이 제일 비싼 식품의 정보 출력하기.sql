-- 코드를 입력하세요
SELECT * 
FROM FOOD_PRODUCT
WHERE PRICE = (SELECT max(PRICE)
FROM FOOD_PRODUCT)