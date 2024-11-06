# Use an official PHP image as a base
FROM php:8.2-fpm

# Set working directory inside the container
WORKDIR /var/www

# Install dependencies (including Composer, extensions)
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git nginx && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd pdo pdo_mysql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy the Laravel application into the container
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Set up permissions for Laravel storage and bootstrap directories
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Copy the Nginx configuration file (if you have one, or create one)
COPY nginx/default.conf /etc/nginx/conf.d/

# Expose port 80 for the HTTP traffic
EXPOSE 80

# Start both PHP-FPM and Nginx to serve the Laravel application
CMD service nginx start && php-fpm
