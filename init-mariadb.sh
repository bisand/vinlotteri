#! /bin/sh
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
    sudo mysql -u root -e "SET PASSWORD FOR 'root'@'localhost' = PASSWORD('${MYSQL_ROOT_PASSWORD}'); FLUSH PRIVILEGES;"
    sudo mysql -u root -e "SET PASSWORD FOR '${MYSQL_USER}'@'localhost' = PASSWORD('${MYSQL_PASSWORD}'); FLUSH PRIVILEGES;"
else
    echo "You need to have an .env file available with the variables MYSQL_USER, MYSQL_PASSWORD and MYSQL_ROOT_PASSWORD"
fi
