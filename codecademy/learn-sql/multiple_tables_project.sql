-- SELECT * FROM trips;
-- SELECT * FROM riders;
-- SELECT * FROM cars;

-- Primary key for each table: id

-- SELECT * FROM riders CROSS JOIN cars;

-- SELECT * FROM trips LEFT JOIN riders on trips.rider_id = riders.id;

-- SELECT * FROM trips JOIN cars on trips.car_id = cars.id;

-- SELECT * FROM riders UNION SELECT * FROM riders2;

-- SELECT AVG(cost) FROM trips;

-- SELECT * FROM riders WHERE total_trips < 500;

-- SELECT COUNT(*) FROM cars WHERE status = "active";

SELECT * FROM cars ORDER BY trips_completed DESC LIMIT 2;