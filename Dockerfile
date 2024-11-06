# Use an official PHP image as a base
FROM php:8.2-fpm

# Set working directory inside the container
WORKDIR /var/www

# Install dependencies (including Composer, extensions)
RUN apt-get update && apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev zip git && \
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

# Expose port 9000 and run php-fpm
EXPOSE 9000
CMD ["php-fpm"]
