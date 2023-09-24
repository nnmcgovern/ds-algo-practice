--  SELECT title, score FROM hacker_news ORDER BY score DESC LIMIT 5;

-- SELECT SUM(score) FROM hacker_news;

-- SELECT user, SUM(score) FROM hacker_news GROUP BY 1 HAVING SUM(score) > 200;

-- SELECT (309.0 + 304.0 + 282.0 + 517.0) / 6366.0;

-- SELECT user, COUNT(url) FROM hacker_news WHERE url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" GROUP BY 1;

-- SELECT CASE
-- WHEN url LIKE "%github.com%" THEN "Github"
-- WHEN url LIKE "%medium.com%" THEN "Medium"
-- WHEN url LIKE "%nytimes.com%" THEN "New York Times"
-- WHEN url IS NULL THEN "None"
-- ELSE "Other"
-- END AS "Source"
-- FROM hacker_news;

-- SELECT CASE
-- WHEN url LIKE "%github.com%" THEN "Github"
-- WHEN url LIKE "%medium.com%" THEN "Medium"
-- WHEN url LIKE "%nytimes.com%" THEN "New York Times"
-- ELSE "Other"
-- END AS "Source",
-- COUNT(url) FROM hacker_news GROUP BY 1;

-- SELECT timestamp FROM hacker_news LIMIT 10;

-- SELECT timestamp, strftime("%H", timestamp) FROM hacker_news GROUP BY 1 LIMIT 20;

-- SELECT strftime("%H", timestamp) AS "Hour", AVG(score), COUNT(*) FROM hacker_news GROUP BY 1;

SELECT strftime("%H", timestamp) AS "Hour", ROUND(AVG(score)) AS "Average Score", COUNT(*) AS "Stories" FROM hacker_news WHERE timestamp IS NOT NULL GROUP BY 1 ORDER BY 2 DESC;
-- strftime() is a SQLite function