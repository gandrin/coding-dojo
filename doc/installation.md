Installation
============

Requirements
------------

Before anything, you need the following software installed on your machine:

  * [Node](https://nodejs.org/en/download/current/) >= 6
  * [Docker](https://docs.docker.com/engine/installation/)
  * [Docker Compose](https://docs.docker.com/compose/install/)


How to get SSH/VPN access
---------------------
To get secured shell access to the different environments, you have to:
  - Send an email to give.me.ssh@access.com with your SSH key
  - Add your ssh key into the `path/to/file` file of the project's provisioning
  - Reprovision the servers through the OpenStack interface


Project installation
--------------------
To install the project, you must at first clone the code repository :
``` bash
    git clone git@github.com:yourrepository/coding-dojo.git
```

Then, this project can be installed by running the install script:
``` bash
    cd coding-dojo/
    npm install
    docker-compose up
```
And then you can access to your application by this url : http://localhost/coding-dojo/

Application initialisation
--------------------------

Once you have everything required, you must:

``` bash
# Describe steps to init your application
```

Database initialisation
-----------------------

The last thing to do to make the project work locally: you must generate a database filled with entities.
For this purpose, see the [database documentation](data.md).
