#!/bin/bash
cd /home/ubuntu/shrinidhi-vision-front
git pull origin main
npm install
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx