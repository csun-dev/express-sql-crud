-- migrate:up
ALTER TABLE restaurants
ADD category VARCHAR(100) NOT NULL;

-- migrate:down

