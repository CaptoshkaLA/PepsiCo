/*
    1. Написать SELECT, который покажет Записи в таблице Table1,
    которых нет в Table2. Таблицы имеют связь по полю EntityID.
*/
SELECT Table1.*
FROM Table1
LEFT JOIN Table2 ON Table2.EntityID = Table1.EntityID
WHERE Table2.id IS NULL

/*
    2. Написать запрос (SELECT), который по заявке № 111
    посчитает сумму закупки, по каждому каталогу.
*/
SELECT CatalogID, SUM (PositionPrice * PositionQuantity)
FROM Table1
GROUP BY CatalogID
HAVING RequestID = ‘111’

/*
    3. Сделать доп. условие в задаче п.2 показать только те каталоги заявки №111,
    где сумма закупки по каталогу более 100 000.
*/
SELECT CatalogID, SUM (count*price) AS s
FROM t1
GROUP BY CatalogID
HAVING RequestID = 111 AND s > 100000
ORDER BY s;

