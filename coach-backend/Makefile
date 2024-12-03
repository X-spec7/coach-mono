DB_URL=postgresql://root:secret@localhost:5432/coach?sslmode=disable

start-postgres:
	docker run --name postgres14 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:14-alpine

stop-postgres:
	docker stop postgres14

remove-postgres:
	docker rm -f postgres14

create-database:
	docker exec -it postgres14 createdb --username=root --owner=root coach

drop-database:
	docker exec -it postgres14 dropdb coach

make-migrations:
	python3 manage.py makemigrations

apply-migrations:
	python3 manage.py migrate

rollback-migrations:
	python3 manage.py migrate <app_name> <migration_name>

delete-migrations:
	find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
	find . -path "*/migrations/*.pyc" -delete

run-server:
	python3 manage.py runserver
