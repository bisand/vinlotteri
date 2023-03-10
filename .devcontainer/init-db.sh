#! /bin/bash

sudo service mariadb start

newUser='vinlotteri'
newDbPassword='password'
newDb='vinlotteri'
host=localhost
# host='%'

# MySQL 8 and higher versions
commands="CREATE DATABASE \`${newDb}\`;CREATE USER '${newUser}'@'${host}' IDENTIFIED BY '${newDbPassword}';GRANT USAGE ON *.* TO '${newUser}'@'${host}';GRANT ALL ON \`${newDb}\`.* TO '${newUser}'@'${host}';FLUSH PRIVILEGES;"

echo "${commands}" | sudo /usr/bin/mysql -u root
