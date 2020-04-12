# "Hello World" Docker > PHP

Simple and quick example running PHP with docker that display "Hello World" in your browser.

## Note

This setup assume you have docker ready in your machine.

## Setup

1. First clone this repository to your machine.

   > $ git clone https://github.com/dhiyaulhaqq/docker-php-hello-world.git app
   >
   > $ cd app
   >


1. Build docker image.

   > $ docker build -t php-hello .
   
2. Run the docker image.

   > $ docker run -dp 5000:80 php-hello
   
3. Open localhost port 5000 in your browser.

   > http://localhost:5000
