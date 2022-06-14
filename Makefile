up:
	docker-compose up
down: 
	docker-compose down
up-prod:
	docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up
build:
	docker-compose build