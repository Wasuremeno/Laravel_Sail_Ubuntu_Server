#!/bin/bash

# Exit on error
set -e

echo "Starting production deployment..."

# Switch to production environment
cp .env.production .env

# Install dependencies (Sail will be kept since it's in require)
./vendor/bin/sail composer install --no-dev --optimize-autoloader

# Build frontend assets
./vendor/bin/sail npm ci
./vendor/bin/sail npm run build

# Stop existing containers
./vendor/bin/sail down

# Start production stack
./vendor/bin/sail up -d --build

# Wait for services to be ready
echo "Waiting for services to be ready..."
sleep 30

# Run database migrations
./vendor/bin/sail artisan migrate --force

# Production optimizations
./vendor/bin/sail artisan config:cache
./vendor/bin/sail artisan route:cache
./vendor/bin/sail artisan view:cache
./vendor/bin/sail artisan event:cache

# Set permissions (run inside container)
./vendor/bin/sail exec laravel.test chown -R www-data:www-data storage bootstrap/cache
./vendor/bin/sail exec laravel.test chmod -R 775 storage bootstrap/cache
./vendor/bin/sail artisan storage:link

echo "Deployment completed successfully!"
echo "Your site should be available at: https://hanagasumi.website"