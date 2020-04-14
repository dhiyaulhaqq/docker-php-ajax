# Docker - PHP - AJAX

Simple and quick example running PHP with docker that return JSON.

## Note

This setup assume you have docker ready in your machine.

## Setup

1. First clone this repository to your machine.

   > $ git clone https://github.com/dhiyaulhaqq/docker-php-ajax.git app
   >
   > $ cd app
   >


1. Build docker image.

   > $ docker build -t php-json .
   
2. Run the docker image.

   > $ docker run -dp 5000:80 php-json
   
3. Open localhost port 5000 in your browser.

   > http://localhost:5000
